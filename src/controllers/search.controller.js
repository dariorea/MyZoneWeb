import axios from "axios";

export const searchItem = async (req, res) => {
    const { name } = req.query
    try {
        const url = `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(name)}&language=es-ES&api_key=${process.env.TMDB_API_KEY}`
        const result = await axios.get(url)
        const data = result.data
        res.json(data)
    } catch (error) {
        res.json({mensaje: "No hay resultados", error: error})
    }
}


export const searchIA = async (req, res) => {
    const { description = "" } = req.query;

    try {
        const response = await axios.post(
            "https://router.huggingface.co/v1/chat/completions",
            {
                model: "meta-llama/Llama-3.1-8B-Instruct:novita",
                messages: [
                    {
                        role: "user",
                        content: `Dame SOLO una lista con 5 títulos de películas o series que coincidan con esta descripción: "${description}". Solo responde con los títulos, uno por línea.`
                    }
                ],
                max_tokens: 150
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.HF_TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

        const text = response.data.choices?.[0]?.message?.content || "";        
        const titles = text
            .split("\n")
            .map(t => t.replace(/^\d+[\.\)-]\s*/, "").trim())
            .filter(t => t.length > 0);

        res.json({ titles });

    } catch (error) {
        console.error("🔥 HF ERROR:", error.response?.data || error.message);
        res.status(500).json({ error: error.response?.data || error.message });
    }
};
