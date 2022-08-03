using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM_API.Models
{
    public class CustomerContext: DbContext
    {
        // Constructor: Pass to the base constructor
        public CustomerContext(DbContextOptions<CustomerContext> options): base(options)
        {
        }

        // Act as a table -> A database set
        public DbSet<Customer> Customers { get; set; }
    }
}
