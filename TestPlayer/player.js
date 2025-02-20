function toggleTilemap(mapName) {
    let tilemap = document.getElementById("gameTilemap");
    
    if (!tilemap) {
        console.error("Element mit ID 'gameTilemap' nicht gefunden.");
        return;
    }
    
    // Falls die Karte versteckt ist, lad das neue Bild und ZEig an
    if (tilemap.classList.contains("hidden")) {
        tilemap.src = `maps/${mapName}.png`; // Passe den Pfad an , wenn nötig
    }
    
    tilemap.classList.toggle("hidden");
}
