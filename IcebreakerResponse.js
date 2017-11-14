function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(){
  return IcebreakerResponse.map(function(email){
    return new User(email[0], email[1])
  })  
}
