"use strict";

const apiURL = "https://api.tvmaze.com/search/shows?";

const hae = function (event) {
    event.preventDefault();
    $("#tulos").empty();
    $("#tulos").append('<h1>Tulokset</h1>');
    //console.log( $(this).serialize());
    $.getJSON(apiURL +  $(this).serialize(), function (response) {
        /*console.log(response);*/
        $.each(response, function (indeksi, sarja) {
            console.log(sarja.show);
            $("#tulos").append(`<div class="card" style="border: 10px solid white; border-radius: 40px; padding: 5px;
              "><div class="card-header" style="background-color:#adbeff">
            <h2>${sarja.show.name}</h2></div><div class="card-body" style=">
            <h5 class="card-title"><p>${sarja.show.genres}</p></h5>
            <a href="${sarja.show.officialSite ? sarja.show.officialSite : sarja.show.url}">Linkki kotisivulle</a>
        <figure>
            <img src="${sarja.show.image ? sarja.show.image.medium : "tile.png"}" alt="${sarja.show.name}">
            <figcaption>${sarja.show.name}</figcaption>
        </figure>
        <p>${sarja.show.summary}</p>
    </article>`);
        
        });
    });
};


$('form').submit(hae);