const firebaseConfig = {
    apiKey: "AIzaSyCHAmaEwzSYnYZe_jvg7Hbcodx2Z_OxDRw",
    authDomain: "fir-project-2c7b6.firebaseapp.com",
    projectId: "fir-project-2c7b6",
    storageBucket: "fir-project-2c7b6.firebasestorage.app",
    messagingSenderId: "323052221558",
    appId: "1:323052221558:web:6d85cf529060cf76ea5b57",
    measurementId: "G-YYVGE3FYRF"
  };
 

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  // Sign Up Function
  const signupForm = document.getElementById('signupForm');
  
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Create user with Firebase Authentication
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed up successfully: ", user);
        
        // Redirect to another page or show success message
        alert('Sign up successful! Redirecting...');
        window.location.href = 'login.html'; // Or your desired redirect page
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing up: ", errorCode, errorMessage);
        alert("Error: " + errorMessage);
      });
  });