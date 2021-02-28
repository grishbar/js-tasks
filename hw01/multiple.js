/**
 * Напишите функцию multiple(a, b), умножающую число a на число b,
 * не используя оператор "*" или метод Math.imul.
 *
 * Пример:
 * multiple(1, 1) === 1
 * multiple(1, 2) === 2
 * multiple(0, 0) === 0
 *
 * Больше примеров в тестах.
 *
 * @param  {number} a любое целое число
 * @param  {number} b любое целое число
 * @return {number}
 */

// console.log(multiple(0, Infinity));


export default function multiple(a, b) {
  let result = 0;

  if (a === Infinity || b === Infinity || a === -Infinity || b === -Infinity) {
    if (a === 0 || b === 0) {
      return NaN;
    }
    return Number.isNaN(a + b) ? -Infinity : (a + b);
  }

  for (let i = 0; i < Math.abs(b); i++) {
    result += a;
  }

  return b < 0 ? -result : result;
}

// Полифилл Math.imul
/*
export default function multiple(a, b) {
  let ah = (a >>> 16) & 0xffff;
  let al = a & 0xffff;
  let bh = (b >>> 16) & 0xffff;
  let bl = b & 0xffff;

  // сдвиг на 0 бит закрепляет знак в старшей части числа
  // окончательный |0 преобразует беззнаковое значение обратно в знаковое значение
  return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
}
*/
