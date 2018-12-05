import EPSG_2056, {proj as epsg2056Proj} from './EPSG_2056.js';
import EPSG_21781, {proj as epsg21781Proj} from './EPSG_21781.js';

import {getTransform} from 'ol/proj.js';

const values = [{
  import: EPSG_21781,
  code: 'EPSG:21781',
  proj: epsg21781Proj,
  lonlat: [6.57243, 46.51336],
  expected: [533522, 151707],
  units: 'm',
  global: false
}, {
  import: EPSG_2056,
  code: 'EPSG:2056',
  proj: epsg2056Proj,
  lonlat: [6.57243, 46.51336],
  expected: [2533522, 1151707],
  units: 'm',
  global: false
}];

for (const spec of values) {
  test(`have an EPSG code ${spec.code}`, () => {
    expect(spec.import).toBe(spec.code);
  });

  test(`transform from EPSG:4326 to ${spec.code} to be correct`, () => {
    const transform = getTransform('EPSG:4326', spec.code);
    expect(transform(spec.lonlat).map(Math.floor)).toEqual(spec.expected);
  });

  test(`provide an OpenLayers projection for ${spec.code}`, () => {
    const proj = spec.proj;
    expect(proj.getCode()).toBe(spec.code);
    expect(proj.getUnits()).toBe(spec.units);
    expect(proj.isGlobal()).toBe(spec.global);
  });
}

