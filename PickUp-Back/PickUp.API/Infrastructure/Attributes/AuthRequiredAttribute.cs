using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Primitives;
using PickUp.API.Infrastructure.Security;
using PickUp.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PickUp.API.Infrastructure.Attributes
{
    public class AuthRequiredAttribute : TypeFilterAttribute
    {
        public AuthRequiredAttribute() : base(typeof(AuthRequiredFilter))
        {
        }

        private class AuthRequiredFilter : IAuthorizationFilter
        {
            public void OnAuthorization(AuthorizationFilterContext context)
            {
                ITokenService tokenService = (ITokenService)context.HttpContext.RequestServices.GetService(typeof(ITokenService));

                context.HttpContext.Request.Headers.TryGetValue("Authorization", out StringValues authorizations);
                string token = authorizations.SingleOrDefault(authorization => authorization.StartsWith("Bearer "));

                if (token is null)
                {
                    context.Result = new UnauthorizedResult();
                    return;
                }

                ApiCustomer customer = tokenService.ValidateToken(token);

                if (customer is null)
                {
                    context.Result = new UnauthorizedResult();
                    return;
                }

                context.RouteData.Values.Add("CustomerId", customer.CustomerId);
            }
        }
    }
}
