Web Worker Prime Calculator

This is a small project to understand Web Workers in JavaScript.

The app finds a large prime number from the number entered by the user.

The main goal is to show how Web Workers keep the page responsive while heavy calculations run in the background.
How it works
User enters a number and clicks the button.
main.js sends the number to worker.js using postMessage().
worker.js calculates the prime number in the background.
Worker sends the result back.
Main thread shows the result on the page.
How to run

Open the project using VS Code Live Server and open index.html.
