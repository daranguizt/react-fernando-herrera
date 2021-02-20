const apiKey = "f2exWXBqB5ynpzLepBpymL3QCjwQ0TGI";

const call = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

call
  .then((res) => res.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);
