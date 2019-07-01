using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using QuizAPI.Auth;
using QuizAPI.Entities.Concrete;

namespace QuizAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Auth")]
    public class AuthController : Controller
    {
        private IAuthRepository _authRepository;
        IConfiguration _configuration;

        public AuthController(IAuthRepository authRepository, IConfiguration configuration )
        {
            _authRepository = authRepository;
            _configuration = configuration;
        }
        [HttpGet("getir")]
        public string Get()
        {
            return "asd";
        }

        [HttpPost]
        [Route("login")]
        public async Task<ActionResult> Login([FromBody]Kullanici kullanici)
        {
            var user = await _authRepository.Login(kullanici.KullaniciAdi, kullanici.Sifre);
            if(user == null)
            {
                return Unauthorized();//yetki yok

            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration.GetSection("Appsettings:Token").Value);

            var tokenDescriptior = new SecurityTokenDescriptor
            {
                Subject = new System.Security.Claims.ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier,user.KullaniciID.ToString()),//token içinde tutmak istediğimiz bilgiler.
                    new Claim(ClaimTypes.Name,kullanici.KullaniciAdi),
                    new Claim(ClaimTypes.Actor,user.isAdmin.ToString())
                }),
                Expires = DateTime.Now.AddDays(1),//tokenin kalma süresi (ben 1 gün verdim değiştirebiliriz)
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha512Signature)//bunları çok sikleme kanka :D
            };

            var token = tokenHandler.CreateToken(tokenDescriptior);
            var tokenString = tokenHandler.WriteToken(token);
            return Ok(tokenString);
        }
    }
}