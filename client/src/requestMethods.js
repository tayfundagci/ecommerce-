import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjJiZTMxMDRiYjY3Y2FlZGIwZGNiYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTA2NTM0NCwiZXhwIjoxNjUxMzI0NTQ0fQ.YQl-fe41u0_QmXQBoXw2LI8G0NubgVvkzcgjN-lO-Ok";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
