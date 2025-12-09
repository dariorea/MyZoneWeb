import axios from "axios";

//export const getTrendings = async (req, res) => {
//
//    try {
//        const url = `https://api.themoviedb.org/3/trending/all/day?language=es-ES&page=1&region=AR&api_key=${process.env.TMDB_API_KEY}`
//        const result = await axios.get(url)
//        const data = result.data
//        res.json(data)        
//    } catch (error) {
//        res.json({mensaje:"error al pedir las tendencias", error: error})
//    }
//
//}
export const getMovies = async (req, res)=> {

    try {
        const url = `https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1&region=AR&api_key=${process.env.TMDB_API_KEY}`;
        const result = await axios.get(url)
        const data = result.data
        res.json(data)
    } catch (error) {
        res.json({mensaje: "error", error: error})
    }
}
export const getMovieID = async (req, res) => {
    const id = req.params.id

    try {
        const url = `https://api.themoviedb.org/3/movie/${id}?language=es-ES&page=1&region=AR&api_key=${process.env.TMDB_API_KEY}`
        const result = await axios.get(url)
        const data = result.data

        res.json(data)
    } catch (error) {
        res.json({mensaje:"error al buscar la pelicula", error: error})
    }
}
export const getAllMovies = async (req, res) => {
    const { page = 1 } = req.query; // valor por defecto: 1

    try {
        const url = `https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=${page}&api_key=${process.env.TMDB_API_KEY}`;
        const result = await axios.get(url);
        const data = result.data
        res.json(data);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al pedir las series", error: error.message });
    }
};
export const topRatedMovies = async (req, res) => {

    try {
    const url = `https://api.themoviedb.org/3/movie/popular?language=es-ES&region=AR&api_key=${process.env.TMDB_API_KEY}`
    const result = await axios.get(url);
    const data = result.data
    res.json(data);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al pedir las series", error: error.message });
    }
}




export const getTrendings = async (req, res) => {
    const TMDB_KEY = process.env.TMDB_API_KEY;
    const FANART_KEY = process.env.FANART_KEY;
  try {
    // 1. Obtener películas desde TMDB
    const tmdbRes = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_KEY}&language=es-ES&page=1`
    );

    const movies = tmdbRes.data.results;

    // 2. Para cada película, obtener su logo en Fanart
    const moviesWithLogos = await Promise.all(
      movies.map(async (movie) => {
        try {
          const fanartRes = await axios.get(
            `https://webservice.fanart.tv/v3/movies/${movie.id}?api_key=${FANART_KEY}`
          );

          const logos = fanartRes.data.hdmovielogo[0].url || fanartRes.data.hdmovielogo[1].url || [];

          return {
            ...movie,
            logos,
          };
        } catch {
          return { ...movie, logos: [] };
        }
      })
    );

    res.json(moviesWithLogos);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener películas" });
  }
};

