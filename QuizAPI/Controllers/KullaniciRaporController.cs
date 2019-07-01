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
    [Route("api/KullaniciRapor")]
    public class KullaniciRaporController : Controller
    {

        private IKullaniciRaporService  _kullaniciRaporService;
        public KullaniciRaporController(IKullaniciRaporService kullaniciRaporService)
        {
            _kullaniciRaporService = kullaniciRaporService;
        }


        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody]KullaniciRapor  kullaniciRapor)
        {
          
            if (ModelState.IsValid)
            {
                kullaniciRapor.startDate = DateTime.Now;
                _kullaniciRaporService.Add(kullaniciRapor);
                return Ok(kullaniciRapor);
            }

            return BadRequest();
        }


        [HttpGet]
        [Route("GetKategoriKullaniciUser")]
        public List<RaporUser> GetKategoriKullaniciUser(int kategoriId,bool isCustom)
        {

            return _kullaniciRaporService.GetKategoriKullaniciUser(kategoriId,isCustom);
        }


        [HttpGet]
        [Route("GetKullaniciRaporSoru")]
        public List<RaporSoru> GetKullaniciRaporSoru(int kullaniciId, int kategoriId, bool isCustom)
        {

            return _kullaniciRaporService.GetKullaniciRaporSoru(kullaniciId, kategoriId,isCustom);
        }

        [HttpGet]
        [Route("GetAtifKullaniciUser")]
        public List<RaporUser> GetAtifKullaniciUser()
        {

            return _kullaniciRaporService.GetAtifKullaniciUser();
        }


        [HttpGet]
        [Route("GetKullaniciAtifRaporSoru")]
        public List<RaporAtif> GetKullaniciAtifRaporSoru(int userId)
        {

            return _kullaniciRaporService.GetKullaniciAtifRaporSoru(userId);
        }

        [HttpGet]
        [Route("GetAtifCevapUser")]
        public List<RaporCevapAtif> GetAtifCevapUser(int userId, int seviyeId)
        {

            return _kullaniciRaporService.GetAtifCevapUser(userId, seviyeId);
        }






        [HttpPost]
        [Route("RaporKontrol")]
        public bool RaporKontrol([FromBody]KullaniciRapor kullaniciRapor)
        {
           
           // var k = _kullaniciRaporService.GetkullaniciRaporAll();
            if (ModelState.IsValid)
            {
                bool isFind = _kullaniciRaporService.KullaniciRaporControl(kullaniciRapor);
                if (isFind)
                    return true;
            }

            return false;
        }

        [HttpPost]
        [Route("KullaniciCompleteControl")]
        public KullaniciRapor KullaniciCompleteControl([FromBody]KullaniciRapor kullaniciRapor)
        {

            // var k = _kullaniciRaporService.GetkullaniciRaporAll();
            if (ModelState.IsValid)
            {
                KullaniciRapor rapor = _kullaniciRaporService.KullaniciCompleteControl(kullaniciRapor);
                return rapor;
            }

            return null;
        }



        [HttpPut("{id}")]
        [Route("put")]
        public ActionResult Update([FromBody]KullaniciRapor kullaniciRapor, int id)
        {
            if (id > 0)
            {
                kullaniciRapor.ID = id;
            }
            if (ModelState.IsValid)
            {
                var startDate = _kullaniciRaporService.GetkullaniciRaporByID(id).startDate;
                kullaniciRapor.endDate = DateTime.Now;
                kullaniciRapor.startDate = startDate;
                _kullaniciRaporService.Update(kullaniciRapor);
                return Ok(kullaniciRapor);
            }
            return BadRequest();
        }


        [HttpGet]
        [Route("get")]
        public KullaniciRapor Get(int kullaniciRaporID)
        {
            if (kullaniciRaporID > 0)
            {
                var kullaniciRapor = _kullaniciRaporService.GetkullaniciRaporByID(kullaniciRaporID);

                return kullaniciRapor;
            }
            else
            {
                return null;
            }

        }


        [HttpGet]
        [Route("getAll")]
        public IEnumerable<KullaniciRapor> GetAll()
        {
            var data = _kullaniciRaporService.GetkullaniciRaporAll();

            return _kullaniciRaporService.GetkullaniciRaporAll();
        }



    }


}