import utm from './utm.js';
import {create} from './utils.js';

const def = `
  +proj=${utm}
  +zone=31
  +ellps=WGS84
  +datum=WGS84
  +units=m
  +no_defs
`;
const extent = [166021.44, 0.0, 534994.66, 9329005.18];

export const proj = create('EPSG:32631', def, extent);

export default proj;
