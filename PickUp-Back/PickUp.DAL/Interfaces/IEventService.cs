using System;
using System.Collections.Generic;
using System.Text;

namespace PickUp.DAL.Interfaces
{
    public interface IEventService<TEntity>
    {
        IEnumerable<TEntity> GetAll();
        IEnumerable<TEntity> GetByUser(int ProUserId);
    }
}
