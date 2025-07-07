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

entry-gate-log-system/
│
├── src/
│   ├── components/
│   │   ├── hostlers/         # Logic for hostler entry/exit
│   │   ├── dayscholars/      # Logic for day scholar entry/exit
│   │   ├── register/         # Student/staff registration
│   │   └── staff/            # Staff-related operations
│   │
│   ├── middleware/           # Custom auth/middleware logic
│   ├── models/               # Mongoose schemas for DB (User, DailyRecord, Defaulters)
│   ├── utils/                # Helper functions (e.g., time checks)
│   └── cron/                 # Cron jobs (e.g., midnight cleanup)
│
├── .env                      # Environment variables
├── package.json              # Project dependencies and scripts
├── server.js                 # Entry point to run the Express app
└── README.md                 # Project documentation (you’re here!)










