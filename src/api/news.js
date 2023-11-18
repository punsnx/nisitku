const apiHost = "http://localhost:5000";
export const getNews = async () => {
  // Use Promise.all to wait for all image conversions to complete
  const data = await fetch(`${apiHost}/getNews`).then((res) => res.json());
  return data;
};
