﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FriendApplication.Controllers
{
    public class PartialsController : Controller
    {
        //
        // GET: /Partials/

        public ActionResult Friends()
        {
            return PartialView();
        }

		public ActionResult User()
		{
			return PartialView();
		}

    }
}
