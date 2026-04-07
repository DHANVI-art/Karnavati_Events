<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSy...",
    authDomain: "event-registration-2344e.firebaseapp.com",
    projectId: "event-registration-2344e",
    storageBucket: "event-registration-2344e.firebasestorage.app",
    messagingSenderId: "545732797546",
    appId: "1:545732797546:web:066c2c991cda2b7fa4d613"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // FORM SUBMIT
  document.getElementById("registrationForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const event = document.getElementById("event").value;

    try {
      await addDoc(collection(db, "registrations"), {
        name: name,
        email: email,
        event: event,
        createdAt: new Date()
      });

      alert("Registration Successful!");
    } catch (error) {
      console.error(error);
    }
  });
</script>
