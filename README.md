# lat-long

Find the distance between two coordinates, or the center coordinates of multiple.

## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Responses](#responses)
  * [latLngCenter](#latlngcenter)
  * [latLngDistance](#latlongdistance)
* [License](#license)

## Install

[npm][]:

```sh
npm i lat-long
```

[yarn][]:

```sh
yarn add lat-long
```

## Usage

```js
import { latLngCenter, latLngDistance } from "lat-long"

latLngCenter([[40.739683, 73.985151], [40.730601, 74.000447], [40.742256, 74.006344], [40.691805, 73.908089]])
//=> { lat: 40.72609295152872, long: 73.97499628519203, zoom: 11 }

latLngDistance([40.739683, 73.985151], [40.730601, 74.000447])
//=> 1.6373159082193258
```

## Responses

### latLngCenter

An object will be returned with lat, lng and zoom keys.

Response: `Object`

| Key | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `lat`      | `float` | The central latitude coordinate between all provided coordinates. |
| `lng`      | `float` | The central longitude coordinate between all provided coordinates.  |
| `zoom` | `int` | The zoom level required by google maps to fit all coordinates in display. |

Object:
```json
{ 
    "lat": 40.72609295152872, 
    "lng": 73.97499628519203, 
    "zoom": 11 
}
```

### latLongDistance

An integer will be returned with the distance between two points in kilometers.

Response:
`int`

## License

[MIT](LICENSE) © 2022 Rory Dobson

##

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/