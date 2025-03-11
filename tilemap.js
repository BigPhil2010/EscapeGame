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
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0056.png",//6fenceupwards
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0044.png",//7fencetopleftcorner
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0046.png",//8fencetoprightcorner
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0045.png",//9fncehorizontal
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0070.png",//10fencebottomrightcorner
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0068.png",//11fencebottomleftcorner
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0069.png",//12fencedoor
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0058.png",//13fencedownward
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0109.png",//14Boden
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0104.png",//15brunnen unten
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0092.png",//16 brunnen oben
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0048.png",//17 Dach OL
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0057.png",//18 Wagen
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0051.png",//19 Dach OR
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0050.png",//20 Dach OMR
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0049.png",//21 Dach OML
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0060.png",//22 Dach UL
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0061.png",//23 Dach UML
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0062.png",//24 Dach UMR
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0063.png",//25 Dach UR
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0076.png",//26 Haus OL
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0077.png",//27 Haus OML
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0079.png",//28 Dach OL
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0088.png",//29 Fenster
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0089.png"//30 Tür
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
        [0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
        [null, null, null, null, null, null, 2, null, null, null, null, 2, null, null, 2, null],
        [null, 4, null, null, null, null, 1, null, null, 2, null, 1, 4, null, 1, null],
        [null, null, null, null, null, null, null, null, 2, 1, null, 2, null, 2, null, 2],
        [null, null, null, null, null, null, null, null, 1, null, null, 1, null, 1, null, 1],
        [null, 2, null, null, null, null, null, null, null, 2, null, 2, null, null, null, null],
        [null, 1, null, 5, null, null, null, null, null, 1, null, 1, 5, null, 2, null],
        [7, 9, 9, 9, 9, 9, 9, 9, 9, 8, null, 2, null, null, 1, null],
        [6, 17, 21, 20, 19, null, null, null, null, 13, null, 1, null, null, null, null],
        [6, 22, 23, 24, 25, null, null, 18, null, 13, null, 2, null, null, null, null],
        [6, 26, 27, 29, 28, null, 16, null, null, 13, null, 1, 2, null, 4, null],
        [6, 26, 30, 27, 28, null, 15, null, null, 13, null, null, 1, null, null, null],
        [11, 9, 12, 9, 9, 9, 9, 9, 9, 10, null, null, null, null, null, null]
    ]
]
const Map2= [
    [
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0004.png"

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
    ]
    [
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
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
