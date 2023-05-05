function consumirAPI() {

    var apikey = "d8b02dc109d7a677a61793797397e470";
    var ts = "1000";
    var hash = "15aa89127ec7f5cc41b3362aa8c68a9b";
    var url = 'http://gateway.marvel.com/v1/public/characters?ts=' + ts + "&apikey=" + apikey + "&hash=" + hash;

    fetch(url)
        .then(response => response.json())
        .then(json => {
            
            for (item of json.data.results) {
                console.log(item.id);
                console.log(item.name);
                console.log(item.description);

                var urlImagen = item.thumbnail.path + "." + item.thumbnail.extension;
                console.log(urlImagen);
            }
        });


}