const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(activity) {

  let sampleActivity = parseFloat(activity);

  if (isNaN(sampleActivity) || sampleActivity <= 0 || sampleActivity > 15 || typeof(activity) !== "string" || activity == "") {
    return false;
  }
  else {
    const n0n = MODERN_ACTIVITY/sampleActivity;
    let k = 0.693/HALF_LIFE_PERIOD;
    let t = Math.ceil((Math.log(n0n))/k);
    return t;
  }
};
