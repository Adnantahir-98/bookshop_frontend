import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTlkMzRhMmQyYjliZjhkMjhkY2UxNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTYzNTU4NSwiZXhwIjoxNjcxODk0Nzg1fQ.tuTtlWWKzSwWw3S9-l_JXrOmTXGjslH-xaldj3rNyMs"
// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
