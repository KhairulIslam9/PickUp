using ADOLibrary;
using PickUp.DAL.Interfaces;
using PickUp.DAL.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace PickUp.DAL.Services
{
    public class CategoryService : ICategoryService<Category>
    {
        private readonly IConnection _connection;

        public CategoryService(IConnection connection)
        {
            _connection = connection;
        }
        public Category Converter(SqlDataReader reader)
        {
            return new Category
            (
                (int)reader["CategoryDetailId"],
                reader["CategoryName"].ToString()
            );
        }
        public IEnumerable<Category> GetAll()
        {
            Command cmd = new Command("GetAllCategory", true);
            return _connection.ExecuteReader<Category>(cmd, Converter);
        }
    }
}
