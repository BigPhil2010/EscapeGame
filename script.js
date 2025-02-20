function toggleTilemap(mapArray) {
    let tilemapContainer = document.getElementById("gameTilemap");
    
    if (!tilemapContainer) {
        console.error("Element mit ID 'gameTilemap' nicht gefunden.");
        return;
    }
    
    tilemapContainer.innerHTML = ""; // mach tile map von davor leer
    
    for (let row of mapArray) {
        let rowDiv = document.createElement("div");
        rowDiv.style.display = "flex";
        
        for (let tile of row) {
            let img = document.createElement("img");
            img.src = `tiles/${tile}.png`; // Passe Pfad an 
            img.style.width = "32px";
            img.style.height = "32px";
            rowDiv.appendChild(img);
        }
        
        tilemapContainer.appendChild(rowDiv);
    }
}

// Beispiel-Tilemap 16 mal 12
let mapData = [
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,2,2,2,0,0,0,0,0,2,2,2,0,0,1],
    [1,0,2,0,2,0,0,0,0,0,2,0,2,0,0,1],
    [1,0,2,2,2,0,0,0,0,0,2,2,2,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

function loadLevel() {
    toggleTilemap(mapData);
}
