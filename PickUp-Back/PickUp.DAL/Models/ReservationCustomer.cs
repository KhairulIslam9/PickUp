using System;
using System.Collections.Generic;
using System.Text;

namespace PickUp.DAL.Models
{
    public class ReservationCustomer
    {
        public int ReservationId { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public string ResDate { get; set; }
        public string StartHour { get; set; }
        public string EndHour { get; set; }
        public int NumPlaceAvailable { get; set; }

        
        public ReservationCustomer(int userId, string name,
            string resDate, string startHour, string endHour,
            int numPlaceAvailable)
        {
            UserId = userId;
            Name = name;
            ResDate = resDate;
            StartHour = startHour;
            EndHour = endHour;
            NumPlaceAvailable = numPlaceAvailable;
        }

        internal ReservationCustomer(int reservationId, int userId,
            string name, string resDate, string startHour,
            string endHour, int numPlaceAvailable):
            this(userId, name, resDate, startHour, endHour, numPlaceAvailable)
        {
            ReservationId = reservationId;
        }
        public ReservationCustomer(int userId, string resDate,
            string startHour, string endHour, int numPlaceAvailable)
        {
            UserId = userId;
            ResDate = resDate;
            StartHour = startHour;
            EndHour = endHour;
            NumPlaceAvailable = numPlaceAvailable;
        }

    }
}
