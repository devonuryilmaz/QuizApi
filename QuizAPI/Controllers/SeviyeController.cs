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
    [Route("api/Seviye")]
    public class SeviyeController : Controller
    {
        private ISeviyeService _seviyeService;
        private IKullaniciRaporService _kullaniciRaporService;
        public SeviyeController(ISeviyeService seviyeService, IKullaniciRaporService kullaniciRaporService)
        {
            _seviyeService = seviyeService;
            _kullaniciRaporService = kullaniciRaporService;
        }

        [HttpGet]
        [Route("get")]
        public Seviye Get(int seviyeID)
        {
            if(seviyeID>0)
            {
                var seviye = _seviyeService.GetSeviyeByID(seviyeID);

                return seviye;
            }
            else
            {
                return null;
            }
            
        }

        [HttpGet]
        [Route("getAllByKategoriId")]
        public IEnumerable<Seviye> GetSeviyeAllByKategoriIDList(int kategoriID)
        {
            return _seviyeService.GetSeviyeAllByKategoriIDList(kategoriID);
        }

        [HttpGet]
        [Route("getOturum")]
        public IEnumerable<Seviye> GetOturumSeviye(int oturumID)
        {
            return _seviyeService.GetSeviyeOturumList(oturumID);
        }

        [HttpGet]
        [Route("getAll")]
        public IEnumerable<Seviye> GetAll(bool isAdmin)
        {
            return _seviyeService.GetSeviyeAll(isAdmin);
        }


        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody] Seviye seviye)
        {
            if (ModelState.IsValid)
            {
                _seviyeService.Add(seviye);
                return Ok(seviye);
            }
            else
            {
                return BadRequest();
            }

        }

        [HttpPut("{id}")]
        [Route("put")]
        public ActionResult Update([FromBody]Seviye seviye, int id)
        {
            if(id>0)
            {
                seviye.SeviyeID = id;
                if (ModelState.IsValid)
                {
                    return Ok(_seviyeService.Update(seviye));

                }
            }
            
            return BadRequest();
        }

        [HttpDelete]
        [Route("delete")]
        public ActionResult Delete(int id)
        {
            if(id>0)
            {
                if (ModelState.IsValid)
                {
                    _seviyeService.Delete(id);
                    return Ok();
                }
            }
            
            return BadRequest();
        }

        [HttpGet]
        [Route("getSonOturumRaporu")]
        public KullaniciRapor getSonOturumRaporu(int oturumID, int kullaniciID)
        {
            if (oturumID > 0)
            {
                var kullaniciRapor = _kullaniciRaporService.GetkullaniciRaporAll().
                                        Where(r => r.OturumID == oturumID && r.KullaniciID == kullaniciID).OrderByDescending(r => r.OturumSirasi).FirstOrDefault();

                return kullaniciRapor;
            }
            else
            {
                return null;
            }

        }
    }
}