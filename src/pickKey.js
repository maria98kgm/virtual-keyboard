let nowWatch = ['Delete','Shift','Win','Alt','Ctrl','Del'];

export default function pickKey(str, symb) {
  if (nowWatch.includes(symb)) return str;
  if (symb == 'Backspace') return str.slice(0, -1);
  if (symb == 'Enter') return str+'\n';
  if (symb == 'Tab') return str+'    ';
  return str+symb;
}