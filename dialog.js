//Dialoge
let followingDialog = ""
let followingDialog2 = ""

const DialogName = [
    Map1,
    [
        [0,0,0,0,0]
    ],
    "Text in the top Box",
    [
        "text in first btn",
      [
          [0,0,0,0,0]
      ],
        followingDialog
    ],
    [
        "text in second btn",
      [
        [0,0,0,0,0]
      ],
        followingDialog2
    ]
]

const speed = 1

////////////////////////////////ALL OF THE STORY////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const Scene8 = [
    [
        [
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0048.png",//0 floor
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0040.png",//1 wall
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0092.png",//2 chest
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0075.png",//3 bottom crates
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0063.png",//4 top crates
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0096.png",//5 statue
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0090.png",//6 chest
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0091.png",//7 chest half open 
           
            
        ],
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
    ],
    [
        [7.5*16, 11*16, 7.5*16, 4*16, speed*7]
    ],
    "Du hast es geschafft",
    [
        "Na endlich",
      [
          [7.5*16, 4*16, 7.5*16, 4*16, speed*0]
      ]
    ],
    [
        "Juhu",
      [
        [7.5*16, 4*16, 7.5*16, 4*16, speed*0]
      ]
    ]
]




const Scene7 = [
    [
        [
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0040.png",//0 wall 
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0048.png",//1 floor
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0049.png",//2 dust
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0042.png",//3 stone 
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0046.png",//4 door left
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0047.png",//5 door right 
           
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
    ],
    [
        [
            8*16, 11*16, 8*16, 9*16, speed*2
        ]
    ],
    "Folge dem Weg deiner Vorgänger",
    [
        "Nimm den dreckigen Weg nach rechts.",
      [
          [8*16, 9*16, 8*16, 9*16, speed*0]
      ],
        "over"
    ],
    [
        "Nimm den Steinweg nach links.",
      [
        [8*16, 9*16, 2.5*16, 9*16, speed*6.5],
        [2.5*16, 9*16, 2.5*16, 2.5*16, speed*6.5],
        [2.5*16, 2.5*16, 7.5*16, 2.5*16, speed*5],
        [7.5*16, 2.5*16, 7.5*16, 1*16, speed*1]
      ],
        Scene8
    ]
]




const Scene6 = [
    [
        [
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0040.png",//0 wall 
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0048.png",//1 floor
            "recources/kenney_tiny-town (compressed)/Tiles/tile_0103.png",//2 latter
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0065.png",//3 gravestone 
            
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
    ],
    [
        [
            15*16, 5.5*16, 5*16, 5.5*16, speed*10
        ],
        [
            5*16, 5.5*16, 5*16, 4.5*16, speed*1
        ]
    ],
    "Entscheide dich für die richtige Leiter.",
    [
        "Oben?",
      [
        [
            5*16, 4.5*16, 2.3*16, 4.5*16, speed*3
        ]
      ],
        "over"
    ],
    [
        "Unten?",
      [
        [
            5*16, 4.5*16, 5*16, 6.5*16, speed*2
        ],
        [
            5*16, 6.5*16, 2.3*16, 6.5*16, speed*3
        ]
      ],
        Scene7
      ]
]




const Scene5 = [
    [
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
    ],
    [
        [
            7.5*16,  11*16, 7.5*16, 3*16, speed*8
        ]
    ],
    "Sortiere die Bücher in der richtigen Reihenfolge.",
    [
        "Dünn - Mittel - Dick",
      [
        [7.5*16, 3*16, 5*16, 3*16, speed*2.5],
        [5*16, 3*16, 5*16, 1*16, speed*2]
      ],
        Scene6
    ],
    [
        "Dick - Dünn - Mittel",
      [
        [7.5*16,3*16,7.5*16,3*16,speed*0]
      ],
        "over"
    ]
]




const Scene4 = [
    [
        [
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0040.png",//0 wall
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0048.png",//1 floor
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0041.png",//2 trap
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0096.png",//3 statue 
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0046.png",//4 door left
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0047.png",//5 door right 
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0019.png",//6 stone statue
        ],
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
            [null, null, null, null, null, null, null, null, null, 2, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 2, 2, 2, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 2, 2, 2, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 2, 2, null, null, null, null, null, null],
            [null, null, null, null, null, null, 2, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 2, 2, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 3, null, null, 3, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
        ]
    ],
    [
        [
            7.5*16,  11*16, 7.5*16, 7*16, speed*4
        ]
    ],
    "Schnell oder Schlau?",
    [
        "Schnell ...",
      [
          [7.5*16,  7*16, 7.5*16, 5*16, speed*2]
      ],
        "over"
    ],
    [
        "Schlau",
        [
            [
                7.5*16,  7*16, 9*16, 7*16, speed*1.5
            ],
            [
                9*16,  7*16, 9*16, 5*16, speed*2
            ],
            [
                9*16,  5*16, 7*16, 5*16, speed*2
            ],
            [
                7*16,  5*16, 7*16, 4*16, speed*1
            ],
            [
                7*16,  4*16, 6*16, 4*16, speed*1
            ],
            [
                6*16,  4*16, 6*16, 1*16, speed*3
            ],
            [
                6*16,  1*16, 7.5*16, 1*16, speed*1.5
            ]
        ],

        Scene5
    ]
]



const Scene3 = [
    [
        [
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0048.png",//0 ground
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0040.png",//1 wall
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0028.png",//2 window
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0096.png",//3 statue 
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0046.png",//4 door left 
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0047.png",//5 door right 
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0042.png",//6 stone floor
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0089.png",//7 chest
            "recources/kenney_tiny-town (compressed)/Tiles/tile_0125.png",//8 wall stone 
            "recources/kenney_tiny-dungeon (compressed)/Tiles/tile_0049.png",//9 dust 
    
        ],
        [
    
        
    
            [1, 1, 1, 2, 4, 5, 2, 8, 8, 2, 4, 5, 2, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 0, 0, 9, 0, 0, 9, 0, 0, 0, 0, 9, 0, 0, 1, 1],
            [1, 9, 0, 0, 0, 0, 9, 0, 9, 0, 0, 0, 0, 0, 1, 1],
            [1, 0, 0, 0, 0, 9, 0, 0, 9, 0, 0, 0, 9, 0, 6, 6],
            [1, 0, 0, 0, 0, 0, 0, 9, 0, 0, 9, 0, 0, 0, 6, 6],
            [1, 0, 0, 9, 0, 0, 9, 0, 9, 0, 0, 0, 0, 0, 1, 1],
            [1, 9, 0, 0, 0, 9, 0, 0, 9, 0, 9, 0, 9, 0, 1, 1],
            [1, 0, 0, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 9, 0, 9, 0, 0, 0, 0, 9, 0, 0, 9, 0, 9, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        [
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, 7, 3, null, null, null, null, null, null, null, null, null, 3, 7, null, null],
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
    ],
    [
        [
            15*16,  4.5*16, 7.5*16, 4.5*16, speed*7.5
        ],
        [
            7.5*16, 4.5*16, 7.5*16, 1*16, speed*3.5
        ]
    ],
    "STHCER",
    [
        "Gehe links ...",
      [
          [7.5*16, 1*16, 7.5*16, 1*16, speed*0]
      ],
        "over"
    ],
    [
        "Gehe rechts ...",
      [
        [7.5*16, 1*16, 10*16, 1*16, speed*2.5]
      ],
        Scene4
    ]
]



const Scene2 = [
    [
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
            [null, null, null, null, null, null, null, null, null, null, null, null, null, 8, 9, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, 6, 7, null],
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
    
    ],
    [
        [0*16,    8*16, 13.5*16, 8*16, speed*13.5],
        [13.5*16, 8*16, 13.5*16, 2*16, speed*6]
    ],
    "Bist du dir sicher, diesen Weg weiter zugehen?",
    [
        "Auf jeden Fall!",
      [
          [13.5*16, 2*16, 13.5*16, 2*16,speed*0]
      ],
        Scene3
    ],
    [
        "Lieber doch nicht.",
      [
        [13.5*16, 2*160, 13.5*16, 2*16,speed*0]
      ],
        "over"
    ]
]



const Scene1 = [
    [
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
    ],
    [
        [
            7*16, 2*16, 7*16, 3*16, speed*1
        ],
        [
            7*16, 3*16, 9*16, 3*16, speed*2
        ],
        [
            9*16, 3*16, 9*16, 9*16, speed*6
        ],
        [
            9*16, 9*16, 8*16, 9*16, speed*1
        ]
    ],
    "Der Schulleiter gibt dir ein Buch mit dem Plan der Ruine. </br> Dort musst du einige Rätsel lösen. Nimmst diese Aufgebe an?",
    [
        "Dafür bin ich genau der Richtige!",
      [
          [8*16,9*16,8*16,9*16,speed*0]
      ],
        Scene2
    ],
    [
        "Frag lieber jemand anderen.",
      [
        [8*16,9*16,8*16,9*16,speed*0]
      ],
        "over"
    ]
]


const Scene0 = [
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
        [6*16,8*16,6*16,8*16,speed*0]
    ],
    "Hast du lust zu spielen?",
    [
        "Nee, heute nicht.",
      [
          [6*16,8*16,6*16,8*16,speed*0]
      ],
        "over"
    ],
    [
        "Natürlich doch!",
      [
        [6*16, 8*16, 5*16, 8*16,speed*1],
        [5*16 ,8*16,5*16, 10*16,speed*2],
        [5*16, 10*16, 2.3*16, 10*16,speed*3]
      ],
        Scene1
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
 })
 async function loadStart(){
    await sleep(1)
    drawTilemap(Scene0[0]) //needs to set to first scene
 }

 document.getElementById("overBtn").onclick = function() {
    location.reload()
 }

function Endstart(){
    if (!document.getElementById("startOverlay").classList.contains("hidden")){
        document.getElementById("startOverlay").classList.add("hidden");
        document.getElementById("startBtn").remove()
        renderScene(Scene0) //needs to set to first scene
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
    StartWalkTime += StartWalkTime/5

    for (let i = 0; i<EndWalkArray1.length; i++){
        EndWalkTime1 += EndWalkArray1[i][4]
    }
    EndWalkTime1 += EndWalkTime1/5

    for (let i = 0; i<EndWalkArray2.length; i++){
        EndWalkTime2 += EndWalkArray2[i][4]
    }
    EndWalkTime2 += EndWalkTime2/5

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
                    document.getElementById("end").remove()
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
