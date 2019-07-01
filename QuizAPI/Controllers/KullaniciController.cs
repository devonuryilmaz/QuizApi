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
    [Route("api/Kullanici")]
    public class KullaniciController : Controller
    {
        private IKullaniciService _kullaniciService;
        public KullaniciController(IKullaniciService kullaniciService)
        {
            _kullaniciService = kullaniciService;
        }


        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody]Kullanici kullanici)
        {
            if (ModelState.IsValid)
            {
                _kullaniciService.Add(kullanici);
                return Ok(kullanici);
            }

            return BadRequest();
        }

        [HttpPost]
        [Route("GetChatUsers")]
        public List<Kullanici> GetChatUsers([FromBody]List<int> kullanici)
        {
            if(kullanici.Count > 0)
            {
                return _kullaniciService.GetChatUsers(kullanici);
            }


            return null;

           
        }

        

        [HttpPut("{id}")]
        [Route("put")]
        public ActionResult Update([FromBody]Kullanici kullanici, int id)
        {
            if (id > 0)
            {
                kullanici.KullaniciID = id;
            }
            if (ModelState.IsValid)
            {
                _kullaniciService.Update(kullanici);
                return Ok(kullanici);
            }
            return BadRequest();
        }


        [HttpGet]
        [Route("get")]
        public Kullanici Get(int kullaniciID)
        {
            if (kullaniciID > 0)
            {
                var kullanici = _kullaniciService.GetKullaniciByID(kullaniciID);

                return kullanici;
            }
            else
            {
                return null;
            }

        }




        [HttpGet]
        [Route("getAll")]
        public IEnumerable<Kullanici> GetAll()
        {
            var users = _kullaniciService.GetKullaniciAll(); ;
            return _kullaniciService.GetKullaniciAll();
        }

        [HttpDelete]
        [Route("delete")]
        public ActionResult Delete(int id)
        {
            if (id > 0)
            {
                if (ModelState.IsValid)
                {
                    _kullaniciService.Delete(id);
                    return Ok();
                }
            }

            return BadRequest();
        }

    }
}