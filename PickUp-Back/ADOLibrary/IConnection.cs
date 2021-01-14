using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace ADOLibrary
{
    public interface IConnection
    {
        SqlCommand CreateCommand(Command cmd, SqlConnection connection);
        int ExecuteNonQuery(Command cmd);
        IEnumerable<T> ExecuteReader<T>(Command Command, Func<SqlDataReader, T> converter);
        DataSet GetDataTable(Command cmd);
        object ExecuteScalar(Command cmd);
    }
}
