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
    public class EventController : ControllerBase
    {
        private readonly IEventService<Event> _eventService;

        public EventController(IEventService<Event> eventService)
        {
            _eventService = eventService;
        }
        [HttpGet]
        public IActionResult GetALl()
        {
            try
            {
                return Ok(_eventService.GetAll());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        
        [HttpGet("User/{id}")]
        public IActionResult GetByUser(int id)
        {
            try
            {
                return Ok(_eventService.GetByUser(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
