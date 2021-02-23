let cityInfo = {
  cityName: '全部',
  cityId: '0',
  field: 'all'
}

try {
  if(localStorage.cityInfo) {
    cityInfo = JSON.parse(localStorage.cityInfo);
  }
} catch (e) {}

export default cityInfo