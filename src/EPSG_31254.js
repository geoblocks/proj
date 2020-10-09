import tmerc from './tmerc.js';
import {create} from './utils.js';

export const code = 'EPSG:31254';

const def = ` 
  +proj=${tmerc}
  +lat_0=0
  +lon_0=10.33333333333333
  +k=1
  +x_0=0
  +y_0=-5000000
  +ellps=bessel
  +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232
  +units=m
  +no_defs
  +axis=neu
`;
const extent = [-61758.89, 140394.51, 499917.82, 453931.14];

export const proj = create(code, def, extent);

export default code;
