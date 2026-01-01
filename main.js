import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInAnonymously
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAd0w7e93rakEvDD3-5JCm8Bs5Uz5Ih69M",
  authDomain: "digitalfest-signuploginpage.firebaseapp.com",
  projectId: "digitalfest-signuploginpage",
  storageBucket: "digitalfest-signuploginpage.firebasestorage.app",
  messagingSenderId: "483761463159",
  appId: "1:483761463159:web:058984a6ca23e35a8b4b72",
  measurementId: "G-4GW7QBSM5D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const btnLoginTab = document.getElementById("btnLoginTab");
const btnSignupTab = document.getElementById("btnSignupTab");
const loginFormDiv = document.getElementById("loginForm");
const signupFormDiv = document.getElementById("signupForm");

btnLoginTab.addEventListener("click", () => {
  btnLoginTab.classList.add("active");
  btnSignupTab.classList.remove("active");
  loginFormDiv.classList.add("active");
  signupFormDiv.classList.remove("active");
});

btnSignupTab.addEventListener("click", () => {
  btnSignupTab.classList.add("active");
  btnLoginTab.classList.remove("active");
  signupFormDiv.classList.add("active");
  loginFormDiv.classList.remove("active");
});

function signup() {
  const firstName = document.getElementById("signupFirstName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirm = document.getElementById("signupConfirm").value;

  if (!firstName || !email || !password || !confirm) {
    alert("Please fill in all fields");
    return;
  }
  if (password !== confirm) {
    alert("Passwords do not match");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCred => {
      updateProfile(userCred.user, { displayName: firstName })
        .then(() => {
          alert("✅ Account created successfully!");
          window.location.href = "https://aditi-sensarma-dev.github.io/SC---DashBoard/";
        });
    })
    .catch(error => {
      alert("Error: " + error.message);
    });
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert("Please fill in all fields");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(userCred => {
      const name = userCred.user.displayName || "User";
      alert(`✅ Welcome back, ${name}!`);
      window.location.href = "https://aditi-sensarma-dev.github.io/SC---DashBoard/";
    })
    .catch(error => {
      alert("Error: " + error.message);
    });
}




window.signup = signup;
window.login = login;
