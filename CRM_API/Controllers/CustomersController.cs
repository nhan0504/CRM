using CRM_API.CustomerData;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRM_API.Models;

namespace CRM_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private ICustomerData _customerData;
        public CustomersController(ICustomerData customerData)
        {
            _customerData = customerData;
        }

        [HttpGet]
        public IActionResult GetCustomers()
        {
            //Wrap in the Ok object -> For passing data back
            return Ok(_customerData.GetCustomers());
        }

        [HttpGet("{id}")]
        public IActionResult GetCustomer(Guid id)
        {
            var customer = _customerData.GetCustomer(id);

            if (customer != null)
            {
                return Ok(customer);
            }
            return NotFound($"The customer with Id: {id} was not found");          
        }

        [HttpPost]
        public IActionResult GetCustomer(Customer customer)
        {
             _customerData.AddCustomer(customer);
            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host 
                           + HttpContext.Request.Path + "/" + customer.ID,
                           customer);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCustomer(Guid id)
        {
            var customer = _customerData.GetCustomer(id);

            if (customer != null)
            {
                _customerData.DeleteCustomer(customer);
                return Ok();
            }
            return NotFound($"The customer with Id: {id} was not found");
        }

        [HttpPatch("{id}")]
        public IActionResult EditCustomer(Guid id, Customer customer)
        {
            var existingCustomer = _customerData.GetCustomer(id);

            if (existingCustomer != null)
            {
                customer.ID = existingCustomer.ID;
                _customerData.EditCustomer(customer);
                return Ok(customer);
            }
            return NotFound($"The customer with Id: {id} was not found");
        }
    }
}
