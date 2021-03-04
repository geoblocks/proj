import somerc from './somerc.js';
import {create} from './utils.js';

const def = `
  +proj=${somerc}
  +lat_0=46.95240555555556
  +lon_0=7.439583333333333
  +k_0=1
  +x_0=2600000
  +y_0=1200000
  +ellps=bessel
  +towgs84=674.374,15.056,405.346,0,0,0,0
  +units=m
  +no_defs
`;
const extent = [2420000, 1030000, 2900000, 1350000];

const proj = create('EPSG:2056', def, extent);

export default proj;
