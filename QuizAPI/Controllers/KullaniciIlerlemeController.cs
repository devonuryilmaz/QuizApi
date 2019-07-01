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
    [Route("api/KullaniciIlerleme")]
    public class KullaniciIlerlemeController : Controller
    {
        private IKullaniciIlerlemeService _kullaniciIlerlemeService;
        public KullaniciIlerlemeController(IKullaniciIlerlemeService kullaniciIlerlemeService)
        {
            _kullaniciIlerlemeService = kullaniciIlerlemeService;
        }

        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody] KullaniciIlerleme ilerleme)
        {
            if (ModelState.IsValid)
            {
                _kullaniciIlerlemeService.Add(ilerleme);
                return Ok(ilerleme);
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        [Route("put")]
        public ActionResult Put([FromBody]KullaniciIlerleme ilerleme, int id)
        {
            if (id > 0)
            {
                ilerleme.IlerlemeID = id;

            }
            if (ModelState.IsValid)
            {
                return Ok(_kullaniciIlerlemeService.Update(ilerleme));
            }

            return BadRequest();
        }

        [HttpDelete]
        [Route("delete")]
        public ActionResult Delete(int id)
        {
            if (id > 0)
            {
                if (ModelState.IsValid)
                {
                    _kullaniciIlerlemeService.Delete(id);
                    return Ok();
                }
            }
            

            return BadRequest();

        }


        [HttpGet]
        [Route("get")]
        public KullaniciIlerleme Get(int kullaniciID)
        {
            if (kullaniciID > 0)
            {
                var ilerleme = _kullaniciIlerlemeService.GetIlerlemeByID(kullaniciID);

                return ilerleme;

            }

            return null;
        }



        [HttpGet]
        [Route("getAll")]
        public IEnumerable<KullaniciIlerleme> GetAll()
        {
            return _kullaniciIlerlemeService.GetAllIlerleme();
        }

    }
}