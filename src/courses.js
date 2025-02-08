import { displayCoursesOverview } from "./assets/utilities/dom.js";
import { fetchData } from "./assets/utilities/apiResponse.js";

// HÄMTA MED ID´s FÖR DOM MANIPULERING 
const display = document.querySelector('#courses-container');


// INITIERA APPEN SAMT LADDA DOM
const initApp = () => {
    loadCourses();
}

// HÄMTA IN FETCHDATA SAMT VISA KURSERNA
const loadCourses = async () => {
    const courses = await fetchData('courses');
    if (courses) {
      displayCourses(courses);
    }
   };

// VISAR KURSERNA
const displayCourses = (courses) => {
    display.innerHTML = '';
    display.insertAdjacentHTML('beforeend', displayCoursesOverview(courses));
};



// LADDAR IN DOM
document.addEventListener('DOMContentLoaded', initApp);
