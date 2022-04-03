import express from "express";
import db from "./models";
import { users } from "./seeders/users";
import { projects } from "./seeders/projects";

const app = express();
const port = process.env.PORT || 5000;

const createUsers = () => {
  users.map((user) => {
    db.User.create(user);
  });
};
createUsers();

const createProjects = () => {
  projects.map((project) => {
    db.Project.create(project);
  });
};
createProjects();

db.sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((err: Error) => console.log(err));
