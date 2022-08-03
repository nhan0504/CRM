using CRM_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM_API.CustomerData
{
    public class MockCustomerData : ICustomerData
    {
        private List<Customer> customers = new List<Customer>()
        {
            new Customer()
            {
                ID = Guid.NewGuid(),
                NAME = "Customer1"
            },
            new Customer()
            {
                ID = Guid.NewGuid(),
                NAME = "Customer2"
            }
        };
        public Customer AddCustomer(Customer customer)
        {
            customer.ID = Guid.NewGuid();
            customers.Add(customer);
            return customer;
        }

        public void DeleteCustomer(Customer customer)
        {
            customers.Remove(customer);
        }

        public Customer EditCustomer(Customer customer)
        {
            var existingCustomer = GetCustomer(customer.ID);
            existingCustomer.NAME = customer.NAME;
            return customer;
        }

        public Customer GetCustomer(Guid id)
        {
            return customers.SingleOrDefault(cus => cus.ID == id);
        }

        public List<Customer> GetCustomers()
        {
            return customers;
        }
    }
}
