function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(data){
  return data.map(function(userdata){
    return new IcebreakerResponse(userdata[0], userdata[1])
  })
}
