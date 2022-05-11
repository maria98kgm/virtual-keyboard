let nowWatch = ['Delete','Shift','Win','Alt','Ctrl','CapsLock'];
let start;
export default function pickKey(text, key) {
  start = text.value.length-1;
  if (text.selectionStart !== start) {
    start = text.selectionStart;
  }
  else start = text.value.length;
  setTimeout(() => {
    text.focus();
    text.setSelectionRange(start + 1, start + 1);
  }, 50);
  if (nowWatch.includes(key)) start--;
  else if (key == 'Enter') text.value = text.value.slice(0, start) + '\n' + text.value.slice(start, text.value.length);
  else if (key == 'Backspace') {
    if (text.selectionStart == text.selectionEnd) {
      text.value = text.value.slice(0, start-1) + text.value.slice(start, text.value.length);
      start -= 2;
    }
    else {
      text.value = text.value.slice(0, text.selectionStart) + text.value.slice(text.selectionEnd, text.value.length);
      start--;
    }
  }
  else if (key == 'Del') {
    text.value = text.value.slice(0, start) + text.value.slice(start + 1, text.value.length);
    start--;
  }
  else if (key == 'Tab') {
    text.value = text.value.slice(0, start) + '   ' + text.value.slice(start, text.value.length);
    start += 2;
  }
  else if (key == '') text.value = text.value.slice(0, start) + ' ' + text.value.slice(start, text.value.length);
  else text.value = text.value.slice(0, start) + key + text.value.slice(start, text.value.length);
}