using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;


using QuizAPI.Helpers;

namespace QuizAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {     
            TimerScheduler.Start();
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                 .UseKestrel()
            .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();
    }
}
