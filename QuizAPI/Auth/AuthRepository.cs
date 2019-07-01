using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using QuizAPI.Data;
using QuizAPI.Entities.Concrete;

namespace QuizAPI.Auth
{
    public class AuthRepository : IAuthRepository
    {
        private QuizAppContext _context;
        public AuthRepository()
        {
            _context = new QuizAppContext();
        }
        public async Task<Kullanici> Login(string userName, string password)
        {
            var user = await _context.Kullanicilar.FirstOrDefaultAsync(x => x.KullaniciAdi == userName && x.Sifre == password);
            if(user == null)
            {
                return null;
            }
            
            return user;
        }

        public async Task<bool> UserExists(string userName)
        {
            if(await _context.Kullanicilar.AnyAsync(x => x.KullaniciAdi == userName))
            {
                return true;
            }
            return false;
        }
    }
}
