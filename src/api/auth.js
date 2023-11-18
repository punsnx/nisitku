const apiHost = "http://localhost:5000";

export const IsLogin = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.log("no token", localStorage);
    return false;
  }
  const verifyToken = await getVerifyToken(token);
  if (verifyToken) {
    console.log(token);
    return true;
  }
  return false;
};
export const getVerifyToken = async (token) => {
  const response = await fetch(`${apiHost}/api/verifyToken/${token}`, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.status === true) {
        console.log("verify Token Success", data);
        return true;
      } else {
        console.log("verify Token Fail", data);
        localStorage.removeItem("token");
        return false;
      }
    })
    .catch((err) => console.log(err));
  return response;
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
