using System;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json.Linq;

namespace geosnap.Services
{
    public class ImageService
    {

        private static string AUTH = "Client-ID 3GZ17va2aGlO0kFJwLFwb2WVuavqz45xYl5wadtFT-g";

        public async static Task<dynamic> GetImageData(string path)
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri("https://api.unsplash.com/");
            client.DefaultRequestHeaders.Add("Authorization", AUTH);
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            string host = "https://api.unsplash.com/";
            string uri = host + path;
            HttpResponseMessage response = await client.GetAsync(uri);
            response.EnsureSuccessStatusCode();
            var result = await response.Content.ReadAsStringAsync();
            var parsedJson = JObject.Parse(result);
            return parsedJson;
        }
    }
}
/*
 *             HttpClient client = new HttpClient();
            client.BaseAddress = new Uri("https://api.unsplash.com/");
            client.DefaultRequestHeaders.Add("Authorization", AUTH);
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            string host = "https://api.unsplash.com/";
            string uri = host + path;
            var result = client.GetStringAsync(uri).Result;
            var parsedJson = JObject.Parse(result);
            return parsedJson;
*/