import proj4 from 'proj4/lib/core.js';
import tmerc from 'proj4/lib/projections/tmerc.js';


proj4.Proj.projections.add(tmerc);


export default 'tmerc';
