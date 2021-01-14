using System;
using System.Collections.Generic;
using System.Text;

namespace PickUp.DAL.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string Name { get; set; }

        public Category(int categoryId, string name)
        {
            CategoryId = categoryId;
            this.Name = name;
        }
    }
}
