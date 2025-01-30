# **HNG12 Stage 0 Backend Task**

## ** API Description**

This is a **public API** for the **HNG12 backend task**. It returns:

- 📧 **Your registered email**
- 🕒 **Current date-time (UTC, ISO 8601 format)**
- 🔗 **GitHub URL of this project**

The API is built using **Node.js (Express.js)** and is designed to handle **CORS** properly.

---

## ** API Endpoint**

- **Base URL:**
  ```
  https://your-api-name.onrender.com/
  ```

### **GET `/`**

- **Response Format (`200 OK`)**:
  ```json
  {
    "email": "jane.eloundou@gmail.com",
    "current_datetime": "2025-01-30T09:30:00Z",
    "github_url": "https://github.com/jane-ahone/HNG-12-Stage-0"
  }
  ```

### **Possible Error Responses**

| Scenario             | Status Code                 | Response Example                                               |
| -------------------- | --------------------------- | -------------------------------------------------------------- |
| ❌ **Invalid Route** | `404 Not Found`             | `{ "error": "Endpoint not found" }`                            |
| ❌ **Server Error**  | `500 Internal Server Error` | `{ "error": "Something went wrong. Please try again later." }` |

---

## **🛠 Setup & Run Locally**

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/jane-ahone/HNG-12-Stage-0.git
cd HNG-12-Stage-0
```

### **2️⃣ Install Dependencies**

```bash
npm install
```

### **3️⃣ Run the Server**

```bash
node server.js
```

### **4️⃣ Test the API**

- Open in browser:
  ```
  http://localhost:3000/
  ```

---

## **🌍 Deployment**

This API is deployed on **Render** and publicly accessible at:

```
https://your-api-name.onrender.com/
```

---

## **🔗 Related Link**

- [Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

---
