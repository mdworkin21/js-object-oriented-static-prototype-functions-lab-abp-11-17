function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(){
  return IcebreakerResponse.map(function(userdata){
    return new User(userdata[0], userdata[1])
  })
}
