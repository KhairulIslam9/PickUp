using ADOLibrary;
using PickUp.DAL.Interfaces;
using PickUp.DAL.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace PickUp.DAL.Services
{
    public class ReservationService : IReservationService<ReservationCustomer, ReservationUser>
    {
        private readonly IConnection _connection;

        public ReservationService(IConnection connection)
        {
            _connection = connection;
        }
        private ReservationCustomer ConverterCustomer(SqlDataReader reader)
        {
            return new ReservationCustomer(
                (int)reader["ReservationId"],
                (int)reader["UserId"],
                reader["Name"].ToString(),
                reader["ResDate"].ToString(),
                reader["StartHour"].ToString(),
                reader["EndHour"].ToString(),
                (int)reader["NumPerson"],
                reader["Url"].ToString()
                );
        }
        private ReservationCustomer ConverterCustomer2(SqlDataReader reader)
        {
            return new ReservationCustomer(
                (int)reader["ReservationId"],
                (int)reader["UserId"],
                reader["ResDate"].ToString(),
                reader["StartHour"].ToString(),
                reader["EndHour"].ToString(),
                (int)reader["NumPlaceAvailable"]
                );
        }

        private ReservationUser ConverterUser(SqlDataReader reader)
        {
            
            return new ReservationUser(
                (int)reader["ReservationId"],
                (int)reader["CustomerId"],
                reader["LastName"].ToString(),
                reader["FirstName"].ToString(),
                reader["Email"].ToString(),
                reader["PhoneNum"].ToString(),
                reader["ResDate"].ToString(),
                reader["StartHour"].ToString(),
                reader["EndHour"].ToString(),
                (int)reader["NumPerson"],
                reader["InputDate"].ToString()
                );
        }

        public IEnumerable<ReservationCustomer> GetAllByUser(int proUser)
        {
            Command cmd = new Command("GetAllReservationByUser", true);
            cmd.AddParameter("UserId", proUser);
            return _connection.ExecuteReader<ReservationCustomer>(cmd, ConverterCustomer2);
        }

        public IEnumerable<ReservationCustomer> GetByCustomer(int customerId)
        {
            Command cmd = new Command("GetReservationByCustomer", true);
            cmd.AddParameter("CustomerId", customerId);
            return _connection.ExecuteReader<ReservationCustomer>(cmd, ConverterCustomer);
        }

        public IEnumerable<ReservationUser> GetByUser(int userId)
        {
            Command cmd = new Command("GetReservationByUser", true);
            cmd.AddParameter("UserId", userId);
            return _connection.ExecuteReader<ReservationUser>(cmd, ConverterUser);
        }

        public int Insert(ReservationCustomer entity)
        {
            Command cmd = new Command("PostReservation", true);
            cmd.AddParameter("ResDate", DateTime.Parse(entity.ResDate));
            cmd.AddParameter("StartHour", DateTime.Parse(entity.StartHour));
            cmd.AddParameter("EndHour", DateTime.Parse(entity.EndHour));
            cmd.AddParameter("NumPlaceAvailable", entity.NumPlaceAvailable);
            cmd.AddParameter("UserId", entity.UserId);
            return _connection.ExecuteNonQuery(cmd);
        }

        public int InsertPick(ReservationUser entity)
        {
            Command cmd = new Command("PostPickReservation", true);
            cmd.AddParameter("ReservationId", entity.ReservationId);
            cmd.AddParameter("CustomerId", entity.CustomerId);
            cmd.AddParameter("NumPerson", entity.NumPerson);
            return _connection.ExecuteNonQuery(cmd);
        }

        public int DeletePick(ReservationUser entity)
        {
            Command cmd = new Command("DeletePickReservation", true);
            cmd.AddParameter("ReservationId", entity.ReservationId);
            cmd.AddParameter("CustomerId", entity.CustomerId);
            return _connection.ExecuteNonQuery(cmd);
        }
    }
}
