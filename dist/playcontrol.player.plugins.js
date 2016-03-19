"use strict";
/// <reference path="./index.ts" />
exports.path = require('path');
exports.pathParse = require("path-parse");
exports.beautylog = require("beautylog")("os");
exports.Q = require("q");
exports.av = require("av");
exports.avFlac = require("flac.js");
exports.avAlac = require("alac");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXljb250cm9sLnBsYXllci5wbHVnaW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxtQ0FBbUM7QUFDeEIsWUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2QixpQkFBUyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNsQyxpQkFBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QyxTQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLFVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkIsY0FBTSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QixjQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDIiwiZmlsZSI6InBsYXljb250cm9sLnBsYXllci5wbHVnaW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vaW5kZXgudHNcIiAvPlxuZXhwb3J0IGxldCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuZXhwb3J0IGxldCBwYXRoUGFyc2UgPSByZXF1aXJlKFwicGF0aC1wYXJzZVwiKTtcbmV4cG9ydCBsZXQgYmVhdXR5bG9nID0gcmVxdWlyZShcImJlYXV0eWxvZ1wiKShcIm9zXCIpO1xuZXhwb3J0IGxldCBRID0gcmVxdWlyZShcInFcIik7XG5leHBvcnQgbGV0IGF2ID0gcmVxdWlyZShcImF2XCIpO1xuZXhwb3J0IGxldCBhdkZsYWMgPSByZXF1aXJlKFwiZmxhYy5qc1wiKTtcbmV4cG9ydCBsZXQgYXZBbGFjID0gcmVxdWlyZShcImFsYWNcIik7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9