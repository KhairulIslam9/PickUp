using System;
using System.Collections.Generic;
using System.Text;

namespace PickUp.DAL.Models
{
    public class Event
    {
        public int EventId { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public string ThumbnailUrl { get; set; }
        public decimal Rating { get; set; }

        public Event(int eventId, int userId, string name, string description,
            string url, string thumbnailUrl, decimal rating)
        {
            EventId = eventId;
            UserId = userId;
            Name = name;
            Description = description;
            Url = url;
            ThumbnailUrl = thumbnailUrl;
            Rating = rating;
        }
    }
}
