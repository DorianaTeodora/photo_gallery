let photos = [
    'img/20200709_100918.jpg',
    'img/20200607_113042.jpg',
    'img/20200607_113220.jpg',
    'img/20200607_113235.jpg',
    'img/20200607_122139.jpg',
    'img/20200607_130529.jpg',
    'img/20200607_132057.jpg',
    'img/20200709_092923.jpg',
    'img/20200709_093001.jpg',
    'img/20200709_100243.jpg',
    'img/20200709_100512.jpg',
    'img/20200709_100907.jpg',
    'img/20200709_100914.jpg',
    'img/20200709_100918.jpg',

    'img/20200709_130956.jpg',
    'img/20200709_131315.jpg',
    'img/20200709_201427.jpg',
    'img/20200709_201828.jpg',
    'img/20200709_201831.jpg',
    'img/20200709_202753.jpg',
    'img/20200709_221233.jpg',
    'img/20200709_221238.jpg',
    'img/20200709_221241.jpg',
    'img/20200709_221244.jpg',
    'img/20200710_200017.jpg',
    'img/20200712_111529.jpg',
    'img/20200712_112122.jpg',
]

function loadPhotos() {
    for (let i = 0; i < photos.length; i++) {
        let albumelement = document.getElementById('picture-place');
        let btn = document.createElement("div");
        btn.innerHTML = '<img src=' + photos[i] + '>';
        albumelement.appendChild(btn);

    }

}
function sizeModify(x) {

    document.getElementById('pic-size-modifiy').innerHTML = '<img src=' + photosOriginalSize[x] + '>';
}


function displayPhotos() {
    document.getElementById('menu-left-icons1').style.background = 'rgb(209, 209, 255)';
    document.getElementById('picture-place-title').innerHTML = '';
    document.getElementById('picture-place-album').innerHTML = '';
    document.getElementById('picture-place-title2').innerHTML = '';
    document.getElementById('picture-place-album2').innerHTML = '';
    document.getElementById('picture-place-title3').innerHTML = '';
    document.getElementById('picture-place-album3').innerHTML = '';
    loadPhotos();

}


