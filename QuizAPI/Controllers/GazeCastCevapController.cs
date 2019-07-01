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
    [Route("api/GazeCastCevap")]
    public class GazeCastCevapController : Controller
    {
        private IGazeCastCevapService _gazeCastCevapService;
        public GazeCastCevapController(IGazeCastCevapService gazeCastCevapService)
        {
            _gazeCastCevapService = gazeCastCevapService;
        }


        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody]GazeCastCevap gazeCastCevap)
        {
            if (ModelState.IsValid)
            {
                _gazeCastCevapService.Add(gazeCastCevap);
                return Ok(gazeCastCevap);
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        [Route("put")]
        public ActionResult Put([FromBody]GazeCastCevap gazeCastCevap, int id)
        {
            if (id > 0)
            {
                gazeCastCevap.ID = id;

            }
            if (ModelState.IsValid)
            {
                return Ok(_gazeCastCevapService.Update(gazeCastCevap));
            }

            return BadRequest();
        }

        [HttpDelete]
        [Route("delete")]
        public ActionResult Delete(int id)
        {
            if (id > 0)
            {

                _gazeCastCevapService.Delete(id);
                return Ok();

            }

            return BadRequest();

        }


        [HttpGet]
        [Route("get")]
        public GazeCastCevap Get(int gazeCastID)
        {
            if (gazeCastID > 0)
            {
                var gazeCastCevap = _gazeCastCevapService.GetGazeCastCevapByID(gazeCastID);

                return gazeCastCevap;

            }

            return null;
        }



        [HttpGet]
        [Route("getAll")]
        public IEnumerable<GazeCastCevap> GetAll()
        {
            return _gazeCastCevapService.GetAllGazeCastCevap();
        }


        [HttpGet]
        [Route("getGazeCastCevapBySoruId")]
        public GazeCastCevap GetGazeCastCevapBySoruId(int id)
        {
            if(id > 0)
            {
                return _gazeCastCevapService.GetAllGazeCastCevavpBySoruId(id);
            }
            return null;
        }
    }
}