import { displayBookingOverview, displayAccountOverview } from "./assets/utilities/dom.js";
import { emptyFieldsAlert } from "./assets/utilities/controlinput.js";
import { fetchData } from "./assets/utilities/apiResponse.js";


// INITIERA APPEN SAMT LADDA IN VISNING UTAV DATA
const initApp = () => {
  loadBookings();
  loadAccounts();
}


// HÄMTA MED ID´s FÖR DOM MANIPULERING

const adminform = document.querySelector('#add-courses');

const bookingDisplay = document.querySelector('#confirmedBookings');

const accountDisplay = document.querySelector('#createdAccounts');


// HÄMTAR IN DATA IFRÅN SERVERN SAMT VISAR KURSERNA
const loadBookings = async () => {
  const courses = await fetchData('confirmedBookings');
  if (courses) {
    displayBookings(courses);
  }
 };


// HÄMTAR IN DATA IFRÅN SERVERN SAMT VISAR KONTON
const loadAccounts = async () => {
  const accounts = await fetchData('createdAccounts'); 
  if (accounts) {
    displayAccounts(accounts);
  }
 };


// INITIERA OCH LÄGG IN DOM DATA 
const displayBookings = (courses) => {
  bookingDisplay.innerHTML = '';
  bookingDisplay.insertAdjacentHTML('beforeend', displayBookingOverview(courses));
};


const displayAccounts = (accounts) => {
  accountDisplay.innerHTML = '';
  accountDisplay.insertAdjacentHTML('beforeend', displayAccountOverview(accounts));
};


// // POSTAR DATA TILL SERVERN FÖR ATT LÄGGA TILL COURSES
const confirmNewCourse = async (e) => {
  e.preventDefault();

  const newcourse = new FormData(adminform); // HÄMTAR IN INPUT DATA

  const body = Object.fromEntries(newcourse); // OBJEKTIFERA INPUT DATA

  if (emptyFieldsAlert(body)) {
    alert('Please fill in all fields');
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/courses', {
      method: 'POST',
      body: JSON.stringify(body),
    });

    if (response.ok) {
      alert('Course added successfully!');
      adminform.reset();
    }
  } catch (error) {
    console.log(error);
  }
};


// LADDAR IN FORMULÄRET

adminform.addEventListener('submit', confirmNewCourse);

// LADDAR IN DOM

document.addEventListener('DOMContentLoaded', initApp);
