var data = require('./upwork_jobs.json')
let x = function(a){
    return a.Posted.includes('hours')
}
data=data.filter(x)
let y = data.map(x => x.Posted.split(" "))
let max=0; let arr=[]
for(let i=0;i<y.length;i++){
    if(y[i][0]>max){
        max = y[i][0]
        arr=[]
        arr.push(data[i].Title)
    }else if(y[i][0]==max){
        arr.push(data[i].Title)
    }
}
for(let i = 0; i<arr.length;i++){
    console.log(arr[i])
}


/*
To who is reading this, this was my original solution. 
I have redone it to practice the different methods.
*/
// var data = require('./upwork_jobs.json')
// let x = function(a){
//     return a.Posted.includes('hours')
// }
// data=data.filter(x)
// for(let i = 0;i<data.length;i++){
//     let string = data[i].Posted
//     let stringArray = string.split(" ")
//     time = stringArray[0]*60
//     if(time >max){
//         max = time
//         arr=[]
//         arr[0]=data[i].Title
//     }
//     else if(time == max){
//         arr.push(data[i].Title)
//     } 
// }
// for(let i = 0; i<arr.length;i++){
//     console.log(arr[i])
// }

