using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PickUp.API.Models
{
    public class RegisterForm
    {
        [Required]
        [StringLength(50 , MinimumLength = 2)]
        public string LastName { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 2)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(320)]
        public string Email { get; set; }
        [Required]
        [MaxLength(15)]
        public string PhoneNum { get; set; }
        [Required]
        [MaxLength(20)]
        public string Password { get; set; }
    }
}
