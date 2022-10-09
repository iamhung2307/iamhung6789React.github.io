export function convertMoney(num) {
  return num.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}
