export type Rating = {
    source: string;
    value: string;
}

export type Ratings = Array<Rating>

export class Movie {  
    title: string;
    year: string;
    rated: string;
    released: string;
    runtime: string;
    genre: string;
    director: string;
    writer: string;
    actors: string;
    plot: string;
    language: string;
    country: string;
    awards: string;
    poster: string;
    ratings: Ratings;
    metascore: string;
    imdbrating: string;
    imdbvotes: string;
    imdbid: string;
    type: string;
    dvd: string;
    boxoffice: string;
    production: string;
    website: string;

    constructor(data?: Partial<Movie>) {
        this.title = data?.title ?? "";
        this.year = data?.year ?? "";
        this.rated = data?.rated ?? "";
        this.released = data?.released ?? "";
        this.runtime = data?.runtime ?? "";
        this.genre = data?.genre ?? "";
        this.director = data?.director ?? "";
        this.writer = data?.writer ?? "";
        this.actors = data?.actors ?? "";
        this.plot = data?.plot ?? "";
        this.language = data?.language ?? "";
        this.country = data?.country ?? "";
        this.awards = data?.awards ?? "";
        this.poster = data?.poster ?? "";
        this.ratings = data?.ratings ?? [];
        this.metascore = data?.metascore ?? "";
        this.imdbrating = data?.imdbrating ?? "";
        this.imdbvotes = data?.imdbvotes ?? "";
        this.imdbid = data?.imdbid ?? "";
        this.type = data?.type ?? "";
        this.dvd = data?.dvd ?? "";
        this.boxoffice = data?.boxoffice ?? "";
        this.production = data?.production ?? "";
        this.website = data?.website ?? "";
    }
}

/*
{
    "Title": "Guardians of the Galaxy Vol. 2",
    "Year": "2017",
    "Rated": "PG-13",
    "Released": "05 May 2017",
    "Runtime": "136 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "James Gunn",
    "Writer": "James Gunn, Dan Abnett, Andy Lanning",
    "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista",
    "Plot": "After saving Xandar from Ronan's wrath, the Guardians are now recognized as heroes. Now the team must help their leader Star Lord (Chris Pratt) uncover the truth behind his true heritage. Along the way, old foes turn to allies and betrayal is blooming. And the Guardians find that they are up against a devastating new menace who is out to rule the galaxy.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Nominated for 1 Oscar. 15 wins & 58 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.6/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "85%"
        },
        {
            "Source": "Metacritic",
            "Value": "67/100"
        }
    ],
    "Metascore": "67",
    "imdbRating": "7.6",
    "imdbVotes": "612,320",
    "imdbID": "tt3896198",
    "Type": "movie",
    "DVD": "22 Aug 2017",
    "BoxOffice": "$389,813,101",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
}
*/