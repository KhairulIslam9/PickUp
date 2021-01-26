using PickUp.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PickUp.API.Models
{
    public class ApiCustomer
    {
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNum { get; set; }
        public string Email { get; set; }
        public string DeviceToken { get; set; }
        public string Url { get; set; }
        public string ThumbnailUrl { get; set; }
        public string Token { get; set; }

        public ApiCustomer(Customer customer)
        {
            CustomerId = customer.CustomerId;
            LastName = customer.LastName;
            FirstName = customer.FirstName;
            PhoneNum = customer.PhoneNum;
            Email = customer.Email;
            DeviceToken = customer.DeviceToken;
            Url = customer.Url;
            ThumbnailUrl = customer.ThumbnailUrl;
        }

        public ApiCustomer(int customerId, string firstName, string lastName, 
            string phoneNum, string email, string deviceToken, string url, string thumbnailUrl)
        {
            CustomerId = customerId;
            FirstName = firstName;
            LastName = lastName;
            PhoneNum = phoneNum;
            Email = email;
            DeviceToken = deviceToken;
            Url = url;
            ThumbnailUrl = thumbnailUrl;
        }
    }
}
