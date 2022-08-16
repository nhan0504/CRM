using System;
using System.Collections.Generic;

#nullable disable

namespace Back_end.Models
{
    public partial class TransactionDetail
    {
        public int ProId { get; set; }
        public int TransId { get; set; }
        public decimal Quantity { get; set; }
        public decimal TotalCost { get; set; }
    }
}
