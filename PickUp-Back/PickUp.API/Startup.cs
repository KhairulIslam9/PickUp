using ADOLibrary;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using PickUp.API.Infrastructure.Security;
using PickUp.DAL.Interfaces;
using PickUp.DAL.Models;
using PickUp.DAL.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PickUp.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "PickUp.API", Version = "v1" });
            });

            services.AddSingleton<ITokenService, TokenService>();
            services.AddSingleton<IConnection, Connection>(sp => new Connection(@"Data Source=DEsktop-4u66rg8;Initial Catalog=PickUp.DataBase;Integrated Security=True"));
            services.AddSingleton<ICategoryService<Category>, CategoryService>();
            services.AddSingleton<ICustomerService<Customer>, CustomerService>();
            services.AddSingleton<IEventService<Event>, EventService>();
            services.AddSingleton<IReservationService<ReservationCustomer, ReservationUser>, ReservationService>();
            services.AddSingleton<IUserService<User>, UserService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "PickUp.API v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
