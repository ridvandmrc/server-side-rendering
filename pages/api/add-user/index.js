import { usersData } from "../../../data/users";

export default function handler(req, res) {
  const { name, surname } = req.body;

  usersData.push({ id: 3, name, surname });

  res.status(200).json([]);
}
