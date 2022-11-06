using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;

namespace PawMailer
{
 class Program{
  static void Main(string[] args){
   string whom = string.Join("", File.ReadAllLines("who.txt"));
   string[] when = File.ReadAllLines("when.txt");
   string time = DateTime.Now.ToString("HH:mm:ss tt");
   string body_text = string.Join("\r\n",File.ReadAllLines("food.txt"));
   string last_sent = DateTime.Now.ToString("HH:mm:ss tt");
   IDictionary<string, string[]> Users_and_times = new Dictionary<string, string[]>();
   using (SmtpClient client = new SmtpClient("smtp.gmail.com", 587)){
    while (true){
     if (Users_and_times.ContainsKey(whom)){ 
     when = File.ReadAllLines("when.txt");
     time = DateTime.Now.ToString("HH:mm:ss tt"); 
      Users_and_times[whom] = when;
     }else{
      Users_and_times.Add(whom, when);
     }
     foreach(KeyValuePair<string, string[]> kvp in Users_and_times)
      if ((kvp.Value).Any(time.Contains)){
       client.EnableSsl = true;
       client.DeliveryMethod = SmtpDeliveryMethod.Network;
       client.UseDefaultCredentials = false;
       client.Credentials = new System.Net.NetworkCredential("pawggersmail@gmail.com", "yextprwaisnzuqpt");
       MailMessage mm = new MailMessage();
       mm.From = new MailAddress("pawggersmail@gmail.com");
       mm.Subject = "Time to feed your best friend!";
       mm.Body = body_text;
       mm.To.Add(kvp.Key);
       if (last_sent != time){
        client.Send(mm);
        last_sent = time;
       }
     }
    }
   }
  }
 }
}

