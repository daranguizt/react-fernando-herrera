
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=f2exWXBqB5ynpzLepBpymL3QCjwQ0TGI&q=${encodeURI(
      category
    )}}&limit=10`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map((item) => {
      return {
        id: item.id,
        title: item.title && item.title.trim() !== '' ? item.title : `${category} GIF`,
        url: item.images.downsized_medium.url,
      };
    });

    return gifs;
  };