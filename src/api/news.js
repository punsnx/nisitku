const apiHost = "http://192.168.50.128:5000";
export const getNews = async () => {
  // Use Promise.all to wait for all image conversions to complete
  const data = await fetch(`${apiHost}/getNews`).then((res) => res.json());
  return data;
};
