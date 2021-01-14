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
    public class CustomerService : ICustomerService<Customer>
    {
        private readonly IConnection _connection;

        public CustomerService(IConnection connection)
        {
            _connection = connection;
        }

        private Customer Converter(SqlDataReader reader)
        {
            return new Customer(
                (int)reader["CustomerId"],
                reader["FirstName"].ToString(),
                reader["LastName"].ToString(),
                reader["PhoneNum"].ToString(),
                reader["Email"].ToString(),
                reader["Url"].ToString(),
                reader["ThumbnailUrl"].ToString()
                );
        }

        public Customer Login(string email, string password)
        {
            Command cmd = new Command("Login", true);
            cmd.AddParameter("Email", email);
            cmd.AddParameter("Password", password);
            return _connection.ExecuteReader<Customer>(cmd, Converter).FirstOrDefault();
        }

        public void Register(Customer entity)
        {
            Command cmd = new Command("Register", true);
            cmd.AddParameter("FirstName", entity.FirstName);
            cmd.AddParameter("lastName", entity.LastName);
            cmd.AddParameter("PhoneNum", entity.PhoneNum);
            cmd.AddParameter("Email", entity.Email);
            cmd.AddParameter("Password", entity.Password);

            _connection.ExecuteNonQuery(cmd);
        }

        public bool Update(Customer entity)
        {
            Command cmd = new Command("Update", true);
            cmd.AddParameter("CustomerId", entity.CustomerId);
            cmd.AddParameter("Url", entity.Url);
            cmd.AddParameter("ThumbnailUrl", entity.ThumbnailUrl);
            return _connection.ExecuteNonQuery(cmd) == 1;
        }
    }
}
