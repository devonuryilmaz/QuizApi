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
    [Route("api/FaceToFaceSeviye")]
    public class FaceToFaceSeviyeController : Controller
    {
        private IFaceToFaceService _faceToFaceService;
        public FaceToFaceSeviyeController(IFaceToFaceService faceToFaceService)
        {
            _faceToFaceService = faceToFaceService;
        }

        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody] FaceToFaceSeviye faceToFace)
        {
            if (ModelState.IsValid)
            {
                _faceToFaceService.Add(faceToFace);
                return Ok(faceToFace);
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        [Route("put")]
        public ActionResult Put([FromBody]FaceToFaceSeviye faceToFace, int id)
        {
            if (id > 0)
            {
                faceToFace.ID = id;

            }
            if (ModelState.IsValid)
            {
                return Ok(_faceToFaceService.Update(faceToFace));
            }

            return BadRequest();
        }

        [HttpDelete]
        [Route("delete")]
        public ActionResult Delete(int id)
        {
            if (id > 0)
            {

                _faceToFaceService.Delete(id);
                return Ok();

            }

            return BadRequest();

        }


        [HttpGet]
        [Route("get")]
        public FaceToFaceSeviye Get(int faceToFaceID)
        {
            if (faceToFaceID > 0)
            {
                var faceToFace = _faceToFaceService.GetfaceToFaceByID(faceToFaceID);

                return faceToFace;

            }

            return null;
        }



        [HttpGet]
        [Route("getAll")]
        public IEnumerable<FaceToFaceSeviye> GetAll(bool isAdmin)
        {
            return _faceToFaceService.GetAllfaceToFace(isAdmin);
        }

        [HttpGet]
        [Route("getFaceOturum")]
        public IEnumerable<FaceToFaceSeviye> GetAtifOturum(int oturumID)
        {
            return _faceToFaceService.GetOturumFace(oturumID);
        }

    }
}