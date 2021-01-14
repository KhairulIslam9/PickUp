
using ADOLibrary;
using PickUp.DAL.Interfaces;
using PickUp.DAL.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace PickUp.DAL.Services
{
    public class UserService : IUserService<User>
    {
        private readonly IConnection _connection;

        public UserService(IConnection connection)
        {
            _connection = connection;
        }
        private User Converter(SqlDataReader reader)
        { 
            return new User(
                (int)reader["UserId"],
                reader["Name"].ToString(),
                reader["Description"].ToString(),
                reader["PhoneNum"].ToString(),
                reader["AdresseStreet"].ToString(),
                (int)reader["AdresseNum"],
                reader["AdresseCity"].ToString(),
                (int)reader["AdresseZip"],
                (decimal)reader["Latitude"],
                (decimal)reader["Longitude"],
                (decimal)reader["Rating"],
                reader["Url"].ToString(),
                reader["ThumbnailUrl"].ToString()
                );
        }

        public IEnumerable<User> GetAll()
        {
            Command cmd = new Command("GetAllUser", true);
            return _connection.ExecuteReader<User>(cmd, Converter);
        }

        public IEnumerable<User> GetAllProUserAvailable()
        {
            Command cmd = new Command("GetAllUserAvailable", true);
            return _connection.ExecuteReader<User>(cmd, Converter);
        }

        public IEnumerable<User> GetByCategory(int categoryId)
        {
            Command cmd = new Command("GetUserByCategory", true);
            cmd.AddParameter("CategoryId", categoryId);
            return _connection.ExecuteReader<User>(cmd, Converter);
        }

        public User GetById(int key)
        {
            Command cmd = new Command("GetUserbyId", true);
            cmd.AddParameter("UserId", key);
            return _connection.ExecuteReader<User>(cmd, Converter).FirstOrDefault();
        }
    }
}
