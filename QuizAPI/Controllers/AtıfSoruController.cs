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
    [Route("api/AtıfSoru")]
    public class AtıfSoruController : Controller
    {

        private IAtıfSoruService _atıfSoruService;
        public AtıfSoruController(IAtıfSoruService atıfSoruService)
        {
            _atıfSoruService = atıfSoruService;
        }


        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody]AtıfSoru atıfSoru)
        {
            if (ModelState.IsValid)
            {
                _atıfSoruService.Add(atıfSoru);
                return Ok(atıfSoru);
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        [Route("put")]
        public ActionResult Put([FromBody]AtıfSoru atıfSoru, int id)
        {
            if (id > 0)
            {
                atıfSoru.ID = id;

            }
            if (ModelState.IsValid)
            {
                return Ok(_atıfSoruService.Update(atıfSoru));
            }

            return BadRequest();
        }

        [HttpDelete]
        [Route("delete")]
        public ActionResult Delete(int id)
        {
            if (id > 0)
            {

                _atıfSoruService.Delete(id);
                return Ok();

            }

            return BadRequest();

        }


        [HttpGet]
        [Route("get")]
        public AtıfSoru Get(int atıfID)
        {
            if (atıfID > 0)
            {
                var atıfSoru = _atıfSoruService.GetAtıfSoruByID(atıfID);

                return atıfSoru;

            }

            return null;
        }



        [HttpGet("{id}")]
        [Route("getAllBySeviyeId")]
        public IEnumerable<AtıfSoru> GetAll(int id)
        {
            return _atıfSoruService.GetAllBySeviyeId(id);
        }

        [HttpGet]
        [Route("getAll")]
        public IEnumerable<AtıfSoru> GetAllBySeviyeId(bool isAdmin)
        {
            return _atıfSoruService.GetAllAtıfSoru(isAdmin);
        }


    }
}