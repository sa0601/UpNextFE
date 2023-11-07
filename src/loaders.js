
const URL = "https://upnextbe.onrender.com"

//indexLoader 
export const indexLoader = async () => {
    const response = await fetch(URL + "/media/")
    const media = await response.json()
    return media
}

//showLoader 
export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/media/${params.id}/`)
    const media = await response.json()
    return media
}

// moviesLoader => get all media with a "movie" tag
export const moviesLoader = async () => {
    const response = await fetch(`${URL}/media/?tag=movie`);
    const movies = await response.json();
    return movies;
  }
  
  // gamesLoader => get all media with a "game" tag
  export const gamesLoader = async () => {
    const response = await fetch(`${URL}/media/?tag=game`);
    const games = await response.json();
    return games;
  }
  
// showsLoader => get all media with a "show" tag
export const showsLoader = async () => {
    const response = await fetch(`${URL}/media/?tag=show`);
    const shows = await response.json();
    return shows;
  }