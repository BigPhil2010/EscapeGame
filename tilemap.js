const GAME_WIDTH = 256;
const GAME_HEIGHT = 192;
const GAME_TILE = 16;

const Map1 = [
    [
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0006.png",
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0038.png"
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
]


function drawTilemap(tilemap){
    //canvas settings
    const canvas = document.getElementById("backgroundTilemap");
    const ctx = canvas.getContext("2d");
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;
    ctx.imageSmoothingEnabled = false;

    //read & draw tiles
    for (let y = 0; y < tilemap[1].length;  y++){
        for (let x = 0; x < tilemap[1][y].length; x++){
            let tileData = tilemap[1][y][x]
            let pathData = tilemap[0][tileData]
            
            const TILE_IMAGE = document.getElementById(pathData);

            ctx.drawImage(
                TILE_IMAGE,
                x*GAME_TILE,
                y*GAME_TILE
            )
        }
    }
}


function toggleTilemap() {
    document.getElementById("backgroundTilemap").classList.toggle("hidden")
}
