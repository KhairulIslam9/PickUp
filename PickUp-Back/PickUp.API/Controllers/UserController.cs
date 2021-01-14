using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
    public class UserController : ControllerBase
    {
        private readonly IUserService<User> _userService;

        public UserController(IUserService<User> userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                return Ok(_userService.GetAll());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpGet("Available")]
        public IActionResult GetAvailable()
        {
            try
            {
                return Ok(_userService.GetAllProUserAvailable());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                return Ok(_userService.GetById(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpGet("Category/{categoryId}")]
        public IActionResult GetByCategory(int categoryId)
        {
            try
            {
                return Ok(_userService.GetByCategory(categoryId));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
