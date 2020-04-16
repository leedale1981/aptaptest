using System.Collections.Generic;
using ApTap.Services.BusinessService.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ApTap.Services.BusinessService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class AccountsController : ControllerBase
    {
        private readonly ILogger<AccountsController> _logger;

        public AccountsController(ILogger<AccountsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var accounts = new List<Account>()
            {
                new Account()
                {
                    Id = 1,
                    Name = "Test Account 1",
                    ClientName = "Test Client 1"
                },
                new Account()
                {
                    Id = 2,
                    Name = "Test Account 2",
                    ClientName = "Test Client 2"
                },
                new Account()
                {
                    Id = 3,
                    Name = "Test Account 3",
                    ClientName = "Test Client 3"
                }
            };

            return new OkObjectResult(accounts);
        }
    }
}
