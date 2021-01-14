using System;
using System.Collections.Generic;
using System.Text;

namespace PickUp.DAL.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string AdresseStreet { get; set; }
        public int AdresseNum { get; set; }
        public string AdresseCity { get; set; }
        public int AdresseZip { get; set; }
        public string PhoneNum { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public decimal Rating { get; set; }
        public string Url { get; set; }
        public string ThumbnailUrl { get; set; }

        public User(int userId, string name, string description, string phoneNum,
            string adresseStreet, int adresseNum, string adresseCity,
            int adresseZip, decimal latitude, decimal longitude,
            decimal rating, string url, string thumbnailUrl)
        {
            UserId = userId;
            Name = name;
            Description = description;
            AdresseStreet = adresseStreet;
            AdresseNum = adresseNum;
            AdresseCity = adresseCity;
            AdresseZip = adresseZip;
            PhoneNum = phoneNum;
            Latitude = latitude;
            Longitude = longitude;
            Rating = rating;
            Url = url;
            ThumbnailUrl = thumbnailUrl;
        }
    }
}
