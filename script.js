const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const imgCat = document.getElementById('cat');
const btnTrocagato = document.getElementById('changeCat');


const getCat = async () => {

    const data = await fetch(BASE_URL)
    .then(resp=> resp.json())
    .catch(error => console.log(error));
    
    return data.webpurl;
};

const loadImg = async () =>{
   
    imgCat.src = await getCat();

}

btnTrocagato.addEventListener('click', loadImg);

loadImg();