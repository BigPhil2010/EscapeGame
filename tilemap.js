const GAME_WIDTH = 256;
const GAME_HEIGHT = 192;
const GAME_TILE = 16;

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
