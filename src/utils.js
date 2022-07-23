import {get as getProjection} from 'ol/proj.js';
import {register} from 'ol/proj/proj4.js';
import proj4 from 'proj4/lib/index.js';

/**
 *
 * @param {string} code
 * @param {any} def
 * @param {import('ol/extent').Extent} extent
 * @return {import('ol/proj/Projection').default}
 */
export function create(code, def, extent) {
  proj4.defs(code, def.trim());
  register(proj4);

  const proj = /** @type {import('ol/proj/Projection').default} */ (getProjection(code));
  proj.setExtent(extent);
  return proj;
}
