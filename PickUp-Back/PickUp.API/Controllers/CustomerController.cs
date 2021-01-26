using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PickUp.API.Infrastructure.Security;
using PickUp.API.Models;
using PickUp.DAL.Interfaces;
using PickUp.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PickUp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerService<Customer> _customerService;
        private readonly ITokenService _tokenService;

        public CustomerController(ITokenService tokenService, ICustomerService<Customer> customerService)
        {
            _tokenService = tokenService;
            _customerService = customerService;
        }

        [HttpPost("Login")]
        public IActionResult Login([FromBody] LoginForm form)
        {
            if (ModelState.IsValid)
            {
                Customer customer = _customerService.Login(form.Email, form.Password);

                if (customer is null)
                    return NotFound();

                ApiCustomer apiCustomer = new ApiCustomer(customer)
                {
                    Token = _tokenService.GenerateToken(customer)
                };

                return Ok(apiCustomer);
            }

            return BadRequest();
        }

        [HttpPost("Register")]
        public IActionResult Register([FromBody] RegisterForm form)
        {
            if (ModelState.IsValid)
            {
                _customerService.Register(new Customer(form.LastName, form.FirstName,
                    form.PhoneNum, form.Email, form.Password, null, null, null));
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("Update")]
        public IActionResult Update([FromBody] CustomerUpdateForm form)
        {
            if (ModelState.IsValid)
            {
                return Ok(_customerService.Update(new Customer(form.CustomerId, form.Url, form.ThumbnailUrl)));
            }

            return BadRequest();
        }

    }
}
