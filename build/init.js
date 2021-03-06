"use strict";

require("@babel/polyfill");

var _dotenv = _interopRequireDefault(require("dotenv"));

require("./db");

var _app = _interopRequireDefault(require("./app"));

require("./models/Video");

require("./models/Comment");

require("./models/User");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

//const PORT = process.env.PORT;
var PORT = process.env.PORT;

var handleListening = function handleListening() {
  return console.log("Listening on : http://localhost:".concat(PORT));
};

_app["default"].listen(PORT, handleListening);