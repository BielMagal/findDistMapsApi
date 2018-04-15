function findDist(start_address, end_address, type_mode, return_type) {
  var city_address = ", Belo Horizonte, MG";
  var car = "carro";
  var foot = "andando";
  var bus = "onibus";
  var distance = "distancia";
  var duration = "tempo";
  var map = Maps.newDirectionFinder();
  
  map.setOrigin(start_address + city_address);
  map.setDestination(end_address + city_address);
  
  if(type_mode == foot)
    type_mode = Maps.DirectionFinder.Mode.WALKING;
  else if(type_mode == bus)
    type_mode = Maps.DirectionFinder.Mode.TRANSIT;
  else if(type_mode == car)
    type_mode = Maps.DirectionFinder.Mode.DRIVING;
  else
    return "invalid type_mode: " + type_mode + ", use \'" + car + "\', \'" + foot + "\' or \'" + bus + "\'.";
  map.setMode(type_mode);
  
  var directions = map.getDirections();
  var data = directions["routes"][0]["legs"][0];
  
  if(return_type == distance)
    return data["distance"]["value"] / 1000;
  else if(return_type == duration)
    return data["duration"]["value"] / 60;
  else
    return "Invalid return type: " + return_type + ", use \'" + distance + "\' or \'" + duration + "\'.";
}