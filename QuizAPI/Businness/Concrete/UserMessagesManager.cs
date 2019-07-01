using QuizAPI.Businness.Abstract;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPI.Businness.Concrete
{
    public class UserMessagesManager : IUserMessagesService
    {
        IUserMessagesDal _userMessagesDal;
        public UserMessagesManager(IUserMessagesDal userMessagesDal)
        {
            _userMessagesDal = userMessagesDal;
        }
        public void Add(UserMessages message)
        {
            _userMessagesDal.Add(message);
        }

        public void Delete(int id)
        {

            var messages = GetMessagesByID(id);
            _userMessagesDal.Delete(messages);
        }

        public List<UserMessages> GetMessagesAll()
        {
           return _userMessagesDal.GetAll();
        }

        public UserMessages GetMessagesByID(int messageID)
        {
            return _userMessagesDal.Get(k => k.ID == messageID);
        }
        public List<UserMessages> GetMessagesFriendsUsers(int userId)
        {
            var groupedResult = from s in _userMessagesDal.GetAll(k => k.GonderenUserId == userId || k.AlanUserId == userId)
                                group s by s.GonderenUserId;
            var data =_userMessagesDal.GetAll(k => k.GonderenUserId == userId || k.AlanUserId == userId);
           
            return data;
        }
        public int GetMessagesForUser(int alanId, int gonderenId)
        {
            
            return _userMessagesDal.GetAll(u => u.GonderenUserId == gonderenId && u.AlanUserId == alanId).Where(u => u.isOkundu == false).ToList().Count();        
        }
        public int GetNotReadedAllMessages(int alanId)
        {
         

            return _userMessagesDal.GetAll(u => u.AlanUserId == alanId).Where(u => u.isOkundu == false).ToList().Count();


        }

        public bool ClearReadedMessage(int alanId, int gonderenId)
        {
            var isOkundu = false;
            var messages = _userMessagesDal.GetAll(u => u.GonderenUserId == gonderenId && u.AlanUserId == alanId).Where(u => u.isOkundu == false).ToList();

            foreach (var message in messages)
            {
                message.isOkundu = true;
                _userMessagesDal.Update(message);
                isOkundu = true;
            }
            return isOkundu;
        }
        public HashSet<int> UsersInteraction(int userId)
        {
           
            var usersList = new HashSet<int>();
           
            var lookGonderen = _userMessagesDal.GetAll(k => k.GonderenUserId == userId || k.AlanUserId == userId).ToLookup(l => l.GonderenUserId);
            var lookAlan = _userMessagesDal.GetAll(k => k.GonderenUserId == userId || k.AlanUserId == userId).ToLookup(l => l.AlanUserId);
         
            foreach (var item in lookGonderen)
            {
                var data = item.Key;
                if(data != userId)
                {
                    usersList.Add(data);
                }
               
            }

            foreach (var item in lookAlan)
            {
                var data = item.Key;
                if (data != userId)
                {
                    usersList.Add(data);
                }

            }
         
            return usersList;
        }
        public List<UserMessages> UsersMessagesInteract(int gonderenId, int alanId)
        {
            var messages = _userMessagesDal.GetAll(k => k.GonderenUserId == gonderenId && k.AlanUserId == alanId || k.GonderenUserId == alanId && k.AlanUserId == gonderenId).OrderBy(o => o.Tarih).ToList();
            return messages;
        }

       
        public UserMessages Update(UserMessages message)
        {
            _userMessagesDal.Update(message);
            return message;
        }
    }
}
