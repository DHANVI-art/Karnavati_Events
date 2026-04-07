import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

// Your Firebase config (same as you pasted in HTML)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form submit
document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const kuId = document.querySelector("#kuId").value;
  const enrollmentNo = document.querySelector("#enrollmentNo").value;
  const mobileNo = document.querySelector("#mobileNo").value;

  try {
    await addDoc(collection(db, "registrations"), {
      name: name,
      email: email,
      kuId: kuId,
      enrollmentNo: enrollmentNo,
      mobileNo: mobileNo
    });

    alert("Registration Successful 🎉");
    document.querySelector("form").reset();

  } catch (error) {
    console.error(error);
    alert("Error saving data ❌");
  }
});
