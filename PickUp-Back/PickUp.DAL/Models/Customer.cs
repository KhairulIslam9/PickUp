using System;
using System.Collections.Generic;
using System.Text;

namespace PickUp.DAL.Models
{
    public class Customer
    {
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNum { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Url { get; set; }
        public string ThumbnailUrl { get; set; }

        public Customer(string firstName, string lastName, string phoneNum, 
            string email, string password, string url, string thumbnailUrl)
        {
            FirstName = firstName;
            LastName = lastName;
            PhoneNum = phoneNum;
            Email = email;
            Password = password;
            Url = url;
            ThumbnailUrl = thumbnailUrl;
        }
        internal Customer(int customerId, string firstName, string lastName, 
            string phoneNum, string email, string url, string thumbnailUrl)
            :this(firstName, lastName, phoneNum, email, null, url, thumbnailUrl)
        {
            CustomerId = customerId;
        }

        public Customer(int customerId, string url, string thumbnailUrl)
        {
            CustomerId = customerId;
            Url = url;
            ThumbnailUrl = thumbnailUrl;
        }
    }
}
