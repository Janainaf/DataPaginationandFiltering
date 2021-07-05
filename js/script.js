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
function showPage(list, page) {
  var starIndex = page * 9 - 9;
  var endIndex = page * 9;
  var studentList = document.querySelector(".student-list").innerHTML;
  studentList.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    if (starIndex <= i && i < endIndex) {
      studentList += `<li class="student-item cf">
    <div class="student-details"><img class="avatar" src="${list[i].picture.medium}"alt="Profile Picture">
    <h3> ${list[i].name.first} </h3>
    <span class="email"> ${list[i].email} </span>
    </div><div class="joined-details">
    <span class="date"> ${list[i].registered.date}</span></div></li>`;
      document.querySelector(".student-list").innerHTML = studentList;
    }
  }
}

showPage(data, 5);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
  var pages = list;
  console.log(pages);
  var linkPages = document.querySelector(".link-list").innerHTML;
  linkPages.innerHTML = "";

  for (let i = 1; i <= pages.length / 9 + 1; i++) {
    linkPages += `<li> <button type="button"> ${i} </button></li>`;
    document.querySelector(".link-list").innerHTML = linkPages;
  }
}

// Call functions

addPagination(data);
