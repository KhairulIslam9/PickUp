using System;
using System.Collections.Generic;
using System.Text;

namespace PickUp.DAL.Interfaces
{
    public interface IReservationService<TEntity, TEntity2>
    {
        int Insert(TEntity entity);
        int InsertPick(TEntity2 entity);
        IEnumerable<TEntity> GetAllByUser(int proUser);
        IEnumerable<TEntity> GetByCustomer(int userId);
        IEnumerable<TEntity2> GetByUser(int ProUserId);
        int DeletePick(TEntity2 entity);
    }
}
