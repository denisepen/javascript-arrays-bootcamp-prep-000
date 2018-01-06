var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, element){
  const newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array = [element, ...array]
  return array
}
function addElementToEndOfArray (array, elememt){
  const newArray = [...array, element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element){ 
  array = [...array, element]
  return array
  
}