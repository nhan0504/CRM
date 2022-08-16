using System;
using System.Collections.Generic;

#nullable disable

namespace Back_end.Models
{
    public partial class Customer
    {
        public int Id { get; set; }
        public string Fname { get; set; }
        public string Minit { get; set; }
        public string Lname { get; set; }
        public string Email { get; set; }
        public int? Phone { get; set; }
        public DateTime BirthDate { get; set; }
    }
}
