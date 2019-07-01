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
    [Route("api/Header")]
    public class HeaderController : Controller
    {
        IKategoriHeaderService _header;

        public HeaderController(IKategoriHeaderService header)
        {
            _header = header;
        }

        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody] AdminPanel header)
        {
            if (ModelState.IsValid)
            {
                _header.Add(header);
                return Ok(header);
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        [Route("put")]
        public ActionResult Put([FromBody]AdminPanel header, int id)
        {
            if (id > 0)
            {
                header.ID = id;

            }
            if (ModelState.IsValid)
            {
                return Ok(_header.Update(header));
            }

            return BadRequest();
        }

        [HttpDelete("{id}")]
        [Route("delete")]
        public ActionResult Delete(int id)
        {
            if (id > 0)
            {
                _header.Delete(id);
                return Ok();

            }

            return BadRequest();

        }


        [HttpGet]
        [Route("get")]
        public AdminPanel Get(int headerID)
        {
            if(_header.Get() != null)
            {
                return _header.Get();
            }
            else
            {
                return null;
            }
         
        }


    }
}