/**
 * Напишите функцию rle(input), реализующую примитивное RLE-сжатие входящей строки input.
 * Подробнее об RLE: https://ru.wikipedia.org/wiki/Кодирование_длин_серий
 *
 * Входящая строка сооттветствует regex паттерну /^[A-Z]+$/
 *
 * Пример:
 * rle('AAAB') === 'A3B'
 * rle('BCCDDDEEEE') === 'BC2D3E4'
 *
 * Больше примеров в тестах.
 *
 * @param  {string} input
 * @return {string}
 */
export default function rle(input) {
  let result = '';

  for (let i = 0; i < input.length; i++) {
    const currentSymbol = input[i];
    const currentIndex = i;

    while (currentSymbol === input[i + 1]) {
      i += 1;
    }

    const currentSymbolRepeats = i - currentIndex + 1;

    result += currentSymbol + (currentSymbolRepeats === 1 ? '' : currentSymbolRepeats);
  }

  return result;
}
