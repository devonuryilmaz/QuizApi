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
    [Route("api/FaceToFaceSoru")]
    public class FaceToFaceSoruController : Controller
    {
        IFaceToFaceSoruService _faceToFaceSoruService;

        public FaceToFaceSoruController(IFaceToFaceSoruService faceToFaceSoruService)
        {
            _faceToFaceSoruService = faceToFaceSoruService;
        }

        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody] FaceToFaceSoru faceToFace)
        {
            if (ModelState.IsValid)
            {
                _faceToFaceSoruService.Add(faceToFace);
                return Ok(faceToFace);
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        [Route("put")]
        public ActionResult Put([FromBody]FaceToFaceSoru faceToFace, int id)
        {
            if (id > 0)
            {
                faceToFace.ID = id;

            }
            if (ModelState.IsValid)
            {
                return Ok(_faceToFaceSoruService.Update(faceToFace));
            }

            return BadRequest();
        }

        [HttpDelete]
        [Route("delete")]
        public ActionResult Delete(int id)
        {
            if (id > 0)
            {

                _faceToFaceSoruService.Delete(id);
                return Ok();

            }

            return BadRequest();

        }


        [HttpGet]
        [Route("get")]
        public FaceToFaceSoru Get(int faceToFaceID)
        {
            if (faceToFaceID > 0)
            {
                var faceToFace = _faceToFaceSoruService.GetFaceToFaceSoruByID(faceToFaceID);

                return faceToFace;

            }

            return null;
        }



        [HttpGet]
        [Route("getAll")]
        public IEnumerable<FaceToFaceSoru> GetAll(bool isAdmin)
        {
            return _faceToFaceSoruService.GetAllFaceToFaceSoru(isAdmin);
        }

        [HttpGet]
        [Route("getAllBySeviyeId")]
        public IEnumerable<FaceToFaceSoru> GetAllBySeviyeId(int id)
        {
            if(id > 0)
            {
                return _faceToFaceSoruService.GetAllFaceToFaceSoruBySeviyeId(id);
            }
            return null;
            
        }
    }
}