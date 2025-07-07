--Entry Gate Log System

A Node.js-based backend project to manage and track student entry/exit activity in a hostel or campus environment. It ensures secure access control, automatic defaulter detection, and clean daily data management.


-- Features

- 🔐 Student Registration with Password Encryption
- ✅ Entry/Exit Logging for Hosteler and Day Scholar
- 🧠 Middleware for Authentication and Verification
- ⏰ Time-Based Checks for Defaulters (After 9:30 PM)
- 🗑️ Automatic Daily Record Cleanup at Midnight
- 📊 MongoDB Integration for Data Storage

---

--Tech Stack

| Technology     | Usage                          |
|----------------|--------------------------------|
| Node.js        | Backend runtime environment    |
| Express.js     | Web framework for Node.js      |
| MongoDB        | NoSQL database                 |
| Mongoose       | MongoDB object modeling        |
| bcryptjs       | Password hashing               |
| dotenv         | Environment variable management |
| node-cron      | Scheduled tasks (midnight cleanup) |

---

## 📁 Folder Structure

