using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using geosnap.Services;
using Microsoft.AspNetCore.Authorization;

namespace geosnap.Controllers
{
    [Produces("application/json")]
    [EnableCors("ImagePolicy")]
    public class ImageController : ControllerBase
    {
        [HttpGet]
        public ActionResult<Task<dynamic>> GetRandom()
        {
            var result = ImageService.GetImageData();
            return result;
        }

        /*

        public Task<object> Get()
        {
            var result = ImageService.GetImageData();
            return result;
        }
        */
    }
}
