// Updates to Project JSON

import app from "./firebaseConfig.js"; //importing the firebaseConfig details in the app for use
import {
  update,
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

const database = getDatabase(app); // reference our database
const projectRef = ref(database, "/projects");

// setting variable to a function to update our database

const projectThree = () => {
  const updates = {};
  const projectIndexThree = "0";

  updates[`/${projectIndexThree}/title`] = "Music Scape";
  updates[`/${projectIndexThree}/id`] = "project-three";
  updates[`/${projectIndexThree}/img`] = "assets/musicScapeimg.png";
  updates[`/${projectIndexThree}/subheading`] = "React | CSS | JSX";
  updates[`/${projectIndexThree}/description`] =
    "A React app that allows users to discover, explore, and engage with various music events, incorporates user authentication and gives users a unique experience, try it out!";
    updates[`/${projectIndexThree}/git`] =
      "https://github.com/toritsevalerie/Music-Scape-App";
    updates[`/${projectIndexThree}/link`] =
      "https://music-scape-app-main.netlify.app/";

  update(projectRef, updates)
    .then(() => {
      console.log("sucess");
    })
    .catch((error) => {
      console.log("error", error);
    });
};
projectThree();

const projectUpdates = () => {
  const updates = {};
  const projectIndexOne = "1";
  const projectIndexThree = "2";

  updates[`/${projectIndexOne}/title`] = "The Film Factory";
  updates[`/${projectIndexOne}/subheading`] = "React | CSS | JSX";
  updates[`/${projectIndexOne}/description`] =
    "A React app made with other developers that allows users to discover foreign movies, users can search using their preferred movies as references and save their searches along with favorite movies for future reference";
  updates[`/${projectIndexOne}/git`] =
    "https://github.com/francella-toritse-wilson/the-film-factory";
  updates[`/${projectIndexOne}/link`] = "https://ftw-project-four.netlify.app/";
  updates[`/${projectIndexOne}/img`] = "assets/filmFactoryImg.png";
  updates[`/${projectIndexOne}/alt`] =
    "an image showing a screenshot of the film facotry app as an image preview";

  updates[`/${projectIndexThree}/git`] =
    "https://github.com/Project-2-Group-Work/toritse-mohammed-pronia-project-2";
  updates[`/${projectIndexThree}/link`] =
    "https://neon-medovik-43961c.netlify.app/";
  updates[`/${projectIndexThree}/title`] = "Pronia Project";
  updates[`/${projectIndexThree}/subheading`] = "HTML| CSS | JAVASCRIPT";
  updates[`/${projectIndexThree}/description`] =
    "An e-commerce plant website created using HTML, CSS, SASS & JAVASCRIPT.";
  updates[`/${projectIndexThree}/img`] = "assets/proniaImg.png";
  updates[`/${projectIndexThree}/alt`] =
    "image mockup on desktop laptop with app preview as a display";
  ("an image showing a screenshot of the film facotry app as an image preview");

  update(projectRef, updates)
    .then(() => {
      console.log("sucess");
    })
    .catch((error) => {
      console.log("error", error);
    });
};

projectUpdates();
