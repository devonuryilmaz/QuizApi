using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using QuizAPI.Businness.Abstract;
using QuizAPI.Entities.Concrete;

namespace QuizAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Custom")]
    public class CustomController : Controller
    {
        private IOptions<CloudinarySettings> _cloudinaryConfig;
        private Cloudinary _cloudinary;
        private IGazeCastKategoriService _gazeCastKategoriService;
        private IAdminPanelService _atıfKategoriService;
        private IFaceToFaceKategoriService _faceToFaceKategoriService;
        private IAtıfSoruService _atıfSoruService;
        private IGazeCastSoruService _gazeCastSoruService;
        private IFaceToFacePhotoService  _faceToFacePhotoService;
        private IGazeCastCevapService  _gazeCastCevapService;
        public CustomController( IAdminPanelService atıfKategoriService, IOptions<CloudinarySettings> cloudinaryConfig,  IFaceToFaceKategoriService faceToFaceKategoriService, IGazeCastKategoriService gazeCastKategoriService, IAtıfSoruService atıfSoruService, IGazeCastSoruService gazeCastSoruService, IFaceToFacePhotoService faceToFacePhotoService, IGazeCastCevapService gazeCastCevapService)
        {   _gazeCastKategoriService = gazeCastKategoriService;
            _faceToFaceKategoriService = faceToFaceKategoriService;
            _cloudinaryConfig = cloudinaryConfig;
            _atıfKategoriService = atıfKategoriService;
            _atıfSoruService = atıfSoruService;
            _gazeCastSoruService = gazeCastSoruService;
            _faceToFacePhotoService = faceToFacePhotoService;
            _gazeCastCevapService = gazeCastCevapService;
            Account account = new Account(
             _cloudinaryConfig.Value.CloudName,
             _cloudinaryConfig.Value.ApiKey,
             _cloudinaryConfig.Value.ApiSecret);

            _cloudinary = new Cloudinary(account);

        }

        [HttpGet]
        [Route("GetFacetoface")]
        public IEnumerable<FaceToFaceKategori> GetF(bool isAdmin)
        {
            return _faceToFaceKategoriService.GetAllFaceToFaceKategori(isAdmin);
        }

        [HttpGet]
        [Route("GetAtif")]
        public IEnumerable<AtıfKategori> GetG(bool isAdmin)
        {
            return _atıfKategoriService.GetAllAtıfKategori(isAdmin);
        }
        [HttpGet]
        [Route("GetGaze")]
        public IEnumerable<GazeCastKategori> GetGaze(bool isAdmin)
        {
            return _gazeCastKategoriService.GetAllGazeCastKategori(isAdmin);
        }

        [HttpPut]
        [Route("putGaze")]
        public ActionResult Put([FromBody]GazeCastKategori kategori)
        {
            
            if (ModelState.IsValid)
            {
                return Ok(_gazeCastKategoriService.Update(kategori));
            }

            return BadRequest();
        }

       



        [HttpPut]
        [Route("putFace")]
        public ActionResult Put([FromBody]FaceToFaceKategori kategori)
        {
           
            if (ModelState.IsValid)
            {
                return Ok(_faceToFaceKategoriService.Update(kategori));
            }

            return BadRequest();
        }

        [HttpPut]
        [Route("putAtif")]
        public ActionResult Put([FromBody]AtıfKategori kategori)
        {
            
            if (ModelState.IsValid)
            {
                return Ok(_atıfKategoriService.Update(kategori));
            }

            return BadRequest();
        }

        [HttpPost("video/gazeKategori"), DisableRequestSizeLimit]
        public ActionResult UploadGazeCastKategoriVideo()
        {

            var file = Request.Form.Files[0];

            var uploadResult = new VideoUploadResult();
            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new VideoUploadParams
                    {
                        File = new FileDescription(file.Name, stream)
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            var Url = uploadResult.Uri.ToString();//veritabanına clouddan dönecek url'i yazdık.

            var gaze = _gazeCastKategoriService.GetGazeCastKategoriByID(1);
            if (string.IsNullOrEmpty(gaze.ID.ToString()))
            {
                return BadRequest();
            }

            gaze.videoUrl = "v" + Url;
            _gazeCastKategoriService.Update(gaze);

            return Ok(gaze.videoUrl);
        }

        [HttpPost("video/facetofaceKategori"), DisableRequestSizeLimit]
        public ActionResult UploadFacetofaceKategoriVideo()
        {

            var file = Request.Form.Files[0];

            var uploadResult = new VideoUploadResult();
            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new VideoUploadParams
                    {
                        File = new FileDescription(file.Name, stream)
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            var Url = uploadResult.Uri.ToString();//veritabanına clouddan dönecek url'i yazdık.

            var face = _faceToFaceKategoriService.GetFaceToFaceKategoriByID(1);
            if (string.IsNullOrEmpty(face.ID.ToString()))
            {
                return BadRequest();
            }

            face.videoUrl = "v" + Url;
            _faceToFaceKategoriService.Update(face);

            return Ok(face.videoUrl);
        }


        [HttpPost("video/atifKategori"), DisableRequestSizeLimit]
        public ActionResult UploadAtifKategoriVideo()
        {

            var file = Request.Form.Files[0];

            var uploadResult = new VideoUploadResult();
            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new VideoUploadParams
                    {
                        File = new FileDescription(file.Name, stream)
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            var Url = uploadResult.Uri.ToString();//veritabanına clouddan dönecek url'i yazdık.
           
            var atif = _atıfKategoriService.GetAtıfKategoriByID(1);
            if (string.IsNullOrEmpty(atif.ID.ToString()))
            {
                return BadRequest();
            }

            atif.videoUrl = "v" + Url;
            _atıfKategoriService.Update(atif);

            return Ok(atif.videoUrl);
        }

        [HttpPut("video/atifSoru/{id}"), DisableRequestSizeLimit]
        public ActionResult UploadAtifSoruVideo(int id)
        {

            var file = Request.Form.Files[0];

            var uploadResult = new VideoUploadResult();
            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new VideoUploadParams
                    {
                        File = new FileDescription(file.Name, stream)
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            var Url = uploadResult.Uri.ToString();//veritabanına clouddan dönecek url'i yazdık.

            var atifSoru = _atıfSoruService.GetAtıfSoruByID(id);
            if (string.IsNullOrEmpty(atifSoru.ID.ToString()))
            {
                return BadRequest();
            }

            atifSoru.url = "v" + Url;
            _atıfSoruService.Update(atifSoru);

            return Ok(atifSoru.url);
        }


        [HttpPut("video/gazeSoru/{id}"), DisableRequestSizeLimit]
        public ActionResult UploadGazeSoruVideo(int id)
        {

            var file = Request.Form.Files[0];

            var uploadResult = new VideoUploadResult();
            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new VideoUploadParams
                    {
                        File = new FileDescription(file.Name, stream)
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            var Url = uploadResult.Uri.ToString();//veritabanına clouddan dönecek url'i yazdık.

            var gazeSoru = _gazeCastSoruService.GetGazeCastSoruByID(id);
            if (string.IsNullOrEmpty(gazeSoru.ID.ToString()))
            {
                return BadRequest();
            }

            gazeSoru.VideoUrl = "v" + Url;
            _gazeCastSoruService.Update(gazeSoru);

            return Ok(gazeSoru.VideoUrl);
        }

        [HttpPut("photos/atifSoru/{id}"), DisableRequestSizeLimit]
        public ActionResult UploadAtifSoruResim(int id)
        {

            var file = Request.Form.Files[0];

            var uploadResult = new ImageUploadResult();
            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams
                    {
                        File = new FileDescription(file.Name, stream)
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            var Url = uploadResult.Uri.ToString();//veritabanına clouddan dönecek url'i yazdık.

            var atifSoru = _atıfSoruService.GetAtıfSoruByID(id);
            if (string.IsNullOrEmpty(atifSoru.ID.ToString()))
            {
                return BadRequest();
            }

            atifSoru.url = "f" + Url;
            _atıfSoruService.Update(atifSoru);

            return Ok(atifSoru.url);
        }

        [HttpPut("photos/facetofaceSoruPhotos/{id}"), DisableRequestSizeLimit]
        public ActionResult UploadFacetofaceSoruResim(int id)
        {

            var file = Request.Form.Files[0];

            var uploadResult = new ImageUploadResult();
            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams
                    {
                        File = new FileDescription(file.Name, stream)
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            var Url = uploadResult.Uri.ToString();//veritabanına clouddan dönecek url'i yazdık.

            var facePhoto = _faceToFacePhotoService.GetFaceToFacePhotoByID(id);
            if (string.IsNullOrEmpty(facePhoto.ID.ToString()))
            {
                return BadRequest();
            }

            facePhoto.Url = "f" + Url;
            _faceToFacePhotoService.Update(facePhoto);

            return Ok(facePhoto.Url);
        }


        [HttpPost("video/face"), DisableRequestSizeLimit]
        public ActionResult UploadFaceKategoriVideo()
        {

            var file = Request.Form.Files[0];

            var uploadResult = new VideoUploadResult();
            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new VideoUploadParams
                    {
                        File = new FileDescription(file.Name, stream)
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            var Url = uploadResult.Uri.ToString();//veritabanına clouddan dönecek url'i yazdık.

            var face = _faceToFaceKategoriService.GetFaceToFaceKategoriByID(1);
            if (string.IsNullOrEmpty(face.ID.ToString()))
            {
                return BadRequest();
            }

            face.videoUrl = "v" + Url;
            _faceToFaceKategoriService.Update(face);

            return Ok(face.videoUrl);
        }

        [HttpPost("video/gaze"), DisableRequestSizeLimit]
        public ActionResult UploadGazeKategoriVideo()
        {

            var file = Request.Form.Files[0];

            var uploadResult = new VideoUploadResult();
            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new VideoUploadParams
                    {
                        File = new FileDescription(file.Name, stream)
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            var Url = uploadResult.Uri.ToString();//veritabanına clouddan dönecek url'i yazdık.

            var gaze = _gazeCastKategoriService.GetGazeCastKategoriByID(1);
            if (string.IsNullOrEmpty(gaze.ID.ToString()))
            {
                return BadRequest();
            }

            gaze.videoUrl = "v" + Url;
            _gazeCastKategoriService.Update(gaze);

            return Ok(gaze.videoUrl);
        }

        [HttpPut("photos/gazeSecenekPhoto1/{id}"), DisableRequestSizeLimit]
        public ActionResult UploadGazeSecenekResim(int id)
        {

            var file = Request.Form.Files[0];

            var uploadResult = new ImageUploadResult();
            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams
                    {
                        File = new FileDescription(file.Name, stream)
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            var Url = uploadResult.Uri.ToString();//veritabanına clouddan dönecek url'i yazdık.

            var gazeSecenekPhoto = _gazeCastCevapService.GetGazeCastCevapByID(id);
            if (string.IsNullOrEmpty(gazeSecenekPhoto.ID.ToString()))
            {
                return BadRequest();
            }

            gazeSecenekPhoto.Photo1Url = "f" + Url;
            _gazeCastCevapService.Update(gazeSecenekPhoto);

            return Ok(gazeSecenekPhoto.Photo1Url);
        }

        [HttpPut("photos/gazeSecenekPhoto2/{id}"), DisableRequestSizeLimit]
        public ActionResult UploadGazeSecenek2Resim(int id)
        {

            var file = Request.Form.Files[0];

            var uploadResult = new ImageUploadResult();
            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams
                    {
                        File = new FileDescription(file.Name, stream)
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            var Url = uploadResult.Uri.ToString();//veritabanına clouddan dönecek url'i yazdık.

            var gazeSecenekPhoto = _gazeCastCevapService.GetGazeCastCevapByID(id);
            if (string.IsNullOrEmpty(gazeSecenekPhoto.ID.ToString()))
            {
                return BadRequest();
            }

            gazeSecenekPhoto.Photo2Url = "f" + Url;
            _gazeCastCevapService.Update(gazeSecenekPhoto);

            return Ok(gazeSecenekPhoto.Photo2Url);
        }

        [HttpPut("photos/gazeSecenekPhoto3/{id}"), DisableRequestSizeLimit]
        public ActionResult UploadGazeSecenek3Resim(int id)
        {

            var file = Request.Form.Files[0];

            var uploadResult = new ImageUploadResult();
            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams
                    {
                        File = new FileDescription(file.Name, stream)
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            var Url = uploadResult.Uri.ToString();//veritabanına clouddan dönecek url'i yazdık.

            var gazeSecenekPhoto = _gazeCastCevapService.GetGazeCastCevapByID(id);
            if (string.IsNullOrEmpty(gazeSecenekPhoto.ID.ToString()))
            {
                return BadRequest();
            }

            gazeSecenekPhoto.Photo3Url = "f" + Url;
            _gazeCastCevapService.Update(gazeSecenekPhoto);

            return Ok(gazeSecenekPhoto.Photo3Url);
        }

        [HttpPut("photos/gazeSecenekPhoto4/{id}"), DisableRequestSizeLimit]
        public ActionResult UploadGazeSecenek4Resim(int id)
        {

            var file = Request.Form.Files[0];

            var uploadResult = new ImageUploadResult();
            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams
                    {
                        File = new FileDescription(file.Name, stream)
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            var Url = uploadResult.Uri.ToString();//veritabanına clouddan dönecek url'i yazdık.

            var gazeSecenekPhoto = _gazeCastCevapService.GetGazeCastCevapByID(id);
            if (string.IsNullOrEmpty(gazeSecenekPhoto.ID.ToString()))
            {
                return BadRequest();
            }

            gazeSecenekPhoto.Photo4Url = "f" + Url;
            _gazeCastCevapService.Update(gazeSecenekPhoto);

            return Ok(gazeSecenekPhoto.Photo4Url);
        }

        [HttpPut("photos/gazeSecenekPhoto5/{id}"), DisableRequestSizeLimit]
        public ActionResult UploadGazeSecenek5Resim(int id)
        {

            var file = Request.Form.Files[0];

            var uploadResult = new ImageUploadResult();
            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams
                    {
                        File = new FileDescription(file.Name, stream)
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            var Url = uploadResult.Uri.ToString();//veritabanına clouddan dönecek url'i yazdık.

            var gazeSecenekPhoto = _gazeCastCevapService.GetGazeCastCevapByID(id);
            if (string.IsNullOrEmpty(gazeSecenekPhoto.ID.ToString()))
            {
                return BadRequest();
            }

            gazeSecenekPhoto.Photo5Url = "f" + Url;
            _gazeCastCevapService.Update(gazeSecenekPhoto);

            return Ok(gazeSecenekPhoto.Photo5Url);
        }


        [HttpPut("photos/gazeSecenekPhoto6/{id}"), DisableRequestSizeLimit]
        public ActionResult UploadGazeSecenek6Resim(int id)
        {

            var file = Request.Form.Files[0];

            var uploadResult = new ImageUploadResult();
            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams
                    {
                        File = new FileDescription(file.Name, stream)
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            var Url = uploadResult.Uri.ToString();//veritabanına clouddan dönecek url'i yazdık.

            var gazeSecenekPhoto = _gazeCastCevapService.GetGazeCastCevapByID(id);
            if (string.IsNullOrEmpty(gazeSecenekPhoto.ID.ToString()))
            {
                return BadRequest();
            }

            gazeSecenekPhoto.Photo6Url = "f" + Url;
            _gazeCastCevapService.Update(gazeSecenekPhoto);

            return Ok(gazeSecenekPhoto.Photo6Url);
        }

        [HttpPut("photos/gazeSecenekPhoto7/{id}"), DisableRequestSizeLimit]
        public ActionResult UploadGazeSecenek7Resim(int id)
        {

            var file = Request.Form.Files[0];

            var uploadResult = new ImageUploadResult();
            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams
                    {
                        File = new FileDescription(file.Name, stream)
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            var Url = uploadResult.Uri.ToString();//veritabanına clouddan dönecek url'i yazdık.

            var gazeSecenekPhoto = _gazeCastCevapService.GetGazeCastCevapByID(id);
            if (string.IsNullOrEmpty(gazeSecenekPhoto.ID.ToString()))
            {
                return BadRequest();
            }

            gazeSecenekPhoto.Photo7Url = "f" + Url;
            _gazeCastCevapService.Update(gazeSecenekPhoto);

            return Ok(gazeSecenekPhoto.Photo7Url);
        }


        [HttpPut("photos/gazeSecenekPhoto8/{id}"), DisableRequestSizeLimit]
        public ActionResult UploadGazeSecenek8Resim(int id)
        {

            var file = Request.Form.Files[0];

            var uploadResult = new ImageUploadResult();
            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams
                    {
                        File = new FileDescription(file.Name, stream)
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            var Url = uploadResult.Uri.ToString();//veritabanına clouddan dönecek url'i yazdık.

            var gazeSecenekPhoto = _gazeCastCevapService.GetGazeCastCevapByID(id);
            if (string.IsNullOrEmpty(gazeSecenekPhoto.ID.ToString()))
            {
                return BadRequest();
            }

            gazeSecenekPhoto.Photo8Url = "f" + Url;
            _gazeCastCevapService.Update(gazeSecenekPhoto);

            return Ok(gazeSecenekPhoto.Photo8Url);
        }







    }
}