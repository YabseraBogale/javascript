let arr=[
    [0,2,3],
    [4,5,6],
    [7,8,9]
]

function leftmatrixDiagonal(array){
    let arr =array
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i][i]
    }
    return sum
}

function rightmatrixDiagonal(array){
    let arr =array
    let sum=0;
    for(let i=arr.length-1,j=0;i>=0;i--,j++){
        sum+=arr[i][j]
    }
    return sum
}

