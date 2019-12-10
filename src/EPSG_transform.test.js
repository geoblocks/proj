import {
  EPSG_2056,
  EPSG_21781,
  EPSG_2154,
  EPSG_32631,
  EPSG_27572,
  EPSG_3947,
  EPSG_31254,
} from '.';

import {getTransform} from 'ol/proj.js';

const values = [{
  import: EPSG_21781,
  code: 'EPSG:21781',
  lonlat: [6.57243, 46.51336],
  expected: [533522.657, 151707.457],
  units: 'm',
  global: false
}, {
  import: EPSG_2056,
  code: 'EPSG:2056',
  lonlat: [6.57243, 46.51336],
  expected: [2533522.657, 1151707.457],
  units: 'm',
  global: false
}, {
  import: EPSG_2154,
  code: 'EPSG:2154',
  lonlat: [5.641029, 45.16273],
  expected: [907468.26, 6454962.068],
  units: 'm',
  global: false
}, {
  import: EPSG_32631,
  code: 'EPSG:32631',
  lonlat: [5.641029, 45.16273],
  expected: [707563.11, 5004421.338],
  units: 'm',
  global: false
}, {
  import: EPSG_27572,
  code: 'EPSG:27572',
  lonlat: [5.641029, 45.16273],
  expected: [859806.91, 2023478.232],
  units: 'm',
  global: false
}, {
  import: EPSG_3947,
  code: 'EPSG:3947',
  lonlat: [5.641029, 45.16273],
  expected: [1907694.866, 5999266.134],
  units: 'm',
  global: false
}, {
  import: EPSG_31254,
  code: 'EPSG:31254',
  lonlat: [13.35, 47.71],
  expected: [226395.65, 290116.70],
  units: 'm',
  global: false
},
];

for (const spec of values) {
  test(`have an EPSG code ${spec.code}`, () => {
    expect(spec.import.code).toBe(spec.code);
  });

  test(`transform from EPSG:4326 to ${spec.code} to be correct`, () => {
    const transform = getTransform('EPSG:4326', spec.code);
    const coords = transform(spec.lonlat);
    expect(coords[0]).toBeCloseTo(spec.expected[0], 2);
    expect(coords[1]).toBeCloseTo(spec.expected[1], 2);
  });

  test(`transform from ${spec.code} to  EPSG:4326 to be correct`, () => {
    const transform = getTransform(spec.code, 'EPSG:4326');
    const coords = transform(spec.expected);
    expect(coords[0]).toBeCloseTo(spec.lonlat[0], 7);
    expect(coords[1]).toBeCloseTo(spec.lonlat[1], 7);
  });

  test(`provide an OpenLayers projection for ${spec.code}`, () => {
    const proj = spec.import.proj;
    expect(proj.getCode()).toBe(spec.code);
    expect(proj.getUnits()).toBe(spec.units);
    expect(proj.isGlobal()).toBe(spec.global);
  });
}

