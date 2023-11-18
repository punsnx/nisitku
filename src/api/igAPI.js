const apiHost = "http://localhost:5000";
export const getIG = async (ig_name, n) => {
  // Use Promise.all to wait for all image conversions to complete
  const data = await fetch(`${apiHost}/getIG/${ig_name}/${n}`).then((res) =>
    res.json()
  );
  return data;
};
