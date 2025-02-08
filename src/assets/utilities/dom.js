export const displayCoursesOverview = (courses) => {
    let html = '';

    courses.forEach((courses) => {
    html += `
    <div class="course-container">
    <img class="image-styling" src="../assets/images/${courses.imageUrl}"/>
    <h2>${courses.courseTitle}</h2>
    <p>Type: ${courses.educationType}</p>
    <p>Starting Date: ${courses.startingDate}</p>
    <p>Duration: ${courses.duration} days</p>
    <p>Cost: ${courses.educationCost} SEK</p>
    <p>Course Number: ${courses.courseNumber}</p>
    <a href="booking.html" class="save-btn" id="book-course">Book</a>
    </div>
    `;
    });

    return html;
};


export const displayOptions = (courses) => {
    let html = '';

    courses.forEach((course) => {
    html += `
    <option value="${course.courseNumber}">
    ${course.courseTitle} (${course.duration} days) - ${course.educationCost} SEK ${course.educationType}
    </option>
    `;
    });

    return html;
};



export const displayBookingOverview = (bookings) => {
    let html = '';

    bookings.forEach((booking) => {
        html += `
            <li class="booking-item">
                Booking Details
                <p>Name: ${booking.fullName}</p>
                <p>Email: ${booking.email}</p>
                <p>Phone: ${booking.phoneNumber}</p>
                <p>Address: ${booking.billingAdress}</p>
                <p>Course: ${booking.course} </p>
            </li>
        `;
    });

    return html;
};


export const displayAccountOverview = (accounts) => {
    let html = '';
 
    accounts.forEach((account) => {
        html += `
            <li class="account-item">
              Account Details
             <p>Email: ${account.email}</p> 
             <p>Password: ${account.psw} (will be hidden)</p>
             <p>Id: ${account.id}</p>

            </li>
        `;
    });
 
    return html;
 };





