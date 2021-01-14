using PickUp.DAL.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PickUp.API.Models
{
    public class ReservationForm
    {
        [Required]
        public int UserId { get; set; }
        [Required]
        public string ResDate { get; set; }
        [Required]
        public string StartHour { get; set; }
        [Required]
        public string EndHour { get; set; }
        [Required]
        public int NumPlaceAvailable { get; set; }

    }
}
