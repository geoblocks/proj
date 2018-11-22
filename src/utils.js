/**
 * @module
 */
import {get as getProjection} from 'ol/proj.js';
import {register} from 'ol/proj/proj4.js';
import proj4 from 'proj4/lib/index.js';

register(proj4);

export function create(code, def, extent) {
  proj4.defs(code, def);
  const proj = getProjection(code);
  proj.setExtent(extent);
  return proj;
}
