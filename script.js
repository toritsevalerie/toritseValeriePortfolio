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

// geting our projects from the database and displaying our data onto the page
get(projectRef).then((snapshot) => {
  // storing our project data as a variable
  const projectData = snapshot.val();
  
  //loop through the array to render each array item on the page
  for (let id in projectData) {
    //variable for each project object
    const individualProject = projectData[id];
    
    

    // append html to the page

    //HTML STRUCTURE REF
    /* 
            <div class="text-container">
              <p class="project-title">Project 1: Pronia Project</p>
              <p class="project-heading">HTML | CSS | SASS | JAVASCRIPT</p>
              <p>description goes here</p>
              <div class="project-buttons">
                <button>View Live</button>
                <button>View Code</button>
              </div>
            </div>
            <img class ="arrow-icon" src="assets/arrow.png" alt="arrow button image">
            <div class="image-container">
              <img src="https://placebear.com/640/360" alt="" />
            </div>
    */

    // Storing json data/object items in variables
    const projectImage = individualProject.img;
    const projectImageAlt = individualProject.alt;
    const projectTitle = individualProject.title;
    const projectSubheading = individualProject.subheading;
    const projectDescription = individualProject.description;
    const projectLink = individualProject.link;
    const projectGit = individualProject.git;
    const projectArrowImage = individualProject.arrowImg;
    const projectArrowImageAlt = individualProject.arrowAlt;
    const key = individualProject.id;
    const arrowKey = individualProject.arrowId;

    //Creating P elements & adding classes
    const paraItemOne = document.createElement("p");
    paraItemOne.className = "project-title";
    const paraItemTwo = document.createElement("p");
    paraItemTwo.className = "project-heading";
    const paraItemThree = document.createElement("p");

    //Creating BUTTONS
    const liveButton = document.createElement("button");
    const codeButton = document.createElement("button");
    console.log(liveButton);

    //Creating <a> elements for the buttons
    const liveLink = document.createElement('a')
    liveLink.href = projectLink
    const gitCode = document.createElement("a");
    gitCode.href = projectGit;
    

    // Creating a IMG element to hold arrow image & project image
    const arrow = document.createElement("img");
    arrow.className = 'arrow-icon';
    const imgItem = document.createElement("img");

    // Creating a DIV element and adding class name to the div
    const divProjectItem = document.createElement("div");
    divProjectItem.className = key;

    const divItemOne = document.createElement("div");
    divItemOne.className = "text-container";
    const divItemTwo = document.createElement("div");
    divItemTwo.className = "image-container";
    const divItemThree = document.createElement("div");
    divItemThree.className = "project-buttons";

    //Assigning values to the elements

    //P Elements
    paraItemOne.innerHTML = projectTitle;

    paraItemTwo.innerHTML = projectSubheading;
    paraItemThree.innerHTML = projectDescription;
    //a elements 
    liveLink.innerHTML = "View Live";
    liveLink.target = "_blank";

    gitCode.innerHTML = "View Code";
    gitCode.target="_blank";
    // IMG elements
    arrow.src = projectArrowImage;
    arrow.alt = projectArrowImageAlt;
    imgItem.src = projectImage;
    imgItem.alt = projectImageAlt;

    //Appending a elements to the buttons 
    liveButton.append(liveLink);
    codeButton.append(gitCode);
    

    // Appending the project buttons to the div (divItemThree)
    divItemThree.append(liveButton, codeButton);

    // Appending the the main project image to a div (divItemTwo)
    divItemTwo.append(imgItem);

    // Appending the title, subheading, divItemThree and description (p) to a div (divItemOne)
    divItemOne.append(paraItemOne, paraItemTwo, paraItemThree, divItemThree);

    //Appending the divs and arrow to the project item
    divProjectItem.append(divItemOne, arrow, divItemTwo);

    // Append to the project-one div that already exists on the page

    document.querySelector("#projects .wrapper").append(divProjectItem);
    
  }
});

/* 
STRETCH GOALS: 
1. re design the projects section 
2.redesign form and footer section 
3. on scroll turn menu into hamburger menu 
4. create a more indepth about section  
 */