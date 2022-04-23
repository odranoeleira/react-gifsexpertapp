export const getGifs = async (category) => {
  const apiKey = "G51BsLr4qgb2SRgJ1qun1MkjoCW8yrQv";
  const url = "https://api.giphy.com/v1/gifs/search";
  //const search = "macri+gato";
  const peticion = await fetch(
    `${url}?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`
  );
  const { data } = await peticion.json();
  //console.log("Images data: ", data);
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
