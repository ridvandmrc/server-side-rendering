import { usersData } from "../../../data/users";

export default function handler(req, res) {
  res.json(usersData);
}
