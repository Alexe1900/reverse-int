module.exports = function reverse (n) {
  let a = String(Math.abs(n)).split('');
  a.reverse()
  return Number(a.join(''))
}
