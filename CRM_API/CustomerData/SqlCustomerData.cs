using CRM_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM_API.CustomerData
{
    public class SqlCustomerData : ICustomerData
    {
        private CustomerContext _customerContext;
        public SqlCustomerData(CustomerContext customerContext)
        {
            _customerContext = customerContext;
        }

        public Customer AddCustomer(Customer customer)
        {
            customer.ID = Guid.NewGuid();
            _customerContext.Add(customer);
            _customerContext.SaveChanges();
            return customer;
        }

        public void DeleteCustomer(Customer customer)
        {
            _customerContext.Customers.Remove(customer);
            _customerContext.SaveChanges();
        }

        public Customer EditCustomer(Customer customer)
        {
            var existingCustomer = _customerContext.Customers.Find(customer.ID);
            if (existingCustomer != null)
            {
                _customerContext.Customers.Update(customer);
                _customerContext.SaveChanges();
            }
            return customer;
        }

        public Customer GetCustomer(Guid id)
        {
            return _customerContext.Customers.Find(id);
        }

        public List<Customer> GetCustomers()
        {
            return _customerContext.Customers.ToList();
        }
    }
}
