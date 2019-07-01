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
    [Route("api/FaceToFacePhoto")]
    public class FaceToFacePhotoController : Controller
    {
        IFaceToFacePhotoService _faceToFacePhotoService;
        public FaceToFacePhotoController(IFaceToFacePhotoService faceToFacePhotoService)
        {
            _faceToFacePhotoService = faceToFacePhotoService;
        }

        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody] FaceToFacePhoto faceToFace)
        {
            if (ModelState.IsValid)
            {
                _faceToFacePhotoService.Add(faceToFace);
                return Ok(faceToFace);
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        [Route("put")]
        public ActionResult Put([FromBody]FaceToFacePhoto faceToFace, int id)
        {
            if (id > 0)
            {
                faceToFace.ID = id;

            }
            if (ModelState.IsValid)
            {
                return Ok(_faceToFacePhotoService.Update(faceToFace));
            }

            return BadRequest();
        }

        [HttpDelete]
        [Route("delete")]
        public ActionResult Delete(int id)
        {
            if (id > 0)
            {

                _faceToFacePhotoService.Delete(id);
                return Ok();

            }

            return BadRequest();

        }


        [HttpGet]
        [Route("get")]
        public FaceToFacePhoto Get(int faceToFaceID)
        {
            if (faceToFaceID > 0)
            {
                var faceToFace = _faceToFacePhotoService.GetFaceToFacePhotoByID(faceToFaceID);

                return faceToFace;

            }

            return null;
        }



        [HttpGet]
        [Route("getAll")]
        public IEnumerable<FaceToFacePhoto> GetAll()
        {
            return _faceToFacePhotoService.GetAllfaceToFace();
        }

        [HttpGet]
        [Route("getAllByFacetoFaceSoruId")]
        public IEnumerable<FaceToFacePhoto> GetAllFacetofaceBySoruId(int id)
        {
            if(id > 0)
            {
                return _faceToFacePhotoService.GetAllFacetoFaceBySoruId(id);
            }
            return null;
        }
    }
}