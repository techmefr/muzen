import config from './config.js';

document.addEventListener('DOMContentLoaded', function () {
      // Créez un config .js
    // Remplacez 'VOTRE_CLE_API_JAMENDO' par votre clé d'API Jamendo
    const apiKey = config.apiKey;
        // Remplacez 'ID_DE_VOTRE_ALBUM' par l'ID de l'album Jamendo que vous souhaitez utiliser

    const albumId = config.albumId;

    const apiUrl = `https://api.jamendo.com/v3.0/albums/tracks/?client_id=${apiKey}&format=json&id=${albumId}`;
    const audio = document.getElementById('myAudio');
    const playButton = document.getElementById('playButton');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(track => {
                const source = document.createElement('source');
                source.src = track.audio;
                source.type = 'audio/mpeg';
                audio.appendChild(source);
            });

            playButton.addEventListener('click', function () {
                audio.muted = false;
                audio.play();
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des informations sur les pistes:', error));
});