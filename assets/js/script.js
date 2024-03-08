const exponerVideo = (() => {
    function incluirVideo(url, id){
        var reproductor = document.getElementById(id);
        reproductor.setAttribute('src', url);
    }

    return function(url,id){
        incluirVideo(url, id)
    }
})();

class Multimedia {
    constructor(url) {
        this._url = url;
    }

    get url() {
        return this._url;
    }

    set url(nuevaUrl) {
        this._url = nuevaUrl
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video"
    }
};

class Reproductor extends Multimedia{
    constructor(url, id) {
        super(url);
        this._id = id;
    }

    get id() {
        return this._id
    }

    playMultimedia() {
        return exponerVideo(this._url, this.id)
    }

    setInicio(startMark) {
        let newURL = `${this.url}&start=${startMark}`
        return this.url = newURL
    }
};


var reproducirMusica = new Reproductor('https://www.youtube.com/embed/YTQAjKBNp8g?si=Uzw0RRb40ZGtwQOn', 'musica');
var reproducirVideo = new Reproductor('https://www.youtube.com/embed/UPRqnFnnrr8?si=fSmKlzg8uJWXWq-g', 'peliculas');
var reproducirSerie = new Reproductor('https://www.youtube.com/embed/gapK18-dFMw?si=EyXfgtAfI5bGWGAr', 'series');


reproducirMusica.setInicio(10);
reproducirMusica.playMultimedia();

reproducirVideo.playMultimedia();

reproducirSerie.setInicio(26);
reproducirSerie.playMultimedia();