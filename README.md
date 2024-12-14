# API Documentation

This document provides detailed information about the APIs implemented in this project. The APIs include user authentication, token management, and CRUD operations for to-do items. All responses are in JSON format.

## Base URL
`http://localhost:<PORT>`

---

## Authentication APIs

### **1. User Sign-Up**
**Endpoint:** `/auth/sign-up`

**Method:** POST

**Description:** Registers a new user.

**Payload:**
```json
{
  "username": "string",
  "password": "string"
}
```

**Response:**
- **201 Created**
  ```json
  {
    "message": "User registered successfully",
    "userId": "string"
  }
  ```
- **400 Bad Request**
  ```json
  {
    "error": "Missing fields"
  }
  ```
- **500 Internal Server Error**
  ```json
  {
    "error": "Error creating user"
  }
  ```

---

### **2. User Sign-In**
**Endpoint:** `/auth/sign-in`

**Method:** POST

**Description:** Logs in an existing user and returns a JWT token.

**Payload:**
```json
{
  "username": "string",
  "password": "string"
}
```

**Response:**
- **200 OK**
  ```json
  {
    "message": "Login successful"
  }
  ```
  Cookies:
  - `token`: JWT access token (expires in 5 minutes).
  - `refreshToken`: Refresh token (expires in 7 days).

- **401 Unauthorized**
  ```json
  {
    "error": "Invalid credentials"
  }
  ```

- **500 Internal Server Error**
  ```json
  {
    "error": "Error logging in"
  }
  ```

---

### **3. Refresh Token**
**Endpoint:** `/auth/refresh`

**Method:** POST

**Description:** Generates a new access token using the refresh token.

**Response:**
- **200 OK**
  ```json
  {
    "message": "Token refreshed"
  }
  ```
  Cookies:
  - `token`: New JWT access token (expires in 5 minutes).

- **401 Unauthorized**
  ```json
  {
    "error": "Missing refresh token"
  }
  ```

- **403 Forbidden**
  ```json
  {
    "error": "Invalid refresh token"
  }
  ```

---

## To-Do APIs

### **1. Add To-Do**
**Endpoint:** `/todos`

**Method:** POST

**Description:** Adds a new to-do item for the authenticated user. Limited to 10 items every 15 minutes.

**Headers:**
```json
{
  "Authorization": "Bearer <JWT_TOKEN>"
}
```

**Payload:**
```json
{
  "title": "string"
}
```

**Response:**
- **201 Created**
  ```json
  {
    "_id": "string",
    "userId": "string",
    "title": "string",
    "completed": false
  }
  ```

- **400 Bad Request**
  ```json
  {
    "error": "Title is required"
  }
  ```

- **429 Too Many Requests**
  ```json
  {
    "error": "Too many to-do items added. Please wait 3 minutes before trying again."
  }
  ```

- **500 Internal Server Error**
  ```json
  {
    "error": "Failed to create to-do"
  }
  ```

---

### **2. Get All To-Dos**
**Endpoint:** `/todos`

**Method:** GET

**Description:** Retrieves all to-do items for the authenticated user.

**Headers:**
```json
{
  "Authorization": "Bearer <JWT_TOKEN>"
}
```

**Response:**
- **200 OK**
  ```json
  [
    {
      "_id": "string",
      "userId": "string",
      "title": "string",
      "completed": false
    }
  ]
  ```

- **500 Internal Server Error**
  ```json
  {
    "error": "Failed to fetch to-dos"
  }
  ```

---

### **3. Update To-Do**
**Endpoint:** `/todos/:id`

**Method:** PUT

**Description:** Updates an existing to-do item for the authenticated user.

**Headers:**
```json
{
  "Authorization": "Bearer <JWT_TOKEN>"
}
```

**Payload:**
```json
{
  "title": "string",
  "completed": true
}
```

**Response:**
- **200 OK**
  ```json
  {
    "_id": "string",
    "userId": "string",
    "title": "string",
    "completed": true
  }
  ```

- **404 Not Found**
  ```json
  {
    "error": "To-do not found"
  }
  ```

- **500 Internal Server Error**
  ```json
  {
    "error": "Failed to update to-do"
  }
  ```

---

### **4. Delete To-Do**
**Endpoint:** `/todos/:id`

**Method:** DELETE

**Description:** Deletes a specific to-do item for the authenticated user.

**Headers:**
```json
{
  "Authorization": "Bearer <JWT_TOKEN>"
}
```

**Response:**
- **200 OK**
  ```json
  {
    "message": "To-do deleted successfully"
  }
  ```

- **404 Not Found**
  ```json
  {
    "error": "To-do not found"
  }
  ```

- **500 Internal Server Error**
  ```json
  {
    "error": "Failed to delete to-do"
  }
  ```

---

## Error Codes
| Status Code | Description                          |
| ----------- | ------------------------------------ |
| 200         | Request successful                   |
| 201         | Resource created successfully        |
| 400         | Bad request (missing fields)         |
| 401         | Unauthorized (missing/invalid token) |
| 403         | Forbidden (invalid refresh token)    |
| 404         | Resource not found                   |
| 429         | Too many requests (rate limit)       |
| 500         | Internal server error                |

---

## CORS Configuration
This API accepts requests only from the following origins:
- `http://localhost:2395`
- `http://localhost:8275`
- `http://localhost:6290`

Ensure that the frontend application is hosted on one of these origins.

