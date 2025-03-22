//I worked on this assignment on my VS Code editor instead of Replit since I needed to install Node.js in my computer

import http from 'http';
http.createServer((request,response) => {
    let path = request.url.toLowerCase();    
    switch(path) {
        case '/':
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end('Hello, Welcome to my home page!');
            break;
        case '/about':
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end('My name is Kevin Sanchez Hernandez. I am a Payroll Analyst at Starbucks Coffee Company, and currently a student at Seattle Central College.');
            break;
        default:
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.end('Error: Invalid URL.');
            break;
    }    
}).listen(process.env.PORT || 3000);