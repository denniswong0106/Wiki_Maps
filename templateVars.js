app.get('/')
templateVars = {
  user = name, // name of user logged in, from cookie
  maps = [{
    id: map id,
    title: map title,
    description: map description,
    previewImg: map preview img
  }], // maps is an array of objects from db, LIMIT of 20
  favorites = [map id] // array of map ids for the logged in user (from cookie) that the user has favorited
}

app.get('/maps/:id')
templateVars = {
  user = name // name of user logged in, from cookie
  map = {
    id: map id,
    title: map title
  } // object containing information for the map for that id
  favorites = [map id] // array of map ids for the logged in user that the user has favorited
  pins = [{
    title: pin title,
    lat: pin lat,
    lng: pin lng,
    description: pin description,
    img: pin image
  }] // an array of objects for all the pins for that map id
}

app.get('/maps/new')
templateVars = {
  user = name // name of user logged in, from cookie
}

app.get('/maps/:id/edit')
templateVars = {
  user = name // name of user logged in, from cookie
  map = {
    id: map id,
    title: map title,
    description: map description,
    previewImg: map preview img
  } // map info in an object for the map being edited.
}


app.get('/users/:id')
templateVars = {
  user = name // name of user logged in, from cookie
  profileImg = profile img // profile img for the user
  city = user city // city for that user
  mapsFavorited = [{
    id: map id,
    title: map title,
    description: map description,
    previewImg: map preview img
  }] // mapsFavorited is an array of objects for all maps the user has favorited
  mapsContributed = [{
    id: map id,
    title: map title,
    description: map description,
    previewImg: map preview img
  }], // mapsContributed is an array of objects for all maps the user has contributed to
  favorites = [map id] // array of map ids for the logged in user that the user has favorited
}
