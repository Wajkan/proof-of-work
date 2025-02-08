import { emptyFieldsAlert } from "./assets/utilities/controlinput.js";

const loginForm = document.querySelector('#loginForm');

const confirmAccount = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(loginForm);
    const body = Object.fromEntries(formData);
  
    if (emptyFieldsAlert(body)) {
      alert('Please fill in all fields');
      return; 
    }
  
    try {
      const response = await fetch('http://localhost:3000/createdAccounts', {
        method: 'POST',
        body: JSON.stringify(body),
      });
  
      if (response.ok) {
        alert('Your account have been created!');
        loginForm.reset();
      }
    } catch (error) {
      console.log(error);
    }
};

loginForm.addEventListener('submit', confirmAccount);