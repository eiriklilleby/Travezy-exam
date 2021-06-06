const url = "https://travezy.no/wp-json/wp/v2/media/";
const postContainer = document.querySelector(".carousel-container");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

let length = 3;
let offset = 0;

async function makeApiCall() {
  try {
    const response = await fetch(url + `?per_page=${length}&offset=${offset}&_embed`);
    const json = await response.json();

    // Button Visibility for content on coursel

    if (offset === 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "block";
    }
    if (json.length < 3) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "block";
    }

    console.log(json);

    postContainer.innerHTML = "";

    json.forEach((posts) => {
      postContainer.innerHTML += `
      <div class="img-container">
        <a href="blogspec.html?id=${posts.id}">
           <img src="${posts.source_url}" alt="${posts.alt_text}">
        </a>
         <div class="info-container">
            <div class="info posted">
              <i class="fas fa-user-alt"></i>
              <p>Admin</p>
            </div>
              <div class="info date">
                <i class="fas fa-calendar-alt"></i>
                <p>April 26, 2021</p>
              </div>
            <div class="info comment">
              <p>0 Comments</p>
            </div>
          </div>
           <a href="blogspec.html?id=${posts.id}">
            <h4>${posts.title.rendered}</h4>
            </a>
        </div>`;
    });
  } catch (error) {
    postContainer.innerHTML = displayError();
    console.log("An error has occured");
  }
}

// Addventlistener for generating more post on click

prevBtn.addEventListener("click", () => {
  if (offset >= 3) {
    offset -= 3;
    makeApiCall();
  }
});

nextBtn.addEventListener("click", () => {
  offset += 3;

  makeApiCall();
});

makeApiCall();
