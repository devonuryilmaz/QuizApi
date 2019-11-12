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
    [Route("api/Oturum")]
    public class OturumController : Controller
    {
        private IOturumService _oturumService;
        public OturumController(IOturumService oturumService)
        {
            _oturumService = oturumService;
        }

        [HttpGet]
        [Route("getAll")]
        public List<Oturum> GetAll()
        {

            List<Oturum> oturumlar = _oturumService.GetAll();

            return oturumlar;
        }

        [HttpGet]
        [Route("get")]
        public Oturum Get(int oturumID)
        {

            Oturum oturum = _oturumService.Get(oturumID);

            return oturum;
        }

        [HttpPut("{id}")]
        [Route("put")]
        public ActionResult Update([FromBody]Oturum oturum, int id)
        {
            if (id > 0)
            {
                oturum.OturumID = id;
            }
            if (ModelState.IsValid)
            {
                _oturumService.Update(oturum);
                return Ok(oturum);
            }
            return BadRequest();
        }

        [HttpGet]
        [Route("getKullaniciOturum")]
        public Oturum GetKullaniciOturum(int kullaniciID)
        {
            return _oturumService.GetKullaniciOturum(kullaniciID);
        }

        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody] Oturum oturum)
        {
            if (ModelState.IsValid)
            {
                _oturumService.Add(oturum);
                return Ok(oturum);
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
                if (ModelState.IsValid)
                {
                    _oturumService.Delete(id);
                    return Ok();
                }
            }

            return BadRequest();
        }

        [HttpGet]
        [Route("getSonSeviye")]
        public int GetSonSeviyeSirasi(int oturumID)
        {
            return _oturumService.SonSeviyeSirasi(oturumID);
        }
    }
}