export const Rooms = () => fetch('stays.json').then(res => res.json())

export const citys = (location) => {
  return [...new Set(location.map(data => data.city + ', ' + data.country))];
}