using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRM_API.Models
{
    public class Customer
    {
        [Key]
        public Guid ID { get; set; }
        [Required]
        public string NAME { get; set; }

        //public string FNAME { get; set; }
        //public string LNAME { get; set; }
        //public string MINIT { get; set; }
        //public string SEX { get; set; }
        //public string EMAIL { get; set; }
        //public string PHONE { get; set; }
        //public string BDATE { get; set; }
    }
}
