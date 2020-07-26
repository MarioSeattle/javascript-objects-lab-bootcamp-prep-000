var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  
  //return value with the original key value pairs 
  //and the new key value pairs
  
 return Object.assign({}, object, {[key]: value});
 
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  
  object[key] = {value};
  
  return Object;

}

  
