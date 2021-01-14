using PickUp.API.Models;
using PickUp.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PickUp.API.Infrastructure.Security
{
    public interface ITokenService
    {
        string GenerateToken(Customer customer);
        ApiCustomer ValidateToken(string token);
    }
}
