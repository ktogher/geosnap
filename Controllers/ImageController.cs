using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using geosnap.Services;
using Microsoft.AspNetCore.Authorization;

using Newtonsoft.Json.Linq;

namespace geosnap.Controllers
{
    [Produces("application/json")]
    [EnableCors("ImagePolicy")]
    public class ImageController : ControllerBase
    {
        [HttpGet]
        public ActionResult<Task<dynamic>> GetRandom()
        {
            string path = "photos/random";
            var result = ImageService.GetImageData(path);
            return result;
        }
        
        [HttpGet]
        public ActionResult<JObject> GetTestData()
        {
            var result = ImageService.TestData();
            return result;
        }
        
    }
}
