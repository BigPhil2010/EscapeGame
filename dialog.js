//Dialoge

//const DialogName = [
//    Map1,
//    StartWalkArray,
//    "Text in the top Box",
//    [
//        "text in first btn",
//        EndWalkArray,
//        followingDialog
//    ],
//    [
//        "text in second btn",
//        EndWalkArray2,
//        followingDialog2
//    ]
//]

////////////////////////////////ALL OF THE STORY////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

const test = [
    [
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
    ],
    [
        [0,0,240,0,4],
        [240,0,240,176,3],
        [240,176,0,176,4],
        [0,176,0,0,3]
    ],
    "Text in the top Box",
    [
        "text in first btn",
        [
            [0,0,240,0,4],
            [240,0,240,176,3],
            [240,176,0,176,4],
            [0,176,0,0,3]
        ]
    ],
    [
        "text in second btn",
        [
            [0,0,0,192,3]
        ]
    ]
]


const start = [
    [
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
    ],
    [
        [0,0,240,0,4],
        //[240,0,240,176,3],
        //[240,176,0,176,4],
        //[0,176,0,0,3]
    ],
    "Text in the top Box",
    [
        "text in first btn",
        [
            [0,0,240,0,4],
            [240,0,240,176,3],
            [240,176,0,176,4],
            [0,176,0,0,3]
        ],
        "over"
    ],
    [
        "text in second btn",
        [
            [0,0,0,176,3]
        ],
        test
    ]
]


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    loadStart()
    console.log("everything Loaded")
    document.getElementById("startBtn").onclick = function() {
       Endstart()
    };
 });
 async function loadStart(){
    await sleep(1)
    drawTilemap(start[0])
 }

 document.getElementById("overBtn").onclick = function() {
    location.reload()
 }

function Endstart(){
    if (!document.getElementById("startOverlay").classList.contains("hidden")){
        document.getElementById("startOverlay").classList.add("hidden");
        document.getElementById("startBtn").remove()
        renderScene(start)
    }
}



async function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds*1000));
}


async function renderScene(scene){
    const tilemap = scene[0]
    const StartWalkArray = scene[1]
    let StartWalkTime = 0
    const EndWalkArray1 = scene[3][1]
    let EndWalkTime1 = 0
    const EndWalkArray2 = scene[4][1]
    let EndWalkTime2 = 0
    const topText = scene[2]
    const btn1 = scene[3][0]
    const btn2 = scene[4][0]

    //get time of walks
    for (let i = 0; i<StartWalkArray.length; i++){
        StartWalkTime += StartWalkArray[i][4]
    }
    StartWalkTime += StartWalkTime/2

    for (let i = 0; i<EndWalkArray1.length; i++){
        EndWalkTime1 += EndWalkArray1[i][4]
    }
    EndWalkTime1 += EndWalkTime1/2

    for (let i = 0; i<EndWalkArray2.length; i++){
        EndWalkTime2 += EndWalkArray2[i][4]
    }
    EndWalkTime2 += EndWalkTime2/2

    drawTilemap(tilemap)
    await sleep(1)
    walkArray(StartWalkArray)
    await sleep(StartWalkTime)

    //set texts
    document.getElementById("topText").innerHTML = topText
    document.getElementById("btn1").innerHTML = btn1
    document.getElementById("btn2").innerHTML = btn2
    hideDialog()


    //get BTN inputs
    document.getElementById("btn1").onclick = async function(){
        console.log("btn1")
        if (!document.getElementById("dialog").classList.contains("hidden")){
            console.log("btn1")
            walkArray(EndWalkArray1)
            hideDialog()
            await sleep(EndWalkTime1)
            if (scene[3].length == 3){
                document.getElementById("player").classList.add("hidden")
                document.getElementById("player").getContext("2d").clearRect(0,0,176,240)
                document.getElementById("player").classList.remove("hidden")
                if(scene[3][2] == "over"){
                    document.getElementById("backgroundTilemap").classList.add("hidden")
                    document.getElementById("foregroundTilemap").classList.add("hidden")
                    document.getElementById("player").classList.add("hidden")
                    document.getElementById("end").remove()
                    document.getElementById("over").classList.remove("hidden")
                }
                else{
                    renderScene(scene[3][2])
                }
            }
            else{
                document.getElementById("backgroundTilemap").classList.add("hidden")
                document.getElementById("foregroundTilemap").classList.add("hidden")
                document.getElementById("player").classList.add("hidden")
                document.getElementById("end").remove()
                document.getElementById("end").classList.remove("hidden")
            }
        }
    }
    document.getElementById("btn2").onclick = async function(){
        if (!document.getElementById("dialog").classList.contains("hidden")){
            walkArray(EndWalkArray2)
            hideDialog()
            await sleep(EndWalkTime2)
            if (scene[4].length == 3){
                document.getElementById("player").classList.add("hidden")
                document.getElementById("player").getContext("2d").clearRect(0,0,176,240)
                document.getElementById("player").classList.remove("hidden")
                if(scene[4][2] == "over"){
                    document.getElementById("backgroundTilemap").classList.add("hidden")
                    document.getElementById("foregroundTilemap").classList.add("hidden")
                    document.getElementById("player").classList.add("hidden")
                    document.getElementById("over").classList.remove("hidden")
                }
                else{
                    renderScene(scene[4][2])
                }
            }
            else{
                document.getElementById("backgroundTilemap").classList.add("hidden")
                document.getElementById("foregroundTilemap").classList.add("hidden")
                document.getElementById("player").classList.add("hidden")
                document.getElementById("end").classList.remove("hidden")
            }
        }
    }
}

function hideDialog(){
    document.getElementById("dialog").classList.toggle("hidden")
}