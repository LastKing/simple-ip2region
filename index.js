/**
 * Created by toonew on 2017/8/2.
 */
const ip2region = require('./lib/ip2region');
const ip2regionDB = require('./lib/ip2region.db');
const mapRegion = require('./lib/map_region');
const ipAreaUtil = require('./lib/ip_area_util');

module.exports = {
  ip2region,
  ip2regionDB,
  mapRegion,
  ipAreaUtil
};