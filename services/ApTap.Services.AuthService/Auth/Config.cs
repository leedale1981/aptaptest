using System.Collections.Generic;
using IdentityServer4.Models;

namespace ApTap.Services.AuthService
{
    public class Config
    {
        private static readonly string _clientId = "clientid"; // This would be generated in a real app;
        private static readonly string _clientSecret = "secret"; // This would be generated in a real app;
        private static readonly string _allowedScopeId = "some-business-service";

        // Clients allowed to access resources from Auth Server
        public static IEnumerable<Client> GetClients()
        {
            return new List<Client>
            {
                new Client
                {
                    ClientId = _clientId,
                    AllowedGrantTypes = GrantTypes.ClientCredentials,
                    ClientSecrets =
                    {
                        new Secret(_clientSecret.Sha256())
                    },
                    AllowedScopes = {_allowedScopeId}
                }
            };
        }
    
        // APIs allowed to access the Auth server
        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource>
            {
                new ApiResource(_allowedScopeId, "Business Service")
            };
        }
    }
}