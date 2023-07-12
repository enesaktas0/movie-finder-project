import Search from "./models/search";
import { elements } from "./base";
import * as searchView from "./views/searchView";
import Movie from "./movies";
import * as searchMovie from "./views/searchMovie";

window.addEventListener('load', () => {
    window.location.hash = '';
})

const state = {};
let keyword = null;
let pageNumber = 1;
const searchController = async (pageNumber) => {
    keyword = elements.txtKeyword.value;
    if(keyword){
        state.search = new Search(keyword);
        
        await state.search.getResults(pageNumber);

        searchView.showMovies(state.search.data , pageNumber , keyword);
    
    }else{
        console.log('No information');
    }

   
};

elements.formSearch.addEventListener('submit', function(e){
    pageNumber = 1;
    
    elements.details.innerHTML='';
    elements.moveiListContainer.classList.remove('d-none');
    searchController(pageNumber);

    elements.txtKeyword.value = '';

    e.preventDefault();
});

elements.buttons.addEventListener('click', async (e) => {
    state.search = new Search(keyword);
    if(e.target.classList.contains('next-page')){
        pageNumber++;

        await state.search.getResults(pageNumber);

        searchView.showMovies(state.search.data , pageNumber);
    }else if(e.target.classList.contains('previous-page')){
        pageNumber--;

        await state.search.getResults(pageNumber);

        searchView.showMovies(state.search.data , pageNumber);
    }


});



const movieControler = async () => {
    if(window.location.hash!=''){
        let id = window.location.hash.replace('#','');

        state.movie = new Movie(id);

        await state.movie.getMovie();
        
        searchMovie.showMovieDetails(state.movie);
        searchMovie.backToTop();
    }
    
}


window.addEventListener('hashchange' , movieControler);

elements.details.addEventListener('click', (e) => {
    if(e.target.id == 'close-button'){
        elements.detailContainer.classList.add('d-none');
        window.location.hash = '';
    }
})