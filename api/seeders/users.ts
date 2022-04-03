import { v4 as uuidv4 } from "uuid";

export const users = [
  {
    id: uuidv4(),
    name: "Octavio Flores",
    email: "test1@test.com",
    password: "password",
  },
  {
    id: uuidv4(),
    name: "Second person",
    email: "test2@test.com",
    password: "password",
  },
];
