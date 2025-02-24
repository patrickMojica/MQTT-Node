Node.js Server for handling IoT data
server at http://localhost:3000 

To-Do:
- set up HTTPS ?


////

note to self:
"scripts": {
  "prod": "node server.js",  // For production (run just Express server)
  "dev": "concurrently \"npm run dev:server\" \"npm run dev:client\"",  // Run both dev server and webpack dev server
  "dev:server": "nodemon server.js",  // Run Express server with nodemon for dev
  "dev:client": "webpack serve --mode development",  // Run webpack dev server for React
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "node server.js"  // For production, run just Express server
}

  "type": "commonjs",
