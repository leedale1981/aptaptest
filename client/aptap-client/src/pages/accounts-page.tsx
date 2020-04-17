import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import AccountsList from '../components/account-list';
import Account from '../models/account';

export interface HomePageProps
{
    accessToken: string;
}

function AccountsPage(props: HomePageProps) {
    let defaultAccounts: Array<Account> = [];
    const [accounts, setAccounts] = useState(defaultAccounts);

    // Would usually extract this into a service or repository.
    const getAccountsData = (accessToken: string) => {
        fetch('http://localhost:5002/accounts', { 
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        .then((response) => {
            if (response.ok) {
                response.json().then((accountJsonArray) => {
                    setAccounts(accountJsonArray);
                });
            }
        });
    };
    
    if (accounts.length == 0) {
        getAccountsData(props.accessToken);
    }

    return (
        <header className="App-header">
            <Typography variant="h6">Accounts</Typography>
            <AccountsList accounts={accounts} />
        </header>
    );
}

export default AccountsPage;
