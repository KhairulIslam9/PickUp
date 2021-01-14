using System;
using System.Collections.Generic;
using System.Text;

namespace PickUp.DAL.Interfaces
{
    public interface ICategoryService<TEntity>
    {
        IEnumerable<TEntity> GetAll();
    }
}
