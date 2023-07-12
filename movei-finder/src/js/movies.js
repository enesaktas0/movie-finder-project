export default class Movie {
    constructor(id){
        this.id = id;
    }
    
    async getMovie() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjQ3N2Q4YzViMzVlNjBmYzczMGFlOWNjN2I4MjQ0NSIsInN1YiI6IjY0OTJlYTAzYzI4MjNhMDBlMmU5Njk2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v9DRcCYaQ_5wcG8spx7gtPgP6xWgt9jP3pfWEGfspZg'
        }
      };
      const response = await fetch(`https://api.themoviedb.org/3/movie/${this.id}?language=en-US`, options);
      this.data = await response.json();
    }
};

