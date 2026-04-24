document.addEventListener('DOMContentLoaded', function () {
    const blackBtn = document.querySelector('.black-btn');
    const whiteBtn = document.querySelector('.white-btn');
    const cartButton = document.getElementById('cartButton');
    const imageCard = document.getElementById('imageCard');

    const imgNegro = "https://tse4.mm.bing.net/th/id/OIP.2GS_qRLSnnZ2d6hi3pumJQHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"; 
    const imgBlanco = "https://th.bing.com/th/id/R.fb05f79db6aa7be67aa568204a9983e5?rik=mJmx7e2vVX%2bfgw&pid=ImgRaw&r=0";

    blackBtn.addEventListener('click', function() {
        imageCard.style.backgroundImage = `url('${imgNegro}')`;
    });

    whiteBtn.addEventListener('click', function() {
        imageCard.style.backgroundImage = `url('${imgBlanco}')`;
    });

    cartButton.addEventListener('click', function() {
        this.style.backgroundColor = '#27ae60'; 
        this.style.color = 'white';
        this.textContent = '¡Agregado!';
    });
});