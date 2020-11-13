using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;

namespace geosnap.Services
{
    public class ImageService
    {

        private static string host = "https://api.unsplash.com/";
        //change to func arg;
        private static string path = "photos/random";
        private static string AUTH = "Client-ID 3GZ17va2aGlO0kFJwLFwb2WVuavqz45xYl5wadtFT-g";

        private static HttpClient client = new HttpClient();

        public async static Task<dynamic> GetImageData()
        {
            client.BaseAddress = new Uri("https://api.unsplash.com/");
            client.DefaultRequestHeaders.Add("Authorization", AUTH);
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            string uri = host + path;
            HttpResponseMessage response = await client.GetAsync(uri);
            //response.EnsureSuccessStatusCode();
            string contentString = await response.Content.ReadAsStringAsync();
            dynamic parsedJson = JsonConvert.DeserializeObject(contentString);
            dynamic result = parsedJson.result;
            return parsedJson;
        }
    }
}
