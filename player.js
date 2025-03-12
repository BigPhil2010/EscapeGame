const PLAYER_WIDTH = 256;
const PLAYER_HEIGHT = 192;
const PLAYER_TILE = 16;

async function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds*1000));
}


async function walkLine(start_x, start_y, end_x, end_y, time){//only straight
    //canvas settings
    const canvas = document.getElementById("player");
    const ctx = canvas.getContext("2d");
    canvas.width = PLAYER_WIDTH;
    canvas.height = PLAYER_HEIGHT;
    ctx.imageSmoothingEnabled = false;

    let walkDirection = ""
    
    //find direction
    if (start_x == end_x){
        //alert("Vertical")
        if (start_y < end_y){
            //alert("Down")
            walkDirection = "down"
        }
        else{
            //alert("Up")
            walkDirection = "up"
        }
    }
    else{
        //alert("Horizontal")
        if (start_x < end_x){
            //alert("Right")
            walkDirection = "right"
        }
        else{
            //alert("Left")
            walkDirection = "left"
        }
    }

    let sprites = [
        `recources/Player/sprite_${walkDirection}_0.png`,
        `recources/Player/sprite_${walkDirection}_1.png`,
        `recources/Player/sprite_${walkDirection}_2.png`
    ]

    let distance = (start_x - end_x) + (start_y - end_y)
    let frames = time*30 //30fps
    let duration = time/frames
    let distance_frame = distance/frames

    let playedFrames = 0
    let current_sprite = 0

    while (playedFrames < frames){
        ctx.clearRect(0,0,PLAYER_WIDTH,PLAYER_HEIGHT)
        if (walkDirection == "right"){
            ctx.drawImage(
                document.getElementById(sprites[current_sprite]),
                start_x+(playedFrames+1)*distance_frame*-1,
                start_y
            )
        }
        if (walkDirection == "left"){
            ctx.drawImage(
                document.getElementById(sprites[current_sprite]),
                start_x-(playedFrames+1)*distance_frame,
                start_y
            )
        }
        if (walkDirection == "down"){
            ctx.drawImage(
                document.getElementById(sprites[current_sprite]),
                start_x,
                start_y+(playedFrames+1)*distance_frame*-1
            )
        }
        if (walkDirection == "up"){
            ctx.drawImage(
                document.getElementById(sprites[current_sprite]),
                start_x,
                start_y-(playedFrames+1)*distance_frame
            )
        }
        await sleep(duration)
        playedFrames += 1

        if (playedFrames/5 == Math.round(playedFrames/5)){ //nur jeden 5.
            if (current_sprite == 0){
                current_sprite = 1
            }
            else{
                if (current_sprite == 1){
                    current_sprite = 2
                }
                else{
                    if (current_sprite == 2){
                        current_sprite = 0
                    }
                }
            }
        }
    }
}
async function walkArray(Array){
    const length = Array.length
    let currentPart = 0
    while (currentPart<length){
        walkLine(Array[currentPart][0], Array[currentPart][1], Array[currentPart][2], Array[currentPart][3], Array[currentPart][4])
        await sleep(Array[currentPart][4]+(Array[currentPart][4]/2))
        currentPart += 1
    }
}