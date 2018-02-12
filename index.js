function iterativeLog(array){
  array.forEach(function(element, index){
    console.log (`${index}: ${element}`)
  })
  return iterativeLog
}



let array = [1, 2, 3]
function iterate(callback){


 array.forEach(callback)
   
 }


function doToArray(array, callback){
  array.forEach(callback)
}
