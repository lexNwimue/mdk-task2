import haversine from "haversine-distance";

//First point in your haversine calculation
let airport1 = { lat: 6.1754, lng: 106.8272 };

//Second point in your haversine calculation
let airport2 = { lat: 6.1352, lng: 106.8133 };

let haversine_m = haversine(point1, point2); //Results in meters (default)
let haversine_km = haversine_m / 1000; //Results in kilometers

return haversine_km * 10; // Amount for payment

console.log("distance (in meters): " + haversine_m + "m");
console.log("distance (in kilometers): " + haversine_km + "km");
