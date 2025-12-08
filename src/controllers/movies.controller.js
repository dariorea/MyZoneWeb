import axios from "axios";

export const getTrendings = async (req, res) => {

    try {
        const url = `https://api.themoviedb.org/3/trending/all/day?language=es-ES&page=1&region=AR&api_key=${process.env.TMDB_API_KEY}`
        const result = await axios.get(url)
        const data = result.data
        res.json(data)        
    } catch (error) {
        res.json({mensaje:"error al pedir las tendencias", error: error})
    }

}
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

