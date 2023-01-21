export default async function handler(req, res) {
    let { id } = req.query;
    let action = Number(req.query.action);
    if (action !== 1 && action !== -1) {
        res.json({status: -11});
    } else {
        res.json({
            status: 1,
            sid: 1,
            cid: Number(id),
            action: action
        })
    }
}