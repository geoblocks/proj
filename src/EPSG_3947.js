import lcc from './lcc.js';
import {create} from './utils.js';

const def = `
  +proj=${lcc}
  +lat_1=46.25
  +lon_0=3
  +lat_0=47
  +lat_2=47.75
  +x_0=1700000
  +y_0=6200000
  +ellps=GRS80
  +towgs84=0,0,0,0,0,0,0
  +units=m
  +no_defs
`;
const extent = [619993.48, 5637784.91, 2212663.72, 6731809.22];

export const proj = create('EPSG:3947', def, extent);

export default proj;
