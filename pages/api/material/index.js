export default function handler(req, res) {
  res.json([{ type: req.method }]);
}
