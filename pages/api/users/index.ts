export default function handler(req, res) {
  res.status(200).json({
    rows: [
      {id: 1, name: 'John'},
      {id: 2, name: 'Jane'},
    ]
  })
}
