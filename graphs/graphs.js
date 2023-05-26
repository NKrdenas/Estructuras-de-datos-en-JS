/*
 2-0
/\
1-3
*/

// Edge list

const edgeList=[
    [0, 2],
    [2, 3],
    [2, 1],
    [1, 3]
]
// Adjacent list
      //             0     1        2        3
const adjacentList=[[2], [2,3], [0, 1, 3], [1,2]  ]

let  adjacentList2 = {
    0: [2],
    1: [2,3],
    2: [0, 1, 3],
    3: [1,2]
}

// Adjacent Matrix
const adjacentMatrix = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]
const adjacentMatrix2 = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0]
}