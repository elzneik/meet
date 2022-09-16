import NProgress from 'nprogress';
import { mockData } from "./mock-data";
import axios from 'axios';

/*
* Check if there is token in storage
* If token for access was not found on local storage
* Check Authorization code,
* If no authorization code redirect to google
*/
export const getAccessToken = async () => {
  const accessToken = localStorage.getItem('access_token');
  const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem("access_token");
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get("code");
    if (!code) {
      const results = await axios.get(
        "https://eajmc0egmg.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url"
      );
      const { authUrl } = results.data;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
}

/*
* Check token vadility
* Access Token found in localStorage, check if token is valid, 
* if not redirect to google authorization
*/
const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .catch((error) => error.json());

  return result;
};

const removeQuery = () => {
  if (window.history.pushState && window.location.pathname) {
    var newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname;
    window.history.pushState("", "", newurl);
  } else {
    newurl = window.location.protocol + "//" + window.location.host;
    window.history.pushState("", "", newurl);
  }
};


export const getEvents = async () => {
    NProgress.start();

    if (window.location.href.startsWith("http://localhost")) {
      NProgress.done();
      return mockData;
    }
  
    const token = await getAccessToken();

      if (token) {
        removeQuery();
        const url = "https://eajmc0egmg.execute-api.eu-central-1.amazonaws.com/dev/api/get-events" + 
        "/" + token;
        const result = await axios.get(url);
        if (result.data) {
          var locations = extractLocations(result.data.events);
          localStorage.setItem("lastEvents", JSON.stringify(result.data));
          localStorage.setItem("locations", JSON.stringify(locations));
        }
        NProgress.done();
        return result.data.events;
      }
    };

    const getToken = async (code) => {
      try {
          const encodeCode = encodeURIComponent(code);
  
          const response = await fetch('https://eajmc0egmg.execute-api.eu-central-1.amazonaws.com/dev/api/token' +
           '/' + encodeCode);
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`)
          }
          const { access_token } = await response.json();
          access_token && localStorage.setItem("access_token", access_token);
          return access_token;
      } catch(error) {
          error.json();
      }
  };

  export const extractLocations = (events) => {
    var extractLocations = events.map((event) => event.location);
    var locations = [...new Set(extractLocations)];
    return locations;
  };

