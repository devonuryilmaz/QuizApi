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
    [Route("api/AtıfCevap")]
    public class AtıfCevapController : Controller
    {

        private IAtıfCevapService _atıfCevapService;
        public AtıfCevapController(IAtıfCevapService atıfCevapService)
        {
            _atıfCevapService = atıfCevapService;
        }


        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody]AtıfCevap atıfCevap)
        {
            if (ModelState.IsValid)
            {
                _atıfCevapService.Add(atıfCevap);
                return Ok(atıfCevap);
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        [Route("put")]
        public ActionResult Put([FromBody]AtıfCevap atıfCevap, int id)
        {
            if (id > 0)
            {
                atıfCevap.ID = id;

            }
            if (ModelState.IsValid)
            {
                return Ok(_atıfCevapService.Update(atıfCevap));
            }

            return BadRequest();
        }

        [HttpDelete]
        [Route("delete")]
        public ActionResult Delete(int id)
        {
            if (id > 0)
            {

                _atıfCevapService.Delete(id);
                return Ok();

            }

            return BadRequest();

        }


        [HttpGet]
        [Route("get")]
        public AtıfCevap Get(int atıfID)
        {
            if (atıfID > 0)
            {
                var atıfCevap = _atıfCevapService.GetAtıfCevapByID(atıfID);

                return atıfCevap;

            }

            return null;
        }



        [HttpGet]
        [Route("getAll")]
        public IEnumerable<AtıfCevap> GetAll()
        {
            return _atıfCevapService.GetAllAtıfCevap();
        }
    }
}