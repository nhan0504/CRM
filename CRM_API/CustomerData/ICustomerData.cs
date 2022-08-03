using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRM_API.Models;

namespace CRM_API.CustomerData
{
    public interface ICustomerData
    {
        List<Customer> GetCustomers();

        Customer GetCustomer(Guid id);
        Customer AddCustomer(Customer customer);
        void DeleteCustomer(Customer customer);
        Customer EditCustomer(Customer customer);
    }
}
