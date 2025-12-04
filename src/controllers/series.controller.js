import axios from "axios";

export const getSeries = async (req, res) => {
    const API_KEY = "612c33b2066027ae382dafa6ee3e75c2"

    try {
        const url = `https://api.themoviedb.org/3/trending/tv/day?language=es-ES&page=1&region=AR&api_key=${API_KEY}`
        const result = await axios.get(url)
        const data = result.data

        res.json(data)
    } catch (error) {
        res.json({mensaje: "error al pedir las series", error: error})
    }
}
export const getAllSeries = async (req, res) => {
    const API_KEY = "612c33b2066027ae382dafa6ee3e75c2";
    const { page = 1 } = req.query; // valor por defecto: 1

    try {
        const url = `https://api.themoviedb.org/3/trending/tv/day?language=es-ES&page=${page}&region=AR&api_key=${API_KEY}`;
        const result = await axios.get(url);
        res.json(result.data);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al pedir las series", error: error.message });
    }
};
export const getPopularSeries = async (req, res) => {
    const API_KEY = "612c33b2066027ae382dafa6ee3e75c2";
    try {
    const url = `https://api.themoviedb.org/3/tv/popular?language=es-ES&region=AR&api_key=${API_KEY}`
    const result = await axios.get(url);
    const data = result.data
    res.json(data);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al pedir las series", error: error.message });
    }

}
export const getSerieID = async (req, res) => {
    const id = req.params.id
    const API_KEY = "612c33b2066027ae382dafa6ee3e75c2"
    try {
        const url = `https://api.themoviedb.org/3/tv/${id}?language=es-ES&page=1&region=AR&api_key=${API_KEY}`
        const result = await axios.get(url)
        const data = result.data;
        res.json(data)
    } catch (error) {
        res.json({mensaje:"error al pedir las series", error: error})
    }
}
export const getLogos = async (req, res) => {
    const apiKey = '4a89c148e3c75422236fdf0e93c226d4';
    const id = req.params.id;
    try {
        const url = `https://webservice.fanart.tv/v3.2/movies/${id}?api_key=${apiKey}`
        const result = await axios.get(url)
        const data = result.data
        res.json(data)
    } catch (error) {
        res.status(500).json({ mensaje: "Error al pedir las series", error: error.message });
    }
}