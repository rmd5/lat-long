const { latLngCenter, latLngDistance } = require("./index")

console.log(latLngCenter([[40.739683, 73.985151],
[40.730601, 74.000447],
[40.742256, 74.006344],
[40.691805, 73.908089]]))
console.log(latLngCenter())
console.log(latLngDistance([40.739683, 73.985151], [40.730601, 74.000447]))
console.log(latLngDistance())
