// Updates to Project JSON

import app from "./firebaseConfig.js"; //importing the firebaseConfig details in the app for use
import {
  update,
  getDatabase,
  ref,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

const database = getDatabase(app); // reference our database
const projectRef = ref(database, "/projects");

// setting variable to a function to update our database

const projectUpdates = () => {
  const updates = {};
  const projectIndex = "0";

  updates[`/${projectIndex}/title`] = "The Film Factory";
  updates[`/${projectIndex}/subheading`] = "React | CSS | JSX";
  updates[`/${projectIndex}/description`] =
    "A React app made with other developers that allows users to discover foreign movies, users can search using their preferred movies as references and save their searches along with favorite movies for future reference";

  update(projectRef, updates)
    .then(() => {
      console.log("sucess");
    })
    .catch((error) => {
      console.log("error", error);
    });
};

projectUpdates();
