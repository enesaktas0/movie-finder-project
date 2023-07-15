import { elements } from "../base";


export const backToTop = () => {
    window.scrollTo({top:0, behavior:'smooth'})
}


export const showMovieDetails = (data) => {
    elements.detailContainer.classList.remove('d-none');
    const movieDetail = data.data;

    const date = movieDetail.release_date;
    const dateArray = date.split("-");
    const releaseDate = `${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`;

    if(movieDetail.poster_path!= null){
        var html =`
            <div class="row">
                <div class="col-sm-4">
                    <img src="https://www.themoviedb.org/t/p/w500/${movieDetail.poster_path}" class="img-fluid" alt="">
                </div>
                <div class="col-sm-8">
                    <div class="d-flex justify-content-between">
                        <h4>${movieDetail.title}</h4>
                    <div>
                        <span class="badge bg-primary">Average Vote: ${movieDetail.vote_average.toFixed(1)}</span>
                        <span class="badge bg-secondary">Vote Count: ${movieDetail.vote_count}</span>
                        <span class="badge bg-danger">Release Date: ${releaseDate}</span>  
                    </div>
                </div>
                    <p>${movieDetail.overview}</p>
                    <hr>
        `
        var genre = '';
        movieDetail.genres.forEach(element => {
            genre += `
                <span class="badge bg-primary">${element.name}</span>
            `;
            
        });
        html += `
                ${genre}
        `;
        html += `
        </div>
        <div class="card-footer mt-2">
            <div id="close-detail" class="d-flex justify-content-end align-items-end">
                <button id="close-button" class="btn btn-danger">Close Detail</button>
            </div>
        </div>
        `;
    }else{
        html = `
        <div class="row">
            <div class="col-sm-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/500px-No-Image-Placeholder.svg.png?20200912122019" class="img-fluid" alt="">
            </div>
            <div class="col-sm-8">
                    <div class="d-flex justify-content-between">
                        <h4>${movieDetail.title}</h4>
                    <div>
                        <span class="badge bg-primary">Average Vote: ${movieDetail.vote_average.toFixed(1)}</span>
                        <span class="badge bg-secondary">Vote Count: ${movieDetail.vote_count}</span>
                        <span class="badge bg-danger">Release Date: ${releaseDate}</span>  
                    </div>
                </div>
                    <p>${movieDetail.overview}</p>
                    <hr>
        `
        var genre = '';
        movieDetail.genres.forEach(element => {
            genre += `
                <span class="badge bg-primary">${element.name}</span>
            `;
            
        });
        html += `
                ${genre}
        `;
        html += `
        </div>
        <div class="card-footer">
            <div id="close-detail" class="d-flex justify-content-end align-items-end">
                <button id="close-button" class="btn btn-danger">Close Detail</button>
            </div>
        </div>
        `;
    }
    
    elements.details.innerHTML = html;
}