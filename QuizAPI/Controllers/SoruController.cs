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
    [Route("api/Soru")]
    public class SoruController : Controller
    {
        private ISoruService _soruService;
        public SoruController(ISoruService soruService)
        {
            _soruService = soruService;
        }

        [HttpGet]
        [Route("getAllBySeviyeId")]
        public IEnumerable<Soru> GetSoruAllBySeviyeIDList(int seviyeID)
        {
            return _soruService.GetSoruAllBySeviyeIDList(seviyeID);
        }


        [HttpGet]
        [Route("getAllSoruFoto")]
        public List<SoruFotograflari> GetSoruAllSoruFotoList(int soruID)
        {
            return _soruService.SoruFotograflari(soruID);
        }



        [HttpGet]
        [Route("get")]
        public Soru Get(int soruID)
        {
            if (soruID > 0)
            {
                var Soru = _soruService.GetSoruByID(soruID);

                return Soru;
            }
            else
            {
                return null;
            }

        }


        [HttpGet]
        [Route("getAll")]
        public IEnumerable<Soru> GetAll(bool isAdmin)
        {
            return _soruService.GetSoruAll(isAdmin);
        }

        [HttpDelete]
        [Route("delete")]
        public ActionResult Delete(int id)
        {
            if (id > 0)
            {
                if (ModelState.IsValid)
                {
                    _soruService.Delete(id);
                    return Ok();
                }
            }

            return BadRequest();


        }


        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody]Soru soru)
        {
            if (ModelState.IsValid)
            {
                _soruService.Add(soru);
                return Ok(soru);
            }
            else
            {
                return BadRequest();
            }

        }


        [HttpPut("{id}")]
        [Route("put")]
        public ActionResult Update([FromBody]Soru soru, int id)
        {
            if (id > 0)
            {
                soru.SoruID = id;

            }
            if (ModelState.IsValid)
            {
                _soruService.Update(soru);
                return Ok(soru);
            }
            else
            {
                return BadRequest();
            }

        }

    }
}