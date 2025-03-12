const GAME_WIDTH = 256;
const GAME_HEIGHT = 192;
const GAME_TILE = 16;

const Map1 = [
    [
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0000.png",//0grass
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0001.png",//1high grass
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0016.png",//2tree bottom
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0004.png",//3tree top
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0029.png",//4pilz
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0017.png"//5unkraut
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, 4, null, null, null, null, null, null, null, null, null, null, 4, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, 3, null, null, null, null, null, null],
        [null, null, null, 5, null, null, null, null, null, 2, null, null, 5, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, 4, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
    ]
]

async function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds*1000));
}

async function drawTilemap(tilemap){
    toggleTilemap()
    await sleep(1)

    //canvas settings
    const BGcanvas = document.getElementById("backgroundTilemap");
    const BGctx = BGcanvas.getContext("2d");
    BGcanvas.width = GAME_WIDTH;
    BGcanvas.height = GAME_HEIGHT;
    BGctx.imageSmoothingEnabled = false;

    const VGcanvas = document.getElementById("foregroundTilemap");
    const VGctx = VGcanvas.getContext("2d");
    VGcanvas.width = GAME_WIDTH;
    VGcanvas.height = GAME_HEIGHT;
    VGctx.imageSmoothingEnabled = false;

    //read & draw tiles
    for (let y = 0; y < tilemap[1].length;  y++){
        for (let x = 0; x < tilemap[1][y].length; x++){
            let tileData = tilemap[1][y][x]
            let pathData = tilemap[0][tileData]
            
            const TILE_IMAGE = document.getElementById(pathData);

            BGctx.drawImage(
                TILE_IMAGE,
                x*GAME_TILE,
                y*GAME_TILE
            )
        }
    }
    for (let y = 0; y < tilemap[2].length;  y++){
        for (let x = 0; x < tilemap[2][y].length; x++){
            let tileData = tilemap[2][y][x]
            let pathData = tilemap[0][tileData]
            
            const TILE_IMAGE = document.getElementById(pathData);

            if (pathData != null){
                VGctx.drawImage(
                    TILE_IMAGE,
                    x*GAME_TILE,
                    y*GAME_TILE
                )
            }
        }
    }
    toggleTilemap()
    await sleep(0.5)
}


function toggleTilemap() {
    document.getElementById("backgroundTilemap").classList.toggle("hidden")
    document.getElementById("foregroundTilemap").classList.toggle("hidden")
}
