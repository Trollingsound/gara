export default async function handler(req, res) {

    // If Not Post
    if (!req.method === 'POST') { return res.status(404).json({ Status: "Method Not Found" }) }

    // Req by User
    const { id } = req.body;

    // Response Get
    const fetchData = await fetch(`https://anime-world.in/wp-json/kiranime/v1/episode?id=${id}`, { method: 'GET' })

    // Response Send
    res.status(200).json(await fetchData.json())
}