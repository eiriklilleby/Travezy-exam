const url = "https://travezy.no/wp-json/wp/v2/media/?per_page=13&_embed";
const postContainer = document.querySelector(".big-container");
const viewBtn = document.querySelector(".v-btn");

viewBtn.style.display = "none";

async function makeApiCall() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    postContainer.innerHTML = "";
    viewBtn.style.display = "block";

    for (let i = 0; i < 9; i++) {
      postContainer.innerHTML += `
      <div class="container">
          <div class="img-container">
            <img src="${json[i].source_url}" alt="${json[i].alt_text}" />
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
          </div>
          <div class="blog-container">
            <h3>${json[i].title.rendered}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quaerat officiis cumque aspernatur unde
              debitis enim eveniet placeat tempora. Harum dolore, recusandae odio culpa nobis ullam minus necessitatibus
              ab quae, quaerat doloremque ex sapiente eveniet ad, animi voluptatem quis aperiam! Placeat, perferendis
              alias adipisci distinctio reprehenderit accusantium eos laborum ipsa est explicabo architecto at
              voluptates in consectetur minima incidunt aspernatur.
            </p>
             <div class="button-container">
              <a class="button read-btn" href="blogspec.html?id=${json[i].id}">Continue reading <i class="fas fa-chevron-right"></i> </a>
            </div>
          </div>
        </div>`;
    }
  } catch (error) {
    postContainer.innerHTML = displayError();
    console.log(error);
  }
}

viewBtn.addEventListener("click", () => {
  async function makeApiCall() {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);

      postContainer.innerHTML = "";
      for (let i = 0; i < json.length; i++) {
        viewBtn.style.display = "none";

        postContainer.innerHTML += `
        <div class="container">
          <div class="img-container">
            <img src="${json[i].source_url}" alt="${json[i].alt_text}" />
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
          </div>
          <div class="blog-container">
            <h3>${json[i].title.rendered}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quaerat officiis cumque aspernatur unde
              debitis enim eveniet placeat tempora. Harum dolore, recusandae odio culpa nobis ullam minus necessitatibus
              ab quae, quaerat doloremque ex sapiente eveniet ad, animi voluptatem quis aperiam! Placeat, perferendis
              alias adipisci distinctio reprehenderit accusantium eos laborum ipsa est explicabo architecto at
              voluptates in consectetur minima incidunt aspernatur.
            </p>
             <div class="button-container">
              <a class="button read-btn" href="blogspec.html?id=${json[i].id}">Continue reading <i class="fas fa-chevron-right"></i></a>
            </div>
          </div>
        </div>`;
      }
    } catch (error) {
      postContainer.innerHTML = displayError();
      console.log(error);
    }
  }
  makeApiCall();
});

makeApiCall();
