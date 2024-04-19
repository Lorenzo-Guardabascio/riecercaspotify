function search(){
    
    //Prendo il valore 
    const input = document.getElementById('searchField').value;
    const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${input}`

        fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${input}`)
        //trasformo il risutat in json
        .then(response => response.json())
        .then(data => {
            // Estraggo i dati necessari dal JSON
            const canzoni = data.data;
            const container = document.getElementById('searchSection');
            canzoni.forEach(canzone => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${canzone.album.cover}" alt="${canzone.title}">
                <h3>${canzone.title}</h3>
                <p>${canzone.artist.name}</p>
                <p>${canzone.album.title}</p>
                `;
            container.appendChild(card);
            document.getElementById('found').classList.remove('d-none');
            });
        })
        
}



//Selezioni tutte le row dove mostrerò il contenuto di default
let artistiPresenti = document.querySelectorAll('.mostrarisultati');

artistiPresenti.forEach(artista => {

    //Recupero l'id
    //ottengo il nome da cercare e l'id
     let nomeArtista= artista.id;    
     //Analitto il risultato
     fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${nomeArtista}`)
     //trasformo il risutat in json
     .then(response => response.json())
     .then(data => {
        // Estraggo i dati necessari dal JSON
        const canzoni = data.data;
        const container = document.getElementById(nomeArtista+'Section');
        canzoni.forEach(canzone => {
          const card = document.createElement('div');
          card.classList.add('card');
          card.innerHTML = `
            <img src="${canzone.album.cover}" alt="${canzone.title}">
            <h3>${canzone.title}</h3>
            <p>${canzone.artist.name}</p>
            <p>${canzone.album.title}</p>
            `;
          container.appendChild(card);
          document.getElementById(nomeArtista).classList.remove('d-none');
        });
      })
});

/*

// Sezione Eminem
fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
  .then(response => response.json())
  .then(data => {
    // Estraggo i dati necessari dal JSON
    const canzoni = data.data; // le canzoni sono contenute in un array chiamato "data"
    const container = document.getElementById(`eminemSection`)
    // Itero attraverso ogni canzone e creo una card per ciascuna
    canzoni.forEach(canzone => {
      // Creo la card HTML per ogni canzone
      const card = document.createElement('div');
      card.classList.add('card');
      // Popolo la card con i dati della canzone
      card.innerHTML = `
        <img src="${canzone.album.cover}" alt="${canzone.title}">
        <h3>${canzone.title}</h3>
        <p>${canzone.artist.name}</p>
        <p>${canzone.album.title}</p>
        `;
        
      // Aggiungo la card all'HTML
      container.appendChild(card);
    });
  })

  */