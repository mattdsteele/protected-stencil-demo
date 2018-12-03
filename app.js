var express = require("express");
var cookieParser = require("cookie-parser");
var serveStatic = require("serve-static");
const path = require("path");

var app = express();
app.use(cookieParser());

const cookieChecker = (req, res, next) => {
  if (req.path.match(/\.js$/)) {
    const { cookies } = req;
    console.log(`cookies at ${req.path}:`, cookies);
    if (!cookies.session) {
      res.status(403);
    }
    next();
  } else {
    next();
  }
};

const cookieRootSetter = (req, res, next) => {
  if (req.path === "/") {
    console.log("Setting session cookie");
    res.cookie("session", "true", { expires: 0 });
  }
  next();
};

app.use(cookieRootSetter);
app.use(cookieChecker);
app.use(serveStatic(path.join(__dirname, "public")));

const port = process.env.PORT || 8080;
app.listen(port);

// curl command that sends an HTTP request with two cookies
// curl http://127.0.0.1:8080 --cookie "Cho=Kim;Greet=Hello"
