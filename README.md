# 🎓 Cloud-Based Event Registration System

A modern web-based event registration system built using **HTML, CSS, JavaScript, and Firebase (Firestore)**. This project allows students to easily register for university events while securely storing their data in the cloud.

---

## 🚀 Features

* ✨ Beautiful glassmorphism UI with animated background
* 📝 Simple and user-friendly registration form
* 📊 Event selection (Tech Fest, Cultural Fest, Sports Meet)
* ☁️ Cloud-based data storage using Firebase Firestore
* 🔒 Secure and real-time data handling
* 📱 Responsive design

---

## 🛠️ Technologies Used

* **Frontend:** HTML, CSS, JavaScript
* **Backend/Database:** Firebase Firestore
* **Hosting (optional):** Render / Firebase Hosting

---

## 📂 Project Structure

```
📁 project-folder
│── index.html
│── style.css
│── script.js
│── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/event-registration.git
cd event-registration
```

---

### 2️⃣ Setup Firebase

1. Go to Firebase Console
2. Create a new project
3. Enable **Firestore Database**
4. Copy your Firebase config
5. Replace it inside `script.js`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};
```

---

### 3️⃣ Run the Project

Simply open `index.html` in your browser
OR use Live Server (VS Code recommended)

---

## 📸 Screenshots

* Registration Form UI
* Success Message after submission
* Firebase Firestore Data

*(Add screenshots here for better presentation)*

---

## 📌 How It Works

1. User fills the registration form
2. Clicks on **Register Now 🚀**
3. Data is sent to Firebase Firestore
4. Success message is displayed

---

## 🔐 Data Stored

* Full Name
* Email
* KU ID
* Enrollment Number
* Mobile Number
* Selected Event

---

## 🌐 Future Improvements

* 🔑 User authentication (Login/Signup)
* 📊 Admin dashboard to view registrations
* 📧 Email confirmation system
* 📅 More event categories

---

## 👩‍💻 Authors

**Dhanvi Virani**
**Diya Jain**

---

## ⭐ Show Your Support

If you like this project, please ⭐ the repository!

---
