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
    [Route("api/SoruFotograf")]
    public class SoruFotografController : Controller
    {
        ISoruFotograflariService _soruFotograflariService;
        public SoruFotografController(ISoruFotograflariService soruFotograflariService)
        {
            _soruFotograflariService = soruFotograflariService;
        }

        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody]SoruFotograflari soruFotograf)
        {
            if (ModelState.IsValid)
            {
                _soruFotograflariService.Add(soruFotograf);
                return Ok(soruFotograf);
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPut("{id}")]
        [Route("update")]
        public ActionResult Update([FromBody]SoruFotograflari soruFotograf,int id)
        {
            if (id > 0)
            {
                soruFotograf.ID = id;

            }
            if (ModelState.IsValid)
            {
                return Ok(_soruFotograflariService.Update(soruFotograf));
            }
            else
            {
                return BadRequest();
            }
        }


        [HttpDelete]
        [Route("delete")]
        public ActionResult Delete(int id)
        {
            if (id > 0)
            {

                _soruFotograflariService.Delete(id);
                return Ok();

            }

            return BadRequest();
        }

        [HttpGet]
        [Route("get")]
        public SoruFotograflari Get(int id)
        {
            if (id > 0)
            {
                var soruFoto = _soruFotograflariService.GetSoruFotograflariByID(id);

                return soruFoto;

            }

            return null;
        }

        [HttpGet]
        [Route("getAll")]
        public IEnumerable<SoruFotograflari> GetAll()
        {
            return _soruFotograflariService.GetAllSoruFotograflari();
        }

    }
}