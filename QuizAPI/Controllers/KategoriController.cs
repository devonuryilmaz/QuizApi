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
    [Route("api/Kategori")]
    public class KategoriController : Controller
    {
        private IKategoriService _kategoriService;
        public KategoriController(IKategoriService kategoriService)
        {
            _kategoriService = kategoriService;
        }


        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody] Kategori kategori)
        {
            if (ModelState.IsValid)
            {
                _kategoriService.Add(kategori);
                return Ok(kategori);
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        [Route("put")]
        public ActionResult Put([FromBody]Kategori kategori, int id)
        {
            if (id > 0)
            {
                kategori.KategoriID = id;

            }
            if (ModelState.IsValid)
            {
                return Ok(_kategoriService.Update(kategori));
            }

            return BadRequest();
        }

        [HttpDelete]
        [Route("delete")]
        public ActionResult Delete(int id)
        {
            if (id > 0)
            {

                _kategoriService.Delete(id);
                return Ok();

            }

            return BadRequest();

        }


        [HttpGet]
        [Route("get")]
        public Kategori Get(int kategoriID)
        {
            if (kategoriID > 0)
            {
                var kategori = _kategoriService.GetKategoriByID(kategoriID);

                return kategori;

            }

            return null;
        }



        [HttpGet]
        [Route("getAll")]
        public IEnumerable<Kategori> GetAll(bool isAdmin)
        {
            return _kategoriService.GetAllKategori(isAdmin);
        }

    }
}