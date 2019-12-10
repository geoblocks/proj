import lcc from './lcc.js';
import {create} from './utils.js';

export const code = 'EPSG:27572';

const def = `
  +proj=${lcc}
  +lat_0=46.8
  +lon_0=0
  +lat_1=46.8
  +k_0=0.99987742
  +x_0=600000
  +y_0=2200000
  +ellps=GRS80
  +a=6378249.2
  +b=6356515
  +towgs84=-168,-60,320,0,0,0,0
  +pm=paris
  +units=m
  +no_defs
`;
const extent = [5168.43, 1730142.53, 1013247.2, 2698564.2];

export const proj = create(code, def, extent);

export default code;
