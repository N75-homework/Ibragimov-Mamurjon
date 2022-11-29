const searchBtn = document.querySelector('.search-button');
searchBtn.addEventListener('click', async function() {
    const inputKw = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKw.value);
    updateUI(movies, inputKw.value);
});
document.addEventListener('click', async function(e) {
    if (e.target.classList.contains('modal-detail-button')) {
        const imdbid = e.target.dataset.imdbid;
        const detail = await getDetailMovie(imdbid);
        updateUIDetail(detail);
    }
});

// press enter
const input = document.querySelector('.input-keyword');
input.addEventListener("keyup", async function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        const inputKw = document.querySelector('.input-keyword');
        const movies = await getMovies(inputKw.value);
        updateUI(movies, inputKw.value);
        document.addEventListener('click', async function(e) {
            if (e.target.classList.contains('modal-detail-button')) {
                const imdbid = e.target.dataset.imdbid;
                const detail = await getDetailMovie(imdbid);
                updateUIDetail(detail);
            }
        });
    }
});

// function
function getMovies(input) {
    if (input === '') {
        const movieCtnr = document.querySelector('.movie-container');
        movieCtnr.innerHTML = `<div class="error">You haven't filled out the search. Please try again.</div>`;
    } else {
        loading();
        nextPage(input, 2);
        return fetch('http://www.omdbapi.com/?apikey=44318a17&s=' + input)
            .then(response => response.json())
            .then(response => response.Search);
    }
}

function nextPage(input, page) {
    fetch ('http://www.omdbapi.com/?apikey=44318a17&s=' + input + '&page=' + page)
        .then(response => response.json())
        .then(response => {
            const movies = response.Search;
            if (response.Response === 'False') {
            } else {
                const nextPage = document.querySelector('.next-page')
                nextPage.innerHTML = `<a href="#home"><button type="button" class="btn btn-secondary mb-3 next-page-btn">Next Page</button></a>`;
                const nextPageBtn = document.querySelector('.next-page-btn');
                nextPageBtn.addEventListener('click',function() {
                    let cards = '';
                    movies.forEach(m => cards += showCards(m));
                    const movieCtnr = document.querySelector('.movie-container');
                    movieCtnr.innerHTML = cards;
                    nextPage.innerHTML = `<div class="alert alert-secondary text-center p-1" role="alert">Max 2 pages</div>`;
                })
            }  
        })
}

function updateUI(movies, input) {
    if (movies == undefined) {
        updateUIError(input);
    } else {
        let cards = '';
        movies.forEach(m => cards += showCards(m));
        const movieCtnr = document.querySelector('.movie-container');
        movieCtnr.innerHTML = cards;
    }
}

function updateUIError(input) {
    if (input !== '') {
        const movieCtnr = document.querySelector('.movie-container');
        movieCtnr.innerHTML = `<div class="error">Your search - <strong>${input}</strong> - did not match any documents. Please try again.</div>
                                <p class="error mt-2">Suggestions:<br>- Make sure that all words are spelled correctly.<br>- Try different keywords.<br>- Try more general keywords.</p>`;
    }
}

function getDetailMovie(imdbid) {
    loadingDetail();
    return fetch('http://www.omdbapi.com/?apikey=44318a17&i=' + imdbid)
        .then(response => response.json())
        .then(m => m);
}

function updateUIDetail(e) {
    const detail = showMovieDetail(e);
    const modalBody = document.querySelector('.modal-body')
    modalBody.innerHTML = detail;
}

function showCards(m) {
    return `<div class="col-sm-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}${onGoing(m.Year)}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`;
}

function showMovieDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3 mb-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                        <li class="list-group-item active" aria-current="true">${m.Title} (${m.Year}${onGoing(m.Year)})</h4></li>
                        <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                        <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                        <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                        <li class="list-group-item"><strong>Plot : </strong><br>${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}

function loading() {
    const movieCtnr = document.querySelector('.movie-container');
    movieCtnr.innerHTML = `<div class="loading">Loading..</div>`;
}

function loadingDetail() {
    const detailCtnr = document.querySelector('.modal-body');
    detailCtnr.innerHTML = `<div class="loading">Loading..</div>`;
}

function onGoing(year) {
    const filterYear = [...year];
    if (filterYear[4] === undefined){
        return ''
    }
    else if (filterYear[5] === undefined ) {
        return '?'
    } else {
        return '';
    }
}