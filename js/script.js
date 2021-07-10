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
  var pages = Math.ceil(list.length / 9);
  var linkPages = "";

  // this condition was added to account for "no results" cases

  if (pages === 0) {
    linkPages += `<li> <button type="button" class="active" > 0 </button></li>`;
    document.querySelector(".link-list").innerHTML = linkPages;
  }

  // this loop creates buttons according to the number of pages, and sets the first button as default active

  for (let i = 1; i <= pages; i++) {
    if (i === 1) {
      linkPages += `<li> <button type="button" class="active" > ${i} </button></li>`;
      document.querySelector(".link-list").innerHTML = linkPages;
    } else {
      linkPages += `<li> <button type="button"> ${i} </button></li>`;
      document.querySelector(".link-list").innerHTML = linkPages;
    }
  }

  // this loop removes/add active class according to clicks on the button

  var btns = document.querySelectorAll(".link-list button");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace("active", "");
      this.className += "active";
    });
  }
  document.addEventListener("click", (e) => {
    showPage(list, document.querySelector(".active").textContent);
  });
}

// Call functions
showPage(data, 1);
addPagination(data);
search(data);

/*
Create the `Search` function
This function will enable to search for students names */

function search(list) {
  // str variable uses JavaScript to append HTML for a search bar.
  var str =
    '<label for="search" class="student-search"><span>Search by name</span> <input id="search" placeholder="Search by name..."> <button type="button" ><img src="img/icn-search.svg" alt="Search icon"></button></label>';
  document.querySelector(".header").insertAdjacentHTML("beforeend", str);

  // variable to register user input and set eventlisteners to call the function nameSearch

  const myInput = document.getElementById("search");
  document.querySelector("button").addEventListener("click", nameSearch);
  myInput.addEventListener("keyup", nameSearch);

  // This function uses input to search for correspondending students first and last names  */

  function nameSearch() {
    searchName = myInput.value.toLowerCase();
    listStudent = [];

    // Conditional to check for "no results" cases

    if (searchName.length > 0 && listStudent.length === 0) {
      listStudent.length = 0;
      document.querySelector(
        ".student-list"
      ).innerHTML = `<li class="student-item cf"><div><h3> Sorry, no matches </h3></div></li>`;
      addPagination(listStudent);
    }

    // Loop to check if input corresponds to a student name from the list.
    // Could have been done with a for loop or other method like includes, or searching of index

    Array.from(list).forEach(function (student) {
      if (
        student.name.first.toLowerCase().match(searchName) ||
        student.name.last.toLowerCase().match(searchName)
      ) {
        listStudent.push(student);
        showPage(listStudent, 1);
      }
    });
    addPagination(listStudent);
  }
}
