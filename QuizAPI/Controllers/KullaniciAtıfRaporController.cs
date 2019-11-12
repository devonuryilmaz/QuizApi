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
    [Route("api/KullaniciAtıfRapor")]
    public class KullaniciAtıfRaporController : Controller
    {

        private IKullaniciAtıfRaporService  _kullaniciAtıfRaporService;
        public KullaniciAtıfRaporController(IKullaniciAtıfRaporService kullaniciAtıfRaporService)
        {
            _kullaniciAtıfRaporService = kullaniciAtıfRaporService;
        }


        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody]KullaniciAtıfRapor kullaniciAtifRapor)
        {
            if (ModelState.IsValid)
            {
                kullaniciAtifRapor.startDate = DateTime.Now;
                _kullaniciAtıfRaporService.Add(kullaniciAtifRapor);
                return Ok(kullaniciAtifRapor);
            }

            return BadRequest();
        }


        [HttpPost]
        [Route("RaporKontrol")]
        public bool RaporKontrol([FromBody]KullaniciAtıfRapor kullaniciRapor)
        {

            // var k = _kullaniciRaporService.GetkullaniciRaporAll();
            if (ModelState.IsValid)
            {
                bool isFind = _kullaniciAtıfRaporService.KullaniciAtıfRaporControl(kullaniciRapor);
                if (isFind)
                    return true;
            }

            return false;
        }

        [HttpPost]
        [Route("KullaniciCompleteControl")]
        public KullaniciAtıfRapor KullaniciCompleteControl([FromBody]KullaniciAtıfRapor kullaniciRapor)
        {

            // var k = _kullaniciRaporService.GetkullaniciRaporAll();
            if (ModelState.IsValid)
            {
                KullaniciAtıfRapor rapor = _kullaniciAtıfRaporService.KullaniciCompleteControl(kullaniciRapor);
                return rapor;
            }

            return null;
        }



        [HttpPut("{id}")]
        [Route("put")]
        public ActionResult Update([FromBody]KullaniciAtıfRapor kullaniciRapor, int id)
        {
            if (id > 0)
            {
                kullaniciRapor.ID = id;
            }
            if (ModelState.IsValid)
            {
                var startDate = _kullaniciAtıfRaporService.GetkullaniciAtıfRaporByID(id).startDate;
                kullaniciRapor.endDate = DateTime.Now;
                kullaniciRapor.startDate = startDate;
                _kullaniciAtıfRaporService.Update(kullaniciRapor);
                return Ok(kullaniciRapor);
            }
            return BadRequest();
        }


        [HttpGet]
        [Route("get")]
        public KullaniciAtıfRapor Get(int kullaniciRaporID)
        {
            if (kullaniciRaporID > 0)
            {
                var kullaniciRapor = _kullaniciAtıfRaporService.GetkullaniciAtıfRaporByID(kullaniciRaporID);

                return kullaniciRapor;
            }
            else
            {
                return null;
            }

        }


        [HttpGet]
        [Route("getAll")]
        public IEnumerable<KullaniciAtıfRapor> GetAll()
        {

            return _kullaniciAtıfRaporService.GetkullaniciAtıfRaporAll();
        }

        [HttpGet]
        [Route("getSonOturumRaporu")]
        public KullaniciAtıfRapor getSonOturumRaporu(int oturumID, int kullaniciID)
        {
            if (oturumID > 0)
            {
                var kullaniciRapor = _kullaniciAtıfRaporService.GetkullaniciAtıfRaporAll().
                                        Where(r => r.OturumID == oturumID && r.KullaniciID == kullaniciID).OrderBy(r => r.OturumSirasi).FirstOrDefault();

                return kullaniciRapor;
            }
            else
            {
                return null;
            }

        }


    }
}