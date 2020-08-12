var Movie = /** @class */ (function () {
    function Movie(title, studio, rating) {
        if (rating === void 0) { rating = "PG"; }
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    Movie.prototype.getPG = function (movie_array) {
        var new_movie_array;
        new_movie_array = [];
        for (var i = 0; i < movie_array.length; i++) {
            if (movie_array[i].rating == "PG") {
                new_movie_array.push(movie_array[i]);
            }
        }
        return new_movie_array;
    };
    return Movie;
}());
var film = new Movie("Casino Royale", "Eon Productions", "PG­13");
var film2 = new Movie("Casino Royale2", "Eon Productions");
var movie_arr = film2.getPG([film, film2]);
for (var i = 0; i < movie_arr.length; i++) {
    console.log("Title of movie is:", movie_arr[i].title);
}
