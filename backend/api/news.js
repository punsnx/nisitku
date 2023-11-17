const sharp = require("sharp");
const getNews = async (n) => {
  // Use Promise.all to wait for all image conversions to complete
  const data = await fetch(
    `https://apt-terrapin-willing.ngrok-free.app/get-post?ig=kasetsart_ku&n=${n}`
  ).then((res) => res.json());

  // Use Promise.all to wait for all image conversions to complete
  await Promise.all(
    data.map(async (i) => {
      i.images = await Promise.all(
        i.images.map(async (url) => {
          const pngBuffer = await fetchAndConvertToPNG(url);
          return pngBuffer;
        })
      );
    })
  );
  console.log(data);
  return data;
};
getNews(2);
async function fetchAndConvertToPNG(url) {
  try {
    // Fetch the image
    const response = await fetch(url);

    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error(`Failed to fetch image (status ${response.status})`);
    }

    // Get the ArrayBuffer from the response body
    const arrayBuffer = await response.arrayBuffer();

    // Convert the ArrayBuffer to a Buffer
    const buffer = Buffer.from(arrayBuffer);
    // Convert the image to PNG format
    const pngBuffer = await sharp(buffer).toFormat("png").toBuffer();

    return pngBuffer;
  } catch (error) {
    console.error("Error fetching and converting image:", error.message);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
}

module.exports = { getNews };
