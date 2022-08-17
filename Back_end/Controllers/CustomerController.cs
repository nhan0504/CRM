using Back_end.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back_end.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CustomersController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<Customer> Get()
        {
            using (var context = new CRMContext())
            {
                return context.Customers.ToList();
            }
        }
    }
}
