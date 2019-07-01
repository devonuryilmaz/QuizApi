using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuizAPI.Businness.Abstract;
using QuizAPI.Entities.Concrete;

namespace QuizAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/GazeCastSeviyeSeviye")]
    public class GazeCastSeviyeController : Controller
    {

        private IGazeCastSeviyeService _gazeCastSeviyeService;
        public GazeCastSeviyeController(IGazeCastSeviyeService gazeCastSeviyeService)
        {
            _gazeCastSeviyeService = gazeCastSeviyeService;
        }


        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody]GazeCastSeviye gazeCastSeviye)
        {
            if (ModelState.IsValid)
            {
                _gazeCastSeviyeService.Add(gazeCastSeviye);
                return Ok(gazeCastSeviye);
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        [Route("put")]
        public ActionResult Put([FromBody]GazeCastSeviye gazeCastSeviye, int id)
        {
            if (id > 0)
            {
                gazeCastSeviye.ID = id;

            }
            if (ModelState.IsValid)
            {
                return Ok(_gazeCastSeviyeService.Update(gazeCastSeviye));
            }

            return BadRequest();
        }

        [HttpDelete("{id}")]
        [Route("delete")]
        public ActionResult Delete(int id)
        {
            if (id > 0)
            {

                _gazeCastSeviyeService.Delete(id);
                return Ok();

            }

            return BadRequest();

        }


        [HttpGet]
        [Route("get")]
        public GazeCastSeviye Get(int gazeCastID)
        {
            if (gazeCastID > 0)
            {
                var gazeCastSeviye = _gazeCastSeviyeService.GetGazeCastSeviyeByID(gazeCastID);

                return gazeCastSeviye;

            }

            return null;
        }



        [HttpGet]
        [Route("getAll")]
        public IEnumerable<GazeCastSeviye> GetAll(bool isAdmin)
        {
            return _gazeCastSeviyeService.GetAllGazeCastSeviye(isAdmin);
        }
    }
}