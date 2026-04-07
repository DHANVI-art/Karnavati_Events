import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBG1ClnAY4jRjXkA7Dz1-2907X0UtCIbF8",
  authDomain: "event-registration-2344e.firebaseapp.com",
  projectId: "event-registration-2344e",
  storageBucket: "event-registration-2344e.firebasestorage.app",
  messagingSenderId: "545732797546",
  appId: "1:545732797546:web:06c62c991cda2b7fa4d613"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("registrationForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const kuId = document.getElementById("kuId").value;
  const enrollmentNo = document.getElementById("enrollmentNo").value;
  const mobileNo = document.getElementById("mobileNo").value;
  const event = document.getElementById("event").value;

  try {
    await addDoc(collection(db, "registrations"), {
      name,
      email,
      kuId,
      enrollmentNo,
      mobileNo,
      event
    });

    document.getElementById("message").innerText = "✅ Registration Successful!";
    form.reset();

  } catch (error) {
    console.error(error);
    document.getElementById("message").innerText = "❌ Error saving data";
  }
});
