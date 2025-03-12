const NameDerMap = [
    [
        "pfad/zu/tile/0.png",
        "pfad/zu/tile/0.png"
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
//oben ist eine Beispiel-map zum kopieren. eigentlich alles selbsterklärend
//
// Für NameDerMap kannst du alles einsetzen nur nicht 2 mal das selbe
// Den pfad zu den tiles musst du selber raussuchen und einsetzen
//Darunter sind 2 maps. die erste ist für den unteren Layer (Hintergrund) und die Zweite für den oberen Layer (Bäume und so) wenn du im Fordergrund nichts placen willst mach null
// Die kommas müssen alle so bleiben, falls sie geändert werden funktiuniert auch der Rest nicht mehr.
//Falls du mehr als 2 Pfade brauchst kommt nach jedem ein Komma außer nach dem Letzten!!!
//
//Die neuen Tilemaps kannst du unten aufschreiben.
//  |
//  V




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

    ],
    [

    

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
const map4 = [
    [
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0040.png",//0 wall
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0048.png",//1 floor
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0041.png",//2 trap
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0096.png",//3 statue 
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0046.png",//4 door left
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0047.png",//5 door right 
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0019.png",//6 stone statue
    ]
    [
        [0, 0, 0, 0, 0, 0, 0, 4, 5, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
        [null, null, null, null, null, null, 6, null, null, 6, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, 2, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, 2, 2, 2, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, 2, 2, 2, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, 2, 2, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, 2, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, 2, 2, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, 3, null, null, 3, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
    ]
]
const map5 = [
    [
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0048.png",//0 floor
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0040.png",//1 wall
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0072.png",//2 desk
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0065.png",//3 gravestone 
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0046.png",//4 door left
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0047.png",//5 door right 
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, 4, 5, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, 2, 2, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, 2, 2, 3, null, null, null, null, null, null, 3, 2, 2, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, 2, 2, 3, null, null, null, null, null, null, 3, 2, 2, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
    ]
]
const map6 = [
    [
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0040.png",//0 wall 
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0048.png",//1 floor
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0105.png",//2 latter
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0065.png",//3 gravestone 
        
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, 2, null, null, 3, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
    ]
]
const map7 = [
    [
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0040.png",//0 wall 
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0048.png",//1 floor
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0049.png",//2 dust
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0042.png",//3 stone 
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0040.png",//4 door left
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0048.png",//5 door right 
       
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0],
        [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0],
        [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0],
        [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0],
        [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    ],
    [
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, 4, 5, null, null, null, null, null, null, null],
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
const map8 = [
    [
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0048.png",//0 floor
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0040.png",//1 wall
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0092.png",//2 chest
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0075.png",//3 bottom crates
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0063.png",//4 top crates
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0096.png",//5 statue
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0090.png",//6 chest
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0091.png",//7 chest half open 
       
        
    ]
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, 4, 4, 5, 6, 7, 2, 2, 7, 6, 5, 4, 4, null, null],
        [null, null, 3, 3, null, null, null, null, null, null, null, null, 3, 3, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
    ]
]
const map0 = [
    [
       "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0048.png",//0 floor
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0040.png",//1 wall
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0089.png",//2 chest 
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0096.png",//3 statue
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0072.png",//4 table 
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0073.png",//5 stool
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0084.png",//6 professer
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0073.png",//7 stool
        "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0045.png",//8 door
      
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, 8, null, null, null, null, null, null, null, null],
        [null, 2, 3, null, null, null, null, null, null, null, null, null, null, 3, 2, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, 5, 5, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, 4, 4, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, 4, 4, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, 5, 5, 6, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, 2, 3, null, null, null, null, null, null, null, null, null, null, 3, 2, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
    ]
]
