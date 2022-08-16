using System;
using System.Collections.Generic;

#nullable disable

namespace Back_end.Models
{
    public partial class Transaction
    {
        public int Id { get; set; }
        public int CustId { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
