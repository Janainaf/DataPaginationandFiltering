/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage() {
  var list = [];
  var page = 9;
  for (const student of data) {
    var studentImage = `<li class="student-item cf">
    <div class="student-details"><img class="avatar" src="${student.picture.medium}" alt="Profile Picture">`;
    var studentName = `<h3> ${student.name.first} </h3>`;
    var studentEmail = `<span class="email"> ${student.email} </span>`;
    list += studentImage + studentName + studentEmail + `</div></li>`;
  }
  document.querySelector(".student-list").innerHTML = list;
}
showPage();
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination() {}

// Call functions
