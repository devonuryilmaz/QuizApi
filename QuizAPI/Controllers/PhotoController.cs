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
    [Route("api")]
    public class PhotoController : Controller
    {

        private IOptions<CloudinarySettings> _cloudinaryConfig;
        private Cloudinary _cloudinary;
        private IKategoriService _kategoriService;
        private ISoruService _soruService;
        private ISecenekService _secenekService;
        private ISoruFotograflariService _soruFotografService;
        public PhotoController(IOptions<CloudinarySettings> cloudinaryConfig, IKategoriService kategoriService, ISoruService soruService, ISecenekService secenekService, ISoruFotograflariService soruFotografService)
        {
            _kategoriService = kategoriService;
            _cloudinaryConfig = cloudinaryConfig;
            _soruService = soruService;
            _secenekService = secenekService;
            _soruFotografService = soruFotografService;

            Account account = new Account(
                _cloudinaryConfig.Value.CloudName,
                _cloudinaryConfig.Value.ApiKey,
                _cloudinaryConfig.Value.ApiSecret);

            _cloudinary = new Cloudinary(account);
        }

        [HttpPost("photos/kategori/{id}"), DisableRequestSizeLimit]
        public ActionResult UploadKategoriPhoto(int id)
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
            else
            {
                return BadRequest();
            }
            var Url = uploadResult.Uri.ToString();//veritabanına clouddan dönecek url'i yazdık.
            var PublicId = uploadResult.PublicId;
            var kategori = _kategoriService.GetKategoriByID(id);

            if (string.IsNullOrEmpty(kategori.KategoriID.ToString()))
            {
                return BadRequest();
            }
            kategori.PublicID = PublicId;
            kategori.Url ="f" + Url;
            _kategoriService.Update(kategori);

            return Ok(kategori.Url);
        }

        [HttpPost("video/kategori/{id}"), DisableRequestSizeLimit]
        public ActionResult UploadKategoriVideo(int id)
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
            var PublicId = uploadResult.PublicId;
            var kategori = _kategoriService.GetKategoriByID(id);

            if (string.IsNullOrEmpty(kategori.KategoriID.ToString()))
            {
                return BadRequest();
            }
            kategori.PublicID = PublicId;
            kategori.Url ="v"+ Url;
            _kategoriService.Update(kategori);

            return Ok(kategori.Url);
        }

        [HttpPost("video/soru/{id}"), DisableRequestSizeLimit]
        public ActionResult UploadSoruVideo(int id)
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
            var PublicId = uploadResult.PublicId;
            var soru = _soruService.GetSoruByID(id);

            if (string.IsNullOrEmpty(soru.SoruID.ToString()))
            {
                return BadRequest();
            }
            soru.PublicID = PublicId;
            soru.Url ="v" + Url;
            _soruService.Update(soru);

            return Ok(soru.Url);
        }

        [HttpPost("photos/soru/{id}"), DisableRequestSizeLimit]
        public ActionResult UploadSoruPhoto(int id)
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
            var Url = uploadResult.Uri.ToString();
            var PublicId = uploadResult.PublicId;
            var soru = _soruService.GetSoruByID(id);

            if (string.IsNullOrEmpty(soru.SoruID.ToString()))
            {
                return BadRequest();
            }
            soru.PublicID = PublicId;
            soru.Url = "f" +Url;
            _soruService.Update(soru);

            return Ok(soru.Url);
        }

        [HttpPost("photos/secenek/{id}"), DisableRequestSizeLimit]
        public ActionResult UploadSecenekPhoto(int id)
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
            var PublicId = uploadResult.PublicId;
            var secenek = _secenekService.GetSecenekByID(id);

            if (string.IsNullOrEmpty(secenek.SecenekID.ToString()))
            {
                return BadRequest();
            }
            secenek.PublicID = PublicId;
            secenek.Url ="f"+ Url;
            _secenekService.Update(secenek);

            return Ok(secenek.Url);
        }


        [HttpPost("video/secenek/{id}"), DisableRequestSizeLimit]
        public ActionResult UploadSecenekVideo(int id)
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
            var PublicId = uploadResult.PublicId;
            var secenek = _secenekService.GetSecenekByID(id);

            if (string.IsNullOrEmpty(secenek.SecenekID.ToString()))
            {
                return BadRequest();
            }
            secenek.PublicID = PublicId;
            secenek.Url ="v"+ Url;
            _secenekService.Update(secenek);

            return Ok(secenek.Url);
        }

        [HttpPost("photos/soruFotograf/{id}"), DisableRequestSizeLimit]
        public ActionResult UploadSoruFotografPhoto(int id)
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
            var PublicId = uploadResult.PublicId;
            var soruFotograf = _soruFotografService.GetSoruFotograflariByID(id);

            if (string.IsNullOrEmpty(soruFotograf.SoruID.ToString()))
            {
                return BadRequest();
            }
            soruFotograf.Url = "f" + Url;
            _soruFotografService.Update(soruFotograf);

            return Ok(soruFotograf.Url);
        }


        [HttpPost("video/soruFotograf/{id}"), DisableRequestSizeLimit]
        public ActionResult UploadSoruFotografVideo(int id)
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
            var PublicId = uploadResult.PublicId;
            var soruFoto = _soruFotografService.GetSoruFotograflariByID(id);

            if (string.IsNullOrEmpty(soruFoto.SoruID.ToString()))
            {
                return BadRequest();
            }
            soruFoto.Url = "v" + Url;
            _soruFotografService.Update(soruFoto);

            return Ok(soruFoto.Url);
        }
    }
}