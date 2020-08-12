class Movie
{
    title:string;
    studio:string;
    rating:string;
    constructor(title:string,studio:string,rating:string="PG")
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    getPG(movie_array:Movie[]): Movie[]
    {
        let new_movie_array:Movie[];
        new_movie_array=[];
        for(let i=0;i<movie_array.length;i++)
        {
            if(movie_array[i].rating=="PG")
            {
                new_movie_array.push(movie_array[i]);
            }
        }
        return new_movie_array;
    }
}
let film=new Movie("Casino Royale","Eon Productions","PG­13");
let film2=new Movie("Casino Royale2","Eon Productions");
let movie_arr=film2.getPG([film,film2]);
for(let i=0;i<movie_arr.length;i++)
{
    console.log("Title of movie is:",movie_arr[i].title);
}