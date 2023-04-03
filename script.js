let word ="my name is mustafa eisa ibrahim eisa mustafa"
let splitName = word.split( " ")
let obj ={}
for(const item of splitName){
  if(obj[item] ===undefined){
    obj[item ]=1
  }else{
    obj[item] += 1 
  }
}
console.log(obj)
