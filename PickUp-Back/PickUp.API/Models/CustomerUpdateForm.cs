using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PickUp.API.Models
{
    public class CustomerUpdateForm
    {
        [Required]
        public int CustomerId { get; set; }
        [Required]
        public string Url { get; set; }
        [Required]
        public string ThumbnailUrl { get; set; }

        public CustomerUpdateForm(int customerId, string url, string thumbnailUrl)
        {
            CustomerId = customerId;
            Url = url;
            ThumbnailUrl = thumbnailUrl;
        }
    }
}
