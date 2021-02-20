//Async genera una promesa!

const getImage = async () => {
  try {
    const apiKey = "f2exWXBqB5ynpzLepBpymL3QCjwQ0TGI";
    const res = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await res.json();

    if (data) {
      const { url } = data.images.original;
      const img = document.createElement("img");
      img.src = url;

      document.body.append(img);
    }
  } catch (err) {
    console.error(err);
  }
};

getImage();

// const call = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// call
//   .then((res) => res.json())
//   .then(({ data }) => {
//     const { url } = data.images.original;

//     const img = document.createElement('img');
//     img.src = url;

//     document.body.append(img);
//   })
//   .catch(console.warn);
