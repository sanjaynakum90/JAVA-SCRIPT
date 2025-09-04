async function searchMovies() {
    const query = document.getElementById("search").value.trim();
    const moviesDiv = document.getElementById("movies");
    moviesDiv.innerHTML = "";

    if (!query) {
        moviesDiv.innerHTML = "<p class='text-danger'>Please enter a movie name.</p>";
        return;
    }

    try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=thewdb&s=${query}`);
        const data = await res.json();

        if (data.Search) {
            data.Search.forEach((movie) => {
                moviesDiv.innerHTML += `
              <div class="card" style="width: 18rem;" style="box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;">
                <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title} poster">
                <div class="card-body">
                  <h5 class="card-title">${movie.Title}</h5>
                  <p class="card-text">Release Date: ${movie.Year}</p>
                </div>
              </div>
            `;
            });
        } else {
            moviesDiv.innerHTML = "<p class='text-warning'>No movies found for your search.</p>";
        }
    } catch (error) {
        moviesDiv.innerHTML = "<p class='text-danger'>Something went wrong. Please try again later.</p>";
        console.error("Fetch error:", error);
    }
}