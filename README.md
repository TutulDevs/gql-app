# GraphQL Books App

This is a practice project to learn and explore GraphQL. I'm blown away by the flexibility of this tool.

This project is a tutorial project from The Net Ninja's [YT Playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f). This is an old tutorial but I think everything was well explained. Few things to mention:

👉 I'm not a full-stack or backend dev. So I just followed the database part and did what he did. Some tools have changed and I read their docs and solved those issues.

👉 The API key or the database endpoint is hidden by using `.env` file which I `.gitignore'd` for the safety. I used [mLab](https://mlab.com/) which is a `MongoDB` like database. It gives 500MB free space. Setting it up can be cumbersome for a noob frontend dev.

👉 The tutorial's code and packages are a bit dated. I used functional Reactjs and latest version of GraphQL & Apollo Client. So it's not an exact copy of the tutorial and pretty modern.

## Used tools

Backend:

- 🚀 Express
- 🚀 GraphQL
- 🚀 Mongoose
- 🚀 mLab

Frontend:

- 🚀 React
- 🚀 GraphQL
- 🚀 Apollo Client

## How to Try/ setup

There are two directories, a) `client` for frontend, b) `server`, for backend.

👉 Clone this repository

👉 Go to `server` directory and run the below command

```console
    npm install
```

👉 Then start the server

```console
    node app
```

- You can use `nodemon` instead of the default and run the server hasslefree.
- Make sure you created the db before starting the server.

👉 Go to `client` directory and run the below command

```console
    npm install
```

👉 After installing the packages, run the Reactjs server.

```console
    npm start
```

> **If you like the project, you can give a ⭐ or even better, give me some feedback. Thanks for your time.**
