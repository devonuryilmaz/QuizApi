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
    [Route("api/GazeCastSoru")]
    public class GazeCastSoruController : Controller
    {
        private IGazeCastSoruService _gazeCastSoruService;
        public GazeCastSoruController(IGazeCastSoruService gazeCastSoruService)
        {
            _gazeCastSoruService = gazeCastSoruService;
        }


        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody]GazeCastSoru gazeCastSoru)
        {
            if (ModelState.IsValid)
            {
                _gazeCastSoruService.Add(gazeCastSoru);
                return Ok(gazeCastSoru);
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        [Route("put")]
        public ActionResult Put([FromBody]GazeCastSoru gazeCastSoru, int id)
        {
            if (id > 0)
            {
                gazeCastSoru.ID = id;

            }
            if (ModelState.IsValid)
            {
                return Ok(_gazeCastSoruService.Update(gazeCastSoru));
            }

            return BadRequest();
        }

        [HttpDelete]
        [Route("delete")]
        public ActionResult Delete(int id)
        {
            if (id > 0)
            {

                _gazeCastSoruService.Delete(id);
                return Ok();

            }

            return BadRequest();

        }


        [HttpGet]
        [Route("get")]
        public GazeCastSoru Get(int gazeCastID)
        {
            if (gazeCastID > 0)
            {
                var gazeCastSoru = _gazeCastSoruService.GetGazeCastSoruByID(gazeCastID);

                return gazeCastSoru;

            }

            return null;
        }



        [HttpGet]
        [Route("getAll")]
        public IEnumerable<GazeCastSoru> GetAll(bool isAdmin)
        {
            return _gazeCastSoruService.GetAllGazeCastSoru(isAdmin);
        }
        [HttpGet]
        [Route("getAllGazeSoruBySeviyeId")]
        public IEnumerable<GazeCastSoru> GetAllGazeSoruBySeviyeId(int id)
        {
            if(id > 0)
            {
                return _gazeCastSoruService.GetAllGazeSeviyeBySeviyeId(id);
            }
            return null;
               
        }
    }
}