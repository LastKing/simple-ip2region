/**
 * Created by toonew on 2017/8/2.
 */
const path = require('path');
const ip2region = require('./lib/ip2region');
const mapRegion = require('./lib/map_region');
const ipAreaUtil = require('./lib/ip_area_util');

const ip2regionDBPath = path.join(__dirname, './lib/ip2region.db');

module.exports = {
  ip2region,
  ip2regionDBPath,
  mapRegion,
  ipAreaUtil
};

console.log(ip2regionDBPath);