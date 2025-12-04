import axios from "axios";

export const getAnime = async (req, res) => {
    const { page = 1} = req.query

    try {
        const url =  `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_API_KEY}&page=${page}&language=es-ES&with_genres=16&with_origin_country=JP&sort_by=popularity.desc`
        const result = await axios.get(url)
        const data = result.data
        res.json(data)
    } catch (error) {
        res.json({mensaje: "error al pedir los anime", error: error})
    }
}

export const getKids = async (req, res) => {
    const { page = 1} = req.query

    try {
        const url =  `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&page=${page}&language=es-ES&with_genres=16,10751&sort_by=popularity.desc`
        const result = await axios.get(url)
        const data = result.data
        res.json(data)
    } catch (error) {
        res.json({mensaje: "error al pedir los anime", error: error})
    }
}

