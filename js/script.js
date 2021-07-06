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
  studentList = "";

  for (let i = 0; i < list.length; i++) {
    if (starIndex <= i && i < endIndex) {
      studentList += `<li class="student-item cf">
    <div class="student-details"><img class="avatar" src="${list[i].picture.medium}"alt="Profile Picture">
    <h3> ${list[i].name.first} </h3>
    <span class="email"> ${list[i].email} </span>
    </div><div class="joined-details">
    <span class="date"> Joined: ${list[i].registered.date}</span></div></li>`;
      document.querySelector(".student-list").innerHTML = studentList;
    }
  }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
  var pages = list.length / 9 + 1;
  var linkPages = document.querySelector(".link-list").innerHTML;

  for (let i = 1; i <= pages; i++) {
    if (i === 1) {
      linkPages += `<li> <button type="button" class="active" > ${i} </button></li>`;
      document.querySelector(".link-list").innerHTML = linkPages;
    } else {
      linkPages += `<li> <button type="button"> ${i} </button></li>`;
      document.querySelector(".link-list").innerHTML = linkPages;
    }
  }

  var btns = document.querySelectorAll("button");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace("active", "");
      this.className += "active";
    });
  }

  document.querySelector(".link-list").addEventListener("click", (e) => {
    e.preventDefault();
    showPage(list, document.querySelector(".active").textContent);
  });
}

// Call functions
showPage(data, 1);
addPagination(data);
search();

/*
Create the `Search` Component
This component will enable to search for students names
*/
function search() {
  var str =
    '<label for="search" class="student-search"><span>Search by name</span> <input id="search" placeholder="Search by name..."> <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button></label>';
  document.querySelector(".header").insertAdjacentHTML("beforeend", str);
}
