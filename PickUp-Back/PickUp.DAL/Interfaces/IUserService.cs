using System;
using System.Collections.Generic;
using System.Text;

namespace PickUp.DAL.Interfaces
{
    public interface IUserService<TEntity>
    {
        IEnumerable<TEntity> GetAll();
        TEntity GetById(int key);
        IEnumerable<TEntity> GetByCategory(int categoryId);
        IEnumerable<TEntity> GetAllProUserAvailable();
    }
}
