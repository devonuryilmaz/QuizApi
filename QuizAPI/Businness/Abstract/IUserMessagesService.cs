using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Abstract
{
    public interface IUserMessagesService
    {
        void Add(UserMessages message);

        UserMessages Update(UserMessages message);

        UserMessages GetMessagesByID(int messageID);
        int GetNotReadedAllMessages(int alanId);
        List<UserMessages> GetMessagesAll();
        int GetMessagesForUser(int alanId, int gonderenId);
        void Delete(int id);
        List<UserMessages> GetMessagesFriendsUsers(int userId);
        bool ClearReadedMessage(int alanId, int gonderenId);
        HashSet<int> UsersInteraction(int userId);
        List<UserMessages> UsersMessagesInteract(int gonderenId, int alanId);

        //List<UserMessages> GetSoruAllBySeviyeIDList(int seviyeID);
    }
}
