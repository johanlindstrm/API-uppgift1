console.log('gucci');


const APIKEY = '4fLteOlCpMrfDPA7u1ykxwjJCGF9hWqK'
const url = `https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&rating=pg`
const container = document.querySelector('.mainContainer');


function getRandomGif() {
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data.data);
        console.log('META', data.meta);
        console.log(data.data.images.downsized.url);
        console.log(data.data.title);

        const div = document.createElement('div');
        const img = document.createElement('img');
        const fc = document.createElement('figcaption');
        img.src = data.data.images.downsized.url;
        img.alt = data.data.title;
        fc.textContent = data.data.title;
        div.appendChild(img);
        div.appendChild(fc);

        container.insertAdjacentElement('afterbegin', div);
    })

    .catch(err => {
        console.error(err);
    })
}

btnRandom.addEventListener('click', () => {
    console.log('clicked');
    getRandomGif();
    




})