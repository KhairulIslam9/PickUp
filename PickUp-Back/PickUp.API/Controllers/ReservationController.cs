using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
    public class ReservationController : ControllerBase
    {
        private readonly IReservationService<ReservationCustomer, ReservationUser> _reservationService;

        public ReservationController(IReservationService<ReservationCustomer, ReservationUser> resevationService)
        {
            _reservationService = resevationService;
        }

        [HttpGet("Customer/{CustomerId}")]
        public IActionResult GetByCustomer(int CustomerId)
        {
            try
            {
                return Ok(_reservationService.GetByCustomer(CustomerId));
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
                return Ok(_reservationService.GetByUser(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpGet("All/User/{proId}")]
        public IActionResult GetAllByUser(int proId)
        {
            try
            {
                return Ok(_reservationService.GetAllByUser(proId));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpPost]
        [Route("User/Create")]
        public IActionResult Insert([FromBody] ReservationForm r)
        {
            if (ModelState.IsValid)
            {
                try
                {   
                    return Ok(_reservationService.Insert(new ReservationCustomer(r.ResDate,
                                    r.StartHour, r.EndHour, r.NumPlaceAvailable, r.UserId)));
                }
                catch (Exception e)
                {
                    return BadRequest(e.Message);
                }
               
        
            }

            return BadRequest();
        }

        [HttpPost]
        [Route("PickReservation")]
        public IActionResult InsertPick([FromBody] PickReservationForm r)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    return Ok(_reservationService.InsertPick(new ReservationUser(r.ReservationId,
                        r.CustomerId, r.NumPerson)));

                } catch(Exception e)
                {
                    return BadRequest(e.Message);
                }
            }

            return BadRequest();
        }

        [HttpDelete]
        [Route("PickReservation/Delete")]
        public IActionResult DelectePick([FromBody] DeletePickReservationForm r)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    return Ok(_reservationService.DeletePick(new ReservationUser(r.ReservationId,
                        r.CustomerId)));

                }
                catch (Exception e)
                {
                    return BadRequest(e.Message);
                }
            }

            return BadRequest();
        }
    }
}
