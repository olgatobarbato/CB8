const httpGET = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: AUTH,
    },
  });

  const data = await res.json();

  return data;
};

const BASE_URL = "https://api.themoviedb.org/3";
const AUTH =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjUxYmIxY2YzMTJmZWE0OGViYTMzZDg1NDgyMzUzOSIsInN1YiI6IjY1NmJiNmMyNjUxN2Q2MDBhZjI3ZjU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.deF14fTkwV_YYqlxCUK5DqOewu-4ZYb8lUC-nwH7Xg4";

export { httpGET };
