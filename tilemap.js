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
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0001.png",//0 grass
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0000.png",//1 green
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0002.png",//2 flower
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0043.png",//3 stein boden
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0016.png",//4 bottom tree
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0004.png",//5 top tree
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0123.png",//6 left gate
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0124.png",//7 right gate 
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0111.png",//8 top left gate 
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0112.png",//9 top right gate
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0120.png",//10 bottom left tower
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0108.png",//11 left tower
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0122.png",//12 bottom right tower
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0110.png",//13 right tower
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0104.png",//14 bottom well
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0092.png",//15 top well
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0121.png",//16 bottom tower
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0126.png",//17 wall
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0109.png",//18 grey floor
        "recources/kenney_tiny-town (compressed)/Tiles/tile_0131.png",//19 bucket

    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 13, 17, 0, 0, 17],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 11, 13, 17, 0, 0, 17],
        [0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 10, 12, 17, 0, 0, 17],
        [0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 3, 3, 0],
        [0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 3, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 3, 0],
        [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 3, 3, 0],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
    ],
    [
        [null, null, null, null, null, null, null, null, null, null, null, 5, null, 8, 9, null],
        [null, null, null, null, null, null, null, null, null, null, null, 4, null, 6, 7, null],
        [null, 5, null, null, null, null, null, null, null, null, null, null, null, 6, 7, null],
        [null, 4, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, 15, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, 19, 14, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, 5, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, 4, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
    ]

]
const Map3= [
    [
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0048.png",//0 ground
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0040.png",//1 wall
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0028.png",//2 window
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0096.png",//3 statue 
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0046.png",//4 door left 
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0047.png",//5 door right 
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0042.png",//6 stone floor
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0089.png",//7 chest
        "recources/kenney_tiny-town  (compressed)/Tiles/tile_0125.png",//8 wall stone 
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0049.png",//9 dust 

    

        [1, 1, 1, 2, 4, 5, 2, 8, 8, 2, 4, 5, 2, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 0, 0, 9, 0, 0, 9, 0, 0, 0, 0, 9, 0, 0, 1, 1],
        [1, 9, 0, 0, 0, 0, 9, 0, 9, 0, 0, 0, 0, 0, 1, 1],
        [1, 0, 0, 0, 0, 9, 0, 0, 9, 0, 0, 0, 9, 0, 8, 8],
        [1, 0, 0, 0, 0, 0, 0, 9, 0, 0, 9, 0, 0, 0, 8, 8],
        [1, 0, 0, 9, 0, 0, 9, 0, 9, 0, 0, 0, 0, 0, 1, 1],
        [1, 9, 0, 0, 0, 9, 0, 0, 9, 0, 9, 0, 9, 0, 1, 1],
        [1, 0, 0, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 9, 0, 9, 0, 0, 0, 0, 9, 0, 0, 9, 0, 9, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, 7, 3, null, null, null, null, null, null, null, null, 3, 7, null, null, null],
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
