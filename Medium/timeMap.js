const TimeMap = () => {
  this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  let v = this.map.get(key) ?? [];
  v.push([timestamp, value]);
  this.map.set(key, v);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  let arr = this.map.get(key);
  if (!arr) return "";

  let value = "";
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (
      arr[mid][0] <= timestamp &&
      (arr[mid + 1]?.[0] > timestamp || mid === arr.length - 1)
    ) {
      value = arr[mid][1];
      break;
    }

    if (arr[mid][0] <= timestamp) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return value;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
