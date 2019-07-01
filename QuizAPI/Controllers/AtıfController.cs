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
    [Route("api/Atif")]
    public class AtıfController : Controller
    {

        private IAtıfService _atıfService;
        public AtıfController(IAtıfService atıfService)
        {
            _atıfService = atıfService;
        }


        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody] Atıf atıf)
        {
            if (ModelState.IsValid)
            {
                _atıfService.Add(atıf);
                return Ok(atıf);
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        [Route("put")]
        public ActionResult Put([FromBody]Atıf atıf, int id)
        {
            if (id > 0)
            {
                atıf.ID = id;

            }
            if (ModelState.IsValid)
            {
                return Ok(_atıfService.Update(atıf));
            }

            return BadRequest();
        }

        [HttpDelete("{id}")]
        [Route("delete")]
        public ActionResult Delete(int id)
        {
            if (id > 0)
            {

                _atıfService.Delete(id);
                return Ok();

            }

            return BadRequest();

        }


        [HttpGet]
        [Route("get")]
        public Atıf Get(int atıfID)
        {
            if (atıfID > 0)
            {
                var atıf = _atıfService.GetAtıfByID(atıfID);

                return atıf;

            }

            return null;
        }



        [HttpGet]
        [Route("getAll")]
        public IEnumerable<Atıf> GetAll(bool isAdmin)
        {
            return _atıfService.GetAllAtıf(isAdmin);
        }
    }
}