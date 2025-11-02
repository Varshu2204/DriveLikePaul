DriveLikePaul 🏎️
A full-stack web application built for supercar enthusiasts, inspired by the "Drive Like Paul" theme. This project features a secure backend API built with Node.js and Express, a MySQL database, and a dynamic frontend built with Vanilla JavaScript.

✨ Features
Secure User Authentication: Complete user signup and login system. Passwords are securely hashed using bcryptjs before being stored in the database.

RESTful Backend API: A Node.js/Express API that handles all user authentication, saves contact form messages, and serves car data.

Dynamic Frontend: A pure Vanilla JavaScript frontend that uses fetch to communicate with the backend, toggle auth pages, and perform client-side validation (like password strength) without a page reload.

MySQL Database Integration: The application is connected to a MySQL database (drivelikepaul) to persistently store user accounts and messages from the contact form.

Supercar Gallery: Displays a curated list of high-performance cars.

Functional Contact Form: A "Contact Us" form that saves user messages directly to the database via a dedicated API endpoint.

🛠️ Tech Stack
Backend
Runtime: Node.js

Framework: Express.js

Database: MySQL

Libraries:

mysql2 (MySQL database driver)

bcryptjs (For password hashing)

cors (For cross-origin resource sharing)

body-parser (For parsing request bodies)

Frontend
Languages: HTML5, CSS3, JavaScript (ES6+)

Key Features:

Vanilla JS DOM manipulation

fetch API for asynchronous requests

Client-side form validation

🚀 How It Works
This project is separated into a backend server and a frontend client.

1. Backend (Server-side)
The main entry point is server.js, which launches an Express server on http://localhost:5000.

database.js establishes the connection to the MySQL database.

The routes/ directory defines the API endpoints:

auth.js (/api/auth):

POST /signup: Creates a new user, hashes their password, and saves them to the users table.

POST /login: Checks a user's credentials, compares their password using bcrypt.compare, and returns a success message.

contact.js (/api/contact):

POST /: Receives a name, email, and message, and saves them to the messages table.

cars.js (/api/cars):

GET /: Returns a static JSON array of supercar data.

2. Frontend (Client-side)
index.html contains the full HTML structure for the login page, signup page, and the main application content (car gallery, contact form).

script.js handles all client-side logic:

Authentication: Captures submit events from the login and signup forms.

Validation: Checks if passwords match and meet security requirements (uppercase, number, special character).

API Calls: Uses fetch to send user data to the http://localhost:5000/api/auth/signup and /login endpoints.

Contact Form: Sends the contact form data to the http://localhost:5000/api/contact endpoint.

UI Toggling: Manages which "page" (div) is visible based on the user's auth state.
