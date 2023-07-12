import {elements} from "../base";
import Search from "../models/search";

const search = new Search(elements.txtKeyword.value);

export const showMovies = (data , pageNumber , keyword) => {
    elements.results.innerHTML = '';
    let header = `
        <div class="card-header">
            <span>With the query '${keyword}', ${data.total_results} results were found. </span>
        </div>
    `
    data.results.forEach(movie => {
        let html='';
        
        if(movie.poster_path!= null){
            html = `
            <li class="d-flex mb-3" id="selected-movie">
                <img src="https://www.themoviedb.org/t/p/w92/${movie.poster_path}" class="me-3" alt="${movie.title}">
                <div class="media-body">
                    <h5 class="mt-0 mb-1">
                        <span class="badge bg-primary">${movie.vote_average.toFixed(1)}</span> 
                        <a href="#${movie.id}">${movie.title}</a>
                    </h5>
                    <p>${movie.overview}</p>
                </div>
            </li>
            `;
        }else{
            html = `
            <li class="d-flex mb-3" id="selected-movie">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/92px-No-Image-Placeholder.svg.png?20200912122019" class="me-3" alt="${movie.title}">
                <div class="media-body">
                    <h5 class="mt-0 mb-1"><span class="badge bg-primary">${movie.vote_average.toFixed(1)}</span> 
                        <a href="#${movie.id}">${movie.title}</a>
                    </h5>
                    <p>${movie.overview}</p>
                </div>
            </li>
            `;
        }
        elements.results.innerHTML += html;
    });

    elements.movieListCard.insertAdjacentHTML('beforebegin',header);
    
    showButtons(pageNumber,data);
    
}

const showButtons = (pageNumber,data) => {
    let newButton = null;
    elements.buttons.innerHTML = '';
    if(pageNumber == 1){
        elements.buttons.classList.remove('justify-content-between');
        elements.buttons.classList.add('justify-content-end');
        // let pages = data
        newButton = `
            <button class="btn btn-primary next-page text-end">Next Page</button>
        `;
    }else if(pageNumber==data.total_pages){
        elements.buttons.classList.remove('justify-content-between');
        elements.buttons.classList.add('justify-content-start');
        newButton = `
            <button class="btn btn-primary previous-page">Previous Page</button>
        `;
    }else{
        elements.buttons.classList.add('justify-content-between');
        elements.buttons.classList.remove('justify-content-end');
        newButton =`
            <button class="btn btn-primary previous-page">Previous Page</button>
            <button class="btn btn-primary next-page">Next Page</button>
        `;
    }
    elements.buttons.insertAdjacentHTML("beforeend",newButton);
};