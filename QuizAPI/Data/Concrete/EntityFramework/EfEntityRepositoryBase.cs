using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using QuizAPI.Data.Abstract;
using QuizAPI.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace QuizAPI.Data.Concrete.EntityFramework
{
    public abstract class EfEntityRepositoryBase<TEntity> : IEntityRepository<TEntity>
        where TEntity : class, IEntity, new()
        
    {
     

        public void Add(TEntity entity)
        {

            using (QuizAppContext context = new QuizAppContext())
            {
                var addedEntity = context.Entry(entity);
                addedEntity.State = EntityState.Added;
                context.SaveChanges();

            }


        }

        public void Delete(TEntity entity)
        {
            using (QuizAppContext context = new QuizAppContext())
            {
                var deletedEntity = context.Entry(entity);
                deletedEntity.State = EntityState.Deleted;
                context.SaveChanges();

            }
        }

        public TEntity Get(Expression<Func<TEntity, bool>> filter)
        {
            using (QuizAppContext context = new QuizAppContext())
            {
                return context.Set<TEntity>().SingleOrDefault(filter);
            }
        }

        public List<TEntity> GetAll(Expression<Func<TEntity, bool>> filter = null)
        {
            using (QuizAppContext context = new QuizAppContext())
            {
                return filter == null ? context.Set<TEntity>().ToList() : context.Set<TEntity>().Where(filter).ToList();
            }
        }

        public void Update(TEntity entity)
        {

            using (QuizAppContext context = new QuizAppContext())
            {
                var updateedEntity = context.Entry(entity);
                updateedEntity.State = EntityState.Modified;
                context.SaveChanges();

            }
        }
    }

}

