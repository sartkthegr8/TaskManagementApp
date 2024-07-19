Overview
This is a task management application with user authentication. Users can sign up, log in, manage tasks, and access their dashboard. The application uses MongoDB for data storage and JWT for user authentication.

Features
User Sign Up
User Login
Task Management (Add, Update, Delete)
Dashboard View
User Authentication using JWT

Technologies Used
Frontend: React, React Router
Backend: Node.js, Express
Database: MongoDB
Authentication: JWT, bcrypt
State Management: Redux (if applicable)

Installation
Prerequisites
Node.js
MongoDB
npm

Usage
Authentication
Sign Up: Users can register by providing a name, email, and password.
Login: Users can log in using their email and password. A JWT token is returned upon successful login.

Task Management
Dashboard: After logging in, users are redirected to their dashboard where they can manage tasks.
Add Task: Users can create new tasks with a title, description, due date, and status.
Update Task: Users can update existing tasks.
Delete Task: Users can remove tasks from their list.

Routes
POST /signup: Register a new user
POST /login: Log in and receive a JWT token
GET /me: Fetch user information (protected route)
