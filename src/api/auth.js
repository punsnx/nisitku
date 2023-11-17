const apiHost = "http://192.168.50.128:5000";
export const IsLogin = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.log("no token");
    return false;
  }
  console.log(token);
  return true;
};
export const LoginProcess = (user, pass) => {
  console.log("Run LoginProcess", user, pass);
  const response = fetch(`${apiHost}/api/login/${user}/${pass}`, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.status === "success") {
        // Save the token to localStorage
        localStorage.setItem("token", data.token);
        console.log("success");
        return true;
      } else {
        console.log("fail");
        return false;
      }
    })
    .catch((err) => console.log(err));
  return response;
};
export const LogoutProcess = () => {
  // Additional logout logic
  localStorage.removeItem("token");
  return true;
};
export const getTokenData = async (token) => {
  const response = await fetch(`${apiHost}/api/getTokenData/${token}`, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.status === "success") {
        // Save the token to localStorage
        console.log("success");
        return data.decoded;
      } else {
        console.log("fail");
        return false;
      }
    })
    .catch((err) => console.log(err));
  return response;
};
