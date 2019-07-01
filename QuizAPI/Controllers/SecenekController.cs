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
    [Route("api/Secenek")]
    public class SecenekController : Controller
    {
        private ISecenekService _secenekService;
        public SecenekController(ISecenekService secenekService)
        {
            _secenekService = secenekService;
        }

        [HttpGet]
        [Route("getAllBySoruId")]
        public IEnumerable<Secenek> GetSecenekAllBySoruIDList(int soruID)
        {
            return _secenekService.GetSecenekAllBySoruIDList(soruID);
        }


        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody]Secenek secenek)
        {
            if (ModelState.IsValid)
            {
                _secenekService.Add(secenek);
                return Ok(secenek);
            }
            else
            {
                return BadRequest();
            }

        }

        [HttpPut("{id}")]
        [Route("put")]
        public ActionResult Update([FromBody]Secenek secenek, int id)
        {
            if (id > 0)
            {
                secenek.SecenekID = id;
            }
            if (ModelState.IsValid)
            {
                return Ok(_secenekService.Update(secenek));

            }
            else
            {
                return BadRequest();
            }
        }


        [HttpGet]
        [Route("get")]
        public Secenek Get(int secenekID)
        {
            if (secenekID > 0)
            {
                var secenek = _secenekService.GetSecenekByID(secenekID);

                return secenek;
            }
            else
            {
                return null;
            }
        }


        [HttpGet]
        [Route("getAll")]
        public IEnumerable<Secenek> GetAll()
        {
            return _secenekService.GetSecenekAll();
        }

        [HttpDelete]
        [Route("delete")]
        public ActionResult Delete(int id)
        {
            if (id > 0)
            {
                if (ModelState.IsValid)
                {
                    _secenekService.Delete(id);
                    return Ok();
                }
            }
            return BadRequest();

        }

    }
}