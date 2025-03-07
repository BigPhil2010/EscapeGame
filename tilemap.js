const GAME_WIDTH = 256;
const GAME_HEIGHT = 192;
const GAME_TILE = 16;

const Map1 = [
    [
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0000.png",//0grass
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0016.png",//1treebottom
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0004.png",//2treetop
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0001.png",//3highgrass
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0029.png",//4pilz
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0017.png",//5unkraut
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0055.png",//6fenceupwards
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0043.png",//7fencetopleftcorner
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0045.png",//8fencetoprightcorner
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0044.png",//9fncehorizontal
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0069.png",//10fencebottomrightcorner
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0067.png",//11fencebottomleftcorner
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0068.png",//12fencedoor
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0057.png",//13fencedownward
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
        [null, null, null, null, null, 2, null, null, null, null, null, null, null, null, 2, null],
        [null, 4, null, null, null, null, 1, null, null, 2, null, 1, 4, null, 1, null],
        [null, null, null, null, null, null, null, null, 2, 1, null, 2, null, 2, null, 2],
        [null, null, null, null, null, null, null, null, 1, null, null, 1, null, 1, null, 1],
        [null, 2, null, null, null, null, null, null, null, 2, null, 2, null, null, null, null],
        [null, 1, null, 5, null, null, null, null, null, 1, null, 1, 5, null, 2, null],
        [7, 9, 9, 9, 9, 9, 9, 9, 9, 8, null, 2, null, null, 1, null],
        [6, null, null, null, null, null, null, null, null, 13, null, 1, null, null, null, null],
        [6, null, null, null, null, null, null, null, null, 13, null, 2, null, null, null, null],
        [6, null, null, null, null, null, null, null, null, 13, null, 1, 2, null, 4, null],
        [6, null, null, null, null, null, null, null, null, 13, null, null, 1, null, null, null],
        [11, 9, 12, 9, 9, 9, 9, 9, 9, 10, null, null, null, null, null, null]
    ]
]


function drawTilemap(tilemap){
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
}


function toggleTilemap() {
    document.getElementById("backgroundTilemap").classList.toggle("hidden")
    document.getElementById("foregroundTilemap").classList.toggle("hidden")
}
