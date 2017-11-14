function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(data){
  return data.map(function(userdata){
    return new IcebreakerResponse(userdata, userdata)
  })
}
