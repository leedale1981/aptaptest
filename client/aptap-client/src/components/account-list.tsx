import React from 'react';
import { Grid, Paper, List, ListItem, ListItemText, Avatar, Typography } from '@material-ui/core';
import Account from '../models/account';

export interface AccountListProps
{
    accounts: Array<Account>;
}

function AccountsList(props: AccountListProps) {
  return (
    <Paper>
        <List>
        {
            props.accounts.map((account: Account) => {
                return  <ListItem divider>
                            <Avatar></Avatar>
                            <ListItemText primary={account.name} secondary={account.clientName} style={{paddingLeft: 20}}></ListItemText>
                        </ListItem>
            })
        }
        </List>
    </Paper>
  );
}

export default AccountsList;
