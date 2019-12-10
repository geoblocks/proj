import lcc from './lcc.js';
import {create} from './utils.js';

export const code = 'EPSG:2154';

const def = `
  +proj=${lcc}
  +lat_0=46.5
  +lon_0=3
  +lat_1=49
  +lat_2=44
  +x_0=700000
  +y_0=6600000
  +ellps=GRS80
  +towgs84=0,0,0,0,0,0,0
  +units=m
  +no_defs
`;
const extent = [-378305.81, 6093283.21, 1212610.74, 7186901.68];

export const proj = create(code, def, extent);

export default code;
