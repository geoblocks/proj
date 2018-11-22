/**
 * @module ngeo.proj.utm
 */
import proj4 from 'proj4/lib/core.js';
import utm from 'proj4/lib/projections/utm.js';


proj4.Proj.projections.add(utm);


export default 'utm';
