/**
 * @module ngeo.proj.somerc
 */
import proj4 from 'proj4/lib/index.js';
import somerc from 'proj4/lib/projections/somerc.js';


proj4.Proj.projections.add(somerc);

export default 'somerc';
