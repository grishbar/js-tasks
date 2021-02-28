/**
 * Напишите функцию sum(x), вычисляющую суммы подобным образом:
 * sum() === 0
 * sum(1)(2)() === 3
 * sum(1)(2)(3)() === 6
 *
 * Возможно чуть более понятная нотация для любителей функциональщины:
 * sum :: Number -> sum
 * sum :: void -> Number
 *
 */


// функция для  бесконечного карирования любой функции с любым количеством аргументов
const infiniteCurry = fn => {
  const next = (...args) => {
    return x => {
      if (x === undefined) {
        return args.reduce((acc, a) => {
          return fn.call(fn, acc, a);
        }, 0);
      }
      return next(...args, x);
    };
  };

  return next();
};

/**
* @param {*} x число или undefined
* @returns а это уже сами решите
*/
const sum = infiniteCurry((x, y) => x + y);

export default sum;
