using System;
using System.Collections.Generic;
using System.Text;

namespace PickUp.DAL.Interfaces
{
    public interface ICustomerService<TEntity>
    {
        void Register(TEntity entity);
        TEntity Login(string email, string password);
        bool Update(TEntity entity);
    }
}
