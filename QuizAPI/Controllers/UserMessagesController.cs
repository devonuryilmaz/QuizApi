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
    [Route("api/UserMessages")]
    public class UserMessagesController : Controller
    {
        private IUserMessagesService _userMessagesService;
        public UserMessagesController(IUserMessagesService userMessagesService)
        {
            _userMessagesService = userMessagesService;
        }

       



        [HttpGet]
        [Route("get")]
        public UserMessages Get(int messageID)
        {
            if (messageID > 0)
            {
                var message = _userMessagesService.GetMessagesByID(messageID);

                return message;
            }
            else
            {
                return null;
            }

        }

        [HttpGet("{userID}")]
        [Route("getUserInterect")]
        public HashSet<int> GetUserInterect(int userID)
        {
            if (userID > 0)
            {
                var users = _userMessagesService.UsersInteraction(userID);
             

                return users;
            }
            else
            {
                return null;
            }

        }

        [HttpGet]
        [Route("UsersMessagesInteract")]
        public List<UserMessages> UsersMessagesInteract(int alanID, int gonderenID)
        {
            if(alanID > 0 && gonderenID > 0)
            {
                return _userMessagesService.UsersMessagesInteract(gonderenID, alanID); ;
            }
            return null;
            
        }

        [HttpGet]
        [Route("getAll")]
        public IEnumerable<UserMessages> GetAll()
        {
      
            //return _userMessagesService.GetMessagesAll();
            return _userMessagesService.GetMessagesFriendsUsers(5);
        }

        [HttpGet]
        [Route("GetMessagesForUser")]
        public int GetMessagesForUser(int alan,int gonderen)
        {
            if(alan > 0 && gonderen > 0)
            {
                var c = _userMessagesService.GetMessagesForUser(alan, gonderen);
                return c;
            }
            return -1;         
        }

        [HttpGet]
        [Route("GetNotReadedAllMessages")]
        public int GetNotReadedAllMessages(int alan)
        {
            if (alan > 0)
            {
                var c = _userMessagesService.GetNotReadedAllMessages(alan);
                return c;
            }
            return -1;
        }

        

        [HttpGet]
        [Route("ClearReadedMessage")]
        public bool ClearReadedMessage(int alan, int gonderen)
        {
            if (alan > 0 && gonderen > 0)
            {
                var c = _userMessagesService.ClearReadedMessage(alan, gonderen);
                return c;
            }
            return false;
        }

        




        [HttpDelete]
        [Route("delete")]
        public ActionResult Delete(int id)
        {
            if (id > 0)
            {
                if (ModelState.IsValid)
                {
                    _userMessagesService.Delete(id);
                    return Ok();
                }
            }

            return BadRequest();


        }


        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody]UserMessages message)
        {
            message.Tarih = DateTime.Now;
            
            if (ModelState.IsValid)
            {
                _userMessagesService.Add(message);
                return Ok(message);
            }
            else
            {
                return BadRequest();
            }

        }


        [HttpPut("{id}")]
        [Route("put")]
        public ActionResult Update([FromBody]UserMessages userMessages, int id)
        {
            userMessages.Tarih = DateTime.Now;
            if (id > 0)
            {
                userMessages.ID = id;

            }
            if (ModelState.IsValid)
            {
                _userMessagesService.Update(userMessages);
                return Ok(userMessages);
            }
            else
            {
                return BadRequest();
            }

        }
    }
}