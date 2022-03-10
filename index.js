function rad2degr(rad) { return rad * 180 / Math.PI; }
function degr2rad(degr) { return degr * Math.PI / 180; }

function latLngCenter(latLngInDegr) {
    let LATIDX = 0;
    let LNGIDX = 1;
    let sumX = 0;
    let sumY = 0;
    let sumZ = 0;
    let meters = 0;

    for (var i = 0; i < latLngInDegr.length; i++) {
        let lat = degr2rad(latLngInDegr[i][LATIDX]);
        let lng = degr2rad(latLngInDegr[i][LNGIDX]);
        // sum of cartesian coordinates
        sumX += Math.cos(lat) * Math.cos(lng);
        sumY += Math.cos(lat) * Math.sin(lng);
        sumZ += Math.sin(lat);
        if (i < latLngInDegr.length - 1) {
            let dist = distance(latLngInDegr[i][LATIDX], latLngInDegr[i][LNGIDX], latLngInDegr[i + 1][LATIDX], latLngInDegr[i + 1][LNGIDX])
            if (dist > meters) meters = dist
        }
    }

    meters *= 1000
    var zoomfactor = 1;
    if (meters < 1128) zoomfactor = 15
    else if ((meters > 1128) && (meters <= 2256)) zoomfactor = 14
    else if ((meters > 2256) && (meters <= 4513)) zoomfactor = 13
    else if ((meters > 4513) && (meters <= 9027)) zoomfactor = 12
    else if ((meters > 9027) && (meters <= 18055)) zoomfactor = 11
    else if ((meters > 18055) && (meters <= 36111)) zoomfactor = 10
    else if ((meters > 36111) && (meters <= 72223)) zoomfactor = 9
    else if ((meters > 72223) && (meters <= 144447)) zoomfactor = 8
    else if ((meters > 144447) && (meters <= 288895)) zoomfactor = 7
    else if ((meters > 288895) && (meters <= 577790)) zoomfactor = 6
    else if ((meters > 577790) && (meters <= 1155581)) zoomfactor = 5
    else if ((meters > 1155581) && (meters <= 2311162)) zoomfactor = 4
    else if ((meters > 2311162) && (meters <= 4622324)) zoomfactor = 3
    else if ((meters > 4622324) && (meters <= 9244649)) zoomfactor = 2
    else if (meters > 9244649) zoomfactor = 1

    let avgX = sumX / latLngInDegr.length;
    let avgY = sumY / latLngInDegr.length;
    let avgZ = sumZ / latLngInDegr.length;

    // convert average x, y, z coordinate to latitude and longtitude
    let lng = Math.atan2(avgY, avgX);
    let hyp = Math.sqrt(avgX * avgX + avgY * avgY);
    let lat = Math.atan2(avgZ, hyp);

    return ({
        lat: rad2degr(lat), 
        long: rad2degr(lng), 
        zoom: zoomfactor
    });
}

function latLongDistance(lat1, lon1, lat2, lon2) {
    var p = 0.017453292519943295;    // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p) / 2 +
        c(lat1 * p) * c(lat2 * p) *
        (1 - c((lon2 - lon1) * p)) / 2;

    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

let functions = {
    latLngCenter,
    latLongDistance
}

module.exports = functions