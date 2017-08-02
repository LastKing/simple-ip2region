/**
 * Created by toonew on 2017/7/10.
 */
const mapRegion = require('./map_region.json');

//获得省
function getProvince(ip_area_content) {
  let ipArr = ip_area_content.split('|');
  return !!ipArr[2] ? mapRegion[ipArr[2]] : '';
}

//获得市
function getCity(ip_area_content) {
  let ipArr = ip_area_content.split('|');
  return !!ipArr[3] ? mapRegion[ipArr[3]] : '';
}

//匹配广告市和省
function check(ad, province, city) {
  if (!ad.iparea) return true;

  if (ad.iparea.search(province) >= 0) {
    return true;
  }
  return ad.iparea.search(city) >= 0;
}

module.exports = {getProvince, getCity, check};
