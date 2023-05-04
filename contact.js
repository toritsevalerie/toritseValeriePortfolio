import app from "./firebaseConfig.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

/* 
STRETCH GOALS: 
1.Handle errors if users did not fill in all three fields correctly 
2. When user submits turn button into a thank you then after a few seconds bring normal submit button back
3. Send Email notification if i get a new message in the form 
 */

//Reference to the database
const database = getDatabase(app);

// Reference the location in the database
const contactRef = ref(database, "/contact-information");
console.log(contactRef);

// handleSubmit function
const formSubmit = (event) => {
  //prevent default
  event.preventDefault();
  // store input as variables
  const { name, email, message } = inputValue();

  // push to firebase
  push(contactRef, {
    name: name,
    email: email,
    message: message,
  });

  // clear input field on the page
  document.querySelector("#user-name").value = "";
  document.querySelector("#email-address").value = "";
  document.querySelector("#message").value = "";
};

// Function that gets the value of what is in input field
const inputValue = () => {
  const userName = document.querySelector("#user-name").value;
  const userEmail = document.querySelector("#email-address").value;
  const userMessage = document.querySelector("#message").value;

  return {
    name: userName,
    email: userEmail,
    message: userMessage,
  };
};

// Event listener on the form to listen for when the submit button is clicked
document.querySelector("form").addEventListener("submit", formSubmit);
