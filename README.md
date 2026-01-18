# Task Management API

A **secure, role-based Task Management REST API** built using **Node.js, Express, MongoDB, and JWT authentication**.
This project was developed as part of an **internship assignment**, following clean architecture and industry best practices.

---

## Features

### Authentication & Authorization

* User registration & login
* JWT-based authentication
* Access token + refresh token mechanism
* Role-based authorization (`user`, `admin`)

### Task Management

* Create tasks (authenticated users)
* View own tasks
* Update tasks with permission rules:
  * Creator/Admin → full update
  * Assignee → status only
* Delete tasks (Creator/Admin only)

### Admin Capabilities

* Get all users
* Update user roles
* Delete users

### Statistics APIs

* User statistics (own tasks)
* Admin statistics (users & tasks overview)

### Architecture

* Controller → Service → Validator pattern
* Clean separation of concerns
* Middleware-based security

---

## Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **JWT (jsonwebtoken)**
* **bcrypt**
* **dotenv**
* **Postman** (for testing)

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/taskdb
JWT_SECRET=your_access_token_secret
JWT_REFRESH_SECRET=your_refresh_token_secret
```

---

## How to Run the Project

### Install dependencies

```bash
npm install
```

### Start MongoDB

Make sure MongoDB is running locally on port `27017`.

### Start the server

```bash
npm run dev
```

Expected output:

```
MongoDB connected
Server running on port 5000
```

---

## API Testing (Postman)

### Base URL

```
http://localhost:5000/api/v1
```

---

### Auth APIs

#### Register

```
POST /auth/register
```

#### Login

```
POST /auth/login
```

#### Refresh Token

```
POST /auth/refresh
```

---

### Task APIs (Authenticated)

| Method | Endpoint   | Description   |
| ------ | ---------- | ------------- |
| POST   | /tasks     | Create task   |
| GET    | /tasks     | Get own tasks |
| PUT    | /tasks/:id | Update task   |
| DELETE | /tasks/:id | Delete task   |

---

### Admin APIs

| Method | Endpoint        | Description      |
| ------ | --------------- | ---------------- |
| GET    | /users          | Get all users    |
| PUT    | /users/:id/role | Update user role |
| DELETE | /users/:id      | Delete user      |

---

### Statistics APIs

| Role  | Endpoint         |
| ----- | ---------------- |
| User  | GET /stats/user  |
| Admin | GET /stats/admin |

---

## Conclusion

This project demonstrates a **production-style backend API** with secure authentication, role-based access control, and clean architecture principles.
It fulfills all requirements specified in the internship assignment.

---

## Author

**Tafnaz Ayub**
Software Development Trainee
