function toggleTilemap() {
    document.getElementById("gameTilemap").classList.toggle("hidden")
}

let pathData = [
    "/recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0060.png",
    "/recources/kenney_tiny-town (compressed)/Tiles/tile_0060.png",
    "recources/kenney_tiny-town (compressed)/Tiles/tile_0121.png"
]

// Beispiel-Tilemap 16 mal 12
let mapData = [
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,2,2,2,0,0,0,0,0,2,2,2,0,0,1],
    [1,0,2,0,2,0,0,0,0,0,2,0,2,0,0,1],
    [1,0,2,2,2,0,0,0,0,0,2,2,2,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,2,2,2,0,0,0,0,0,2,2,2,0,0,1],
    [1,0,2,0,2,0,0,0,0,0,2,0,2,0,0,1],
    [1,0,2,2,2,0,0,0,0,0,2,2,2,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
];

function loadLevel(data) {
    if(mapData.length == 12){
        if(mapData[0].length==16 && mapData[1].length==16 && mapData[2].length==16 && mapData[3].length==16 && mapData[4].length==16 && mapData[5].length==16 && mapData[6].length==16 && mapData[7].length==16 && mapData[8].length==16 && mapData[9].length==16 && mapData[10].length==16 && mapData[11].length==16){
            for (let x = 0; x < mapData.length;  x++){
                for (let y = 0; y < mapData[y].length; y++){
                    console.log(mapData[x][y])
                }
            }
        }
    }
}
