import { displayOptions } from "./assets/utilities/dom.js";
import { emptyFieldsAlert } from "./assets/utilities/controlinput.js";
import { fetchData } from "./assets/utilities/apiResponse.js";

const initApp = () => {
    loadOptions();
}

// LÄSER IN COURSES ID
const options = document.querySelector('#courses');

// LÄSER IN FORM INPUT
const bookCourses = document.querySelector('#book-courses');


// LADDAR IN OPTIONS IFRÅN SERVERN
const loadOptions = async () => {
  const optionValues = await fetchData('courses');
  if (optionValues) {
    addOptions(optionValues);
  }
 };


// LÄGGER TILL OPTIONS MED DOM
const addOptions = (courses) => {
    options.innerHTML = '';
    options.insertAdjacentHTML('beforeend', displayOptions(courses));
};


// POSTAR DATA TILL SERVERN
const confirmBooking = async (e) => {
    e.preventDefault();
  
    const newcourse = new FormData(bookCourses); // HÄMTAR IN INPUT DATA
  
    const body = Object.fromEntries(newcourse); // OBJEKTIFERA INPUT DATA
  
    if (emptyFieldsAlert(body)) {
      alert('Please fill in all fields');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:3000/confirmedBookings', {
        method: 'POST',
        body: JSON.stringify(body),
      });
  
      if (response.ok) {
        alert('Booking confirmed!');
        bookCourses.reset();
      }

    } catch (error) {
      console.log(error);
    }
  };
  
  // LADDAR IN FORMULÄRET
  
bookCourses.addEventListener('submit', confirmBooking);


document.addEventListener('DOMContentLoaded', initApp);