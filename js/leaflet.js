var map = L.map('mapa').setView([-31.366362, -64.218553], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-31.366362, -64.218553]).addTo(map)
    .bindPopup('GDLWEBCAMP 2022 <br/> Boletos disponibles')
    .openPopup();