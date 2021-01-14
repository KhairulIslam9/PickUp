﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PickUp.API.Models
{
    public class PickReservationForm
    {
        [Required]
        public int ReservationId { get; set; }
        [Required]
        public int CustomerId { get; set; }
        [Required]
        public int NumPerson { get; set; }

    }
}
