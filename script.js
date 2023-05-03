import app from "./firebaseConfig.js";
import {
  getDatabase,
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

// reference to the database
const database = getDatabase(app);

// reference to the projects section of the database
const projectRef = ref(database, "/projects");

console.log(projectRef);

// geting our projects from the database and displaying our data onto the page
get(projectRef).then((snapshot) => {
  // storing our project data as a variable
  const projectData = snapshot.val();
  console.log(projectData);
  //loop through the array to render each array item on the page
  for (let id in projectData.projects) {
    //variable for each project object
    const individualProject = projectData.projects[id];
    console.log(individualProject);
    // append html to the page
    // <div class="project-one">
    //         <div class="text-container">
    //           <p class="project-title">Project 1: Pronia Project</p>
    //           <p class="project-heading">HTML | CSS | SASS | JAVASCRIPT</p>
    //           <p>description goes here</p>
    //           <div class="project-buttons">
    //             <button>View Live</button>
    //             <button>View Code</button>
    //           </div>
    //         </div>
    //         <img class ="arrow-icon" src="assets/arrow.png" alt="arrow button image">
    //         <div class="image-container">
    //           <img src="https://placebear.com/640/360" alt="" />
    //         </div>
    //       </div>

    const projectImage = individualProject.img;
    const projectImageAlt = individualProject.alt;
    const projectTitle = individualProject.title;
    const projectSubheading = individualProject.projectSubheading;
    const projectDescription = individualProject.description;
    const projectLink = individualProject.link;
    const projectGit = individualProject.git;
    const projectArrowImage = individualProject.arrowImg;
    const projectArrowImageAlt = individualProject.arrowAlt;
  }
});
