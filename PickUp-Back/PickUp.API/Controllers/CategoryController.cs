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
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService<Category> _categoryService;

        public CategoryController(ICategoryService<Category> categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                return Ok(_categoryService.GetAll());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
