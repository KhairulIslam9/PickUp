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
        public string Url { get; set; }
        public int NumPlaceAvailable { get; set; }

        
        public ReservationCustomer(int userId, string name,
            string resDate, string startHour, string endHour,
            int numPlaceAvailable, string url)
        {
            UserId = userId;
            Name = name;
            ResDate = resDate;
            StartHour = startHour;
            EndHour = endHour;
            NumPlaceAvailable = numPlaceAvailable;
            Url = url;
        }

        internal ReservationCustomer(int reservationId, int userId,
            string name, string resDate, string startHour,
            string endHour, int numPlaceAvailable, string url):
            this(userId, name, resDate, startHour, endHour, numPlaceAvailable, url)
        {
            ReservationId = reservationId;
        }
        public ReservationCustomer(int reservationId, int userId, string resDate,
            string startHour, string endHour, int numPlaceAvailable)
        {
            ReservationId = reservationId;
            UserId = userId;
            ResDate = resDate;
            StartHour = startHour;
            EndHour = endHour;
            NumPlaceAvailable = numPlaceAvailable;
        }
        public ReservationCustomer(string resDate,
            string startHour, string endHour, int numPlaceAvailable, int userId)
        {
            UserId = userId;
            ResDate = resDate;
            StartHour = startHour;
            EndHour = endHour;
            NumPlaceAvailable = numPlaceAvailable;
        }

    }
}
