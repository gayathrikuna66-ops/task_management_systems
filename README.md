## Task Management System with User Authentication

### Project Statement

Develop a **Task Management System** using **Node.js, Express.js, MongoDB, Mongoose, and JWT Authentication** that allows users to securely manage their personal tasks.

The system should provide user registration and login functionality. After successful authentication, users should be able to create, view, update, and delete their own tasks. Each task should contain details such as task title, description, status, priority, and due date.

The application must ensure that only authenticated users can access task-related operations and that users can manage only their own tasks. JWT-based authentication should be implemented to secure the APIs and protect user data.

### Objectives

* Implement user registration and login functionality.
* Secure APIs using JWT authentication.
* Create and manage task records in MongoDB.
* Allow users to perform CRUD operations on tasks.
* Restrict access so users can view and modify only their own tasks.
* Apply Express middleware for authentication and request handling.
* Test all APIs using Thunder Client or Postman.

### Functional Requirements

#### User Module

* Register a new user.
* Login with email and password.
* Generate JWT token after successful login.

#### Task Module

* Create a new task.
* View all tasks created by the logged-in user.
* View a specific task.
* Update task details.
* Delete a task.
* Mark a task as completed or pending.

### Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* Thunder Client/Postman

### Expected Outcome

The project should provide a secure REST API where authenticated users can efficiently manage their tasks while ensuring data privacy and access control through JWT-based authentication and authorization.
