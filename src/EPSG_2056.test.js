'use strict';
import EPSG_2056 from './EPSG_2056.js';

import {getTransform} from 'ol/proj.js';

test('transform from EPSG:4326 to EPSG:2056', () => {
  const transform = getTransform('EPSG:4326', EPSG_2056);
  expect(transform([6.57243, 46.51336]).map(Math.floor)).toEqual([2533522, 1151707]);
});
