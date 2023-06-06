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
  const projectIndexOne = "0";
  const projectIndexTwo = "1";

  updates[`/${projectIndexOne}/title`] = "The Film Factory";
  updates[`/${projectIndexOne}/subheading`] = "React | CSS | JSX";
  updates[`/${projectIndexOne}/description`] =
    "A React app made with other developers that allows users to discover foreign movies, users can search using their preferred movies as references and save their searches along with favorite movies for future reference";
  updates[`/${projectIndexOne}/git`] =
    "https://github.com/francella-toritse-wilson/the-film-factory";
  updates[`/${projectIndexOne}/link`] = "https://ftw-project-four.netlify.app/";
  updates[`/${projectIndexOne}/img`] = "assets/filmFactoryImg.png";
  updates[`/${projectIndexOne}/alt`] = "an image showing a screenshot of the film facotry app as an image preview";


  updates[`/${projectIndexTwo}/description`] =
    "An e-commerce plant website created using HTML, CSS, SASS & JAVASCRIPT.";
    updates[`/${projectIndexTwo}/img`] = "assets/proniaImg.png";
    updates[`/${projectIndexTwo}/alt`] ="image mockup on desktop laptop with app preview as a display"
      "an image showing a screenshot of the film facotry app as an image preview";

  update(projectRef, updates)
    .then(() => {
      console.log("sucess");
    })
    .catch((error) => {
      console.log("error", error);
    });
};

projectUpdates();
