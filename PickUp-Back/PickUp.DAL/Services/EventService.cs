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
    public class EventService : IEventService<Event>
    {
        private readonly IConnection _connection;

        public EventService(IConnection connection)
        {
            _connection = connection;
        }
        public Event Converter(SqlDataReader reader)
        {
            return new Event(
                (int)reader["EventId"],
                (int)reader["UserId"],
                reader["Name"].ToString(),
                reader["Description"].ToString(),
                reader["Logo"].ToString(),
                reader["ThumbnailUrl"].ToString(),
                (decimal)reader["Rating"]);
        }

        public IEnumerable<Event> GetAll()
        {
            Command cmd = new Command("GetAllEvent", true);
            return _connection.ExecuteReader<Event>(cmd, Converter);
        }

        public IEnumerable<Event> GetByUser(int ProUserId)
        {
            Command cmd = new Command("GetEventByUser", true);
            cmd.AddParameter("UserId", ProUserId);
            return _connection.ExecuteReader<Event>(cmd, Converter);
        }
    }
}
