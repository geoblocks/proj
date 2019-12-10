import somerc from './somerc.js';
import {create} from './utils.js';

export const code = 'EPSG:21781';

const def = `
  +proj=${somerc}
  +lat_0=46.95240555555556
  +lon_0=7.439583333333333
  +k_0=1
  +x_0=600000
  +y_0=200000
  +ellps=bessel
  +towgs84=674.374,15.056,405.346,0,0,0,0
  +units=m
  +no_defs
`;
const extent = [420000, 30000, 900000, 350000];

export const proj = create(code, def, extent);

export default code;
