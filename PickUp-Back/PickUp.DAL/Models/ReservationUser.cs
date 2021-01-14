using System;
using System.Collections.Generic;
using System.Text;

namespace PickUp.DAL.Models
{
    public class ReservationUser
    {
        public int ReservationId { get; set; }
        public int CustomerId { get; set; }
        public string LastName { get; set; }
        public string FistName { get; set; }
        public string Email { get; set; }
        public string PhoneNum { get; set; }
        public string ResDate { get; set; }
        public string StartHour { get; set; }
        public string EndHour { get; set; }
        public int NumPerson { get; set; }
        public string InputDate { get; set; }

        public ReservationUser(int reservationId, int customerId, 
            string lastName, string fistName, string email, string phoneNum,
            string resDate, string startHour, string endHour, int numPerson,
            string inputDate)
        {
            ReservationId = reservationId;
            CustomerId = customerId;
            LastName = lastName;
            FistName = fistName;
            Email = email;
            PhoneNum = phoneNum;
            ResDate = resDate;
            StartHour = startHour;
            EndHour = endHour;
            NumPerson = numPerson;
            InputDate = inputDate;
        }

        public ReservationUser(int reservationId, int customerId, int numPerson)
        {
            ReservationId = reservationId;
            CustomerId = customerId;
            NumPerson = numPerson;
        }

        public ReservationUser(int reservationId, int customerId)
        {
            ReservationId = reservationId;
            CustomerId = customerId;
        }

    }
}
