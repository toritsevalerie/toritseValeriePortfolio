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

const newUpdates = () => {
  const updates = {};
  const projectIndexTwo = "1";
  const projectIndexThree = "2";

  updates[`/${projectIndexTwo}/title`] = "Skinned by Nature";
  updates[`/${projectIndexTwo}/id`] = "project-two";
  updates[`/${projectIndexTwo}/img`] = "assets/soonCome.png";
  updates[`/${projectIndexTwo}/alt`] =
    "skinned by nature project preview image";
  updates[`/${projectIndexTwo}/subheading`] =
    "HTML | CSS | Javascript | FIREBASE";
  updates[`/${projectIndexTwo}/description`] =
    "A personalized skincare app that allows users to discover, customize, and order skincare products based on their indidviual preferences. Enjoy a seamless checkout process and a visually appealing interface for an exceptional user experience, try it out!";
  updates[`/${projectIndexTwo}/git`] = "";
  updates[`/${projectIndexTwo}/link`] = "";

  updates[`/${projectIndexThree}/title`] = "OneKard";
  updates[`/${projectIndexThree}/id`] = "project-three";
  updates[`/${projectIndexThree}/img`] = "assets/comingSoon.png";
  updates[`/${projectIndexThree}/alt`] = "One Kard project preview image";
  ("skinned by nature project preview image");
  updates[`/${projectIndexThree}/subheading`] = "React | JSX | CSS   ";
  updates[`/${projectIndexThree}/description`] =
    "A fintech banking app that enables seamless money transfers within Africa and across continents. Experience personalized banking at your fingertips, with easy transfers and a user-friendly interface,try it out!";
  updates[`/${projectIndexThree}/git`] = "";
  updates[`/${projectIndexThree}/link`] = "";

  update(projectRef, updates)
    .then(() => {
      console.log("sucess");
    })
    .catch((error) => {
      console.log("error", error);
    });
};

newUpdates();

const projectThree = () => {
  const updates = {};
  const projectIndexOne = "0";

  updates[`/${projectIndexOne}/title`] = "Music Scape";
  updates[`/${projectIndexOne}/id`] = "project-one";
  updates[`/${projectIndexOne}/img`] = "assets/musicScapeimg.png";
  updates[`/${projectIndexOne}/subheading`] = "React | CSS | JSX | Firebase";
  updates[`/${projectIndexOne}/description`] =
    "A React app that allows users to discover, explore, and engage with various music events, incorporates user authentication and gives users a unique experience, try it out!";
  updates[`/${projectIndexOne}/git`] =
    "https://github.com/toritsevalerie/Music-Scape-App";
  updates[`/${projectIndexOne}/link`] =
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
  const projectIndexFour = "3";
  const projectIndexFive = "4";

  updates[`/${projectIndexFour}/title`] = "The Film Factory";
  updates[`/${projectIndexFour}/subheading`] = "React | CSS | JSX | Firebase";
  updates[`/${projectIndexFour}/description`] =
    "A React app made with other developers that allows users to discover foreign movies, users can search using their preferred movies as references and save their searches along with favorite movies for future reference";
  updates[`/${projectIndexFour}/git`] =
    "https://github.com/francella-toritse-wilson/the-film-factory";
  updates[`/${projectIndexFour}/link`] =
    "https://ftw-project-four.netlify.app/";
  updates[`/${projectIndexFour}/img`] = "assets/filmFactoryImg.png";
  updates[`/${projectIndexFour}/id`] = "project-four";
  updates[`/${projectIndexFour}/alt`] =
    "an image showing a screenshot of the film facotry app as an image preview";

  updates[`/${projectIndexFive}/git`] =
    "https://github.com/Project-2-Group-Work/toritse-mohammed-pronia-project-2";
  updates[`/${projectIndexFive}/link`] =
    "https://neon-medovik-43961c.netlify.app/";
  updates[`/${projectIndexFive}/title`] = "Pronia Project";
  updates[`/${projectIndexFive}/id`] = "project-five";
  updates[`/${projectIndexFive}/subheading`] =
    "HTML | CSS | JavaScript | Firebase";
  updates[`/${projectIndexFive}/description`] =
    "An e-commerce plant website created using HTML, CSS, SASS & JAVASCRIPT.";
  updates[`/${projectIndexFive}/img`] = "assets/proniaImg.png";
  updates[`/${projectIndexFive}/alt`] =
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
