let score1= document.getElementById("score1")
let score2= document.getElementById("score2")

let count1=0
let count2=0

function add1to1(){
    count1++
    score1.textContent=count1
    
}

function add2to1(){
    count1+=2
    score1.textContent=count1
    
}

function add3to1(){
    count1+=3
    score1.textContent=count1
    
}

function add1to2(){
    count2++
    score2.textContent=count2
    
}

function add2to2(){
    count2+=2
    score2.textContent=count2
    
}

function add3to2(){
    count2+=3
    score2.textContent=count2
}