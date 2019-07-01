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
    [Route("api/FaceToFaceSecenek")]
    public class FaceToFaceSecenekController : Controller
    {
        IFaceToFaceSecenekService _faceToFaceSecenekService;
        public FaceToFaceSecenekController(IFaceToFaceSecenekService faceToFaceSecenekService)
        {
            _faceToFaceSecenekService = faceToFaceSecenekService;
        }


        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody] FaceToFaceSecenek faceToFace)
        {
            if (ModelState.IsValid)
            {
                _faceToFaceSecenekService.Add(faceToFace);
                return Ok(faceToFace);
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        [Route("put")]
        public ActionResult Put([FromBody]FaceToFaceSecenek faceToFace, int id)
        {
            if (id > 0)
            {
                faceToFace.ID = id;

            }
            if (ModelState.IsValid)
            {
                return Ok(_faceToFaceSecenekService.Update(faceToFace));
            }

            return BadRequest();
        }

        [HttpDelete]
        [Route("delete")]
        public ActionResult Delete(int id)
        {
            if (id > 0)
            {

                _faceToFaceSecenekService.Delete(id);
                return Ok();

            }

            return BadRequest();

        }


        [HttpGet]
        [Route("get")]
        public FaceToFaceSecenek Get(int faceToFaceID)
        {
            if (faceToFaceID > 0)
            {
                var faceToFace = _faceToFaceSecenekService.GetFaceToFaceSecenekByID(faceToFaceID);

                return faceToFace;

            }

            return null;
        }



        [HttpGet]
        [Route("getAll")]
        public IEnumerable<FaceToFaceSecenek> GetAll()
        {
            return _faceToFaceSecenekService.GetAllfaceToFace();
        }

        [HttpGet]
        [Route("getAllFacetofactByPhotoId")]
        public IEnumerable<FaceToFaceSecenek> GetAllByPhotoId(int id)
        {
            if(id > 0)
            {
                return _faceToFaceSecenekService.GetAllfaceToFaceSecenekByPhotoId(id);
            }
            return null;
            
        }
    }
}