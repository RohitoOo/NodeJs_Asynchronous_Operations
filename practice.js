// Error First call Back 

myCallback = (err, data) => {
if(err){
    return; 
}
else {
    console.log(data)
}
}

mainFunction = (callback) => {
    callback( new Error("I am an Error Message"), "Some Result")
}

mainFunction(myCallback)



// Call Backs 


// first(2, function(firstResult, err){
//     if(err){
//        console.log(err) 
//     }else {
//         second(firstResult, function(secondResult, err){
//             if(err){
//                 console.log(err)
//             }else {
//                 third(secondResult, function(thirdResult, err){
//                     if(err){
//                         console.log(err)
//                     }else{
//                         console.log({thirdResult})
//                     }
//                 })
//             }
//         })
//     }
// } )



// function first(value, callback) {callback( value + 1, false)}

// function second(value, callback){
//     callback( value + 1, false)
// }

// function third(value, callback){
//     callback( value + 1, false)
// }






// Call Backs 




// first(2, function(firstResult, err){
//     console.log("I'm Called First")
//     if(err){
//         // Error Handling
//         return;
//     }else {
//         second(firstResult, function(secondResult, err){
//             console.log("I'm Called Second")
//             if(err){
//                 console.log(err)
//             }else {
//                 third(secondResult, function(thirdResult, err){
//                     console.log("I'm called Third :(")
//                     if(err){
//                         throw err;
//                     }else {
//                         console.log({firstResult})
//                         console.log({secondResult})
//                         console.log({thirdResult})
//                     }
//                 })
//             }
//         })
//     }
// })


// function first(value, callback){
//     callback( value + 1 , false)
// }

// function second(value, callback){
//     callback( value +1 , false)
// }

// function third(value, callback){
//     callback( value +1 , false)
// }

// const promise = new Promise( (resolve, reject) => {
//     resolve(2)
// })


function first(value){
    return value + 1 
}
function second(value){
    return value + 1 
}    
function third(value){
    return value + 1 
}
const promise = new Promise( (resolve, reject) => {
    resolve(2)
})

promise.then(first).then(second).then(third).then(result => { console.log({result})})
