using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Auth
{
    public interface IAuthRepository
    {
        Task<Kullanici> Login(string userName, string password);
        Task<bool> UserExists(string userName);
    }
}
