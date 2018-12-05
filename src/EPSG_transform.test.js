import EPSG_2056, {proj as epsg2056Proj} from './EPSG_2056.js';
import EPSG_21781, {proj as epsg21781Proj} from './EPSG_21781.js';
import EPSG_2154, {proj as epsg2154Proj} from './EPSG_2154.js';
import EPSG_32631, {proj as epsg32631Proj} from './EPSG_32631.js';
import EPSG_27572, {proj as epsg27572Proj} from './EPSG_27572.js';
import EPSG_3947, {proj as epsg3947Proj} from './EPSG_3947.js';


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
}, {
  import: EPSG_2154,
  code: 'EPSG:2154',
  proj: epsg2154Proj,
  lonlat: [5.641029, 45.16273],
  expected: [907468, 6454962],
  units: 'm',
  global: false
}, {
  import: EPSG_32631,
  code: 'EPSG:32631',
  proj: epsg32631Proj,
  lonlat: [5.641029, 45.16273],
  expected: [707563, 5004421],
  units: 'm',
  global: false
}, {
  import: EPSG_27572,
  code: 'EPSG:27572',
  proj: epsg27572Proj,
  lonlat: [5.641029, 45.16273],
  expected: [859806, 2023478],
  units: 'm',
  global: false
}, {
  import: EPSG_3947,
  code: 'EPSG:3947',
  proj: epsg3947Proj,
  lonlat: [5.641029, 45.16273],
  expected: [1907694, 5999266],
  units: 'm',
  global: false
},
];

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

