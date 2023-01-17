export default async function handler(req, res) {
    const data = await (await fetch("https://api.jsonbin.io/v3/b/63c3173a01a72b59f24ae4bb")).json();
    if (data.record.needsUpdate == true) {
        res.revalidate("/courses/all");
    }

    res.status(200).json({ message: 'done' })
}