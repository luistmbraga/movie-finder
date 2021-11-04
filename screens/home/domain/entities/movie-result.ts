export class MovieSearchResult {  
    title: string;
    year: string;
    poster: string;
    imdbid: string;
    type: string;

    constructor(data?: Partial<MovieSearchResult>) {
        this.title = data?.title ?? "";
        this.year = data?.year ?? "";
        this.poster = data?.poster ?? "";
        this.imdbid = data?.imdbid ?? "";
        this.type = data?.type ?? "";
    }
}

export type Movies = {
    movielist: Array<MovieSearchResult> | []
    totalresults: number;
}

/*
{
    "Title": "The Bat",
    "Year": "1959",
    "imdbID": "tt0052602",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYWY3N2M0MzktZjkxNi00MjNlLTg2ZjctZGVjZTZhNzZiMDc4XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg"
}
*/