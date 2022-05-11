import './style.css';
import pickKey from './pickKey.js';
import shift from './shiftOne.js';
import caps from './caps.js';

let engKeys = [['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'], ['Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\','Del'], ['CapsLock','a','s','d','f','g','h','j','k','l',';','\'','Enter'], ['Shift','z','x','c','v','b','n','m',',','.','/','▲','Shift'], ['Ctrl','Win','Alt','','Alt','◄','▼','►','Ctrl']];

let shiftEngKeys = [['~','!','@','#','$','%','^','&','*','(',')','_','+','Backspace'], ['Tab','Q','W','E','R','T','Y','U','I','O','P','{','}','|','Del'], ['CapsLock','A','S','D','F','G','H','J','K','L',';','\'','Enter'], ['Shift','Z','X','C','V','B','N','M','<','>','?','▲','Shift'], ['Ctrl','Win','Alt','','Alt','◄','▼','►','Ctrl']];

let rusKeys = [['ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'], ['Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\','Del'], ['CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter'], ['Shift','я','ч','с','м','и','т','ь','б','ю','.','▲','Shift'], ['Ctrl','Win','Alt','','Alt','◄','▼','►','Ctrl']];

let shiftRusKeys = [['Ё','!','@','#','$','%','^','&','*','(',')','_','+','Backspace'], ['Tab','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','/','Del'], ['CapsLock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Enter'], ['Shift','Я','Ч','С','М','И','Т','Ь','Б','Ю',',','▲','Shift'], ['Ctrl','Win','Alt','','Alt','◄','▼','►','Ctrl']];

let code = [['Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus', 'Equal', 'Backspace'], ['Tab','KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','Backslash', 'Delete'], ['CapsLock','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','Enter'], ['ShiftLeft','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ArrowUp','ShiftRight'], ['ControlLeft','MetaLeft','AltLeft','Space','AltRight','ArrowLeft','ArrowDown','ArrowRight','ControlRight']];

let lang;
let shiftLang;

function board() {
  if (localStorage.getItem('rus') == 'true') {
    lang = rusKeys;
    shiftLang = shiftRusKeys;
  }
  else {
    lang = engKeys;
    shiftLang = shiftEngKeys;
  }
  let boardCont = document.createElement('div');
  boardCont.classList.add('board');
  for (let i in lang) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (let j in lang[i]) {
      let key = document.createElement('div');
      let text = document.querySelector('#area');
      key.id = code[i][j];
      key.classList.add('keyBox');
      key.innerHTML = `<p>${lang[i][j]}</p>`;
      if (key.textContent == 'Shift') {
        key.addEventListener('mousedown', () => {
          document.querySelector(`#${key.id}`).classList.add('onClick');
          shift(document.querySelector('.board'), code, shiftLang);
        });
        key.addEventListener('mouseup', () => {
          document.querySelector(`#${key.id}`).classList.remove('onClick');
          shift(document.querySelector('.board'), code, lang);
        });
      }
      else if (key.textContent == 'CapsLock') {
        key.addEventListener('mousedown', () => {
          if (document.querySelector(`#${key.id}`).classList.contains('onClick')) {
            document.querySelector(`#${key.id}`).classList.remove('onClick');
            caps(document.querySelector('.board'), code, lang);
          }
          else {
            document.querySelector(`#${key.id}`).classList.add('onClick');
            caps(document.querySelector('.board'), code, lang, true);
          }
        });
      }
      else {
        key.addEventListener('mousedown', () => {
          document.querySelector(`#${key.id}`).classList.add('onClick');
          pickKey(text, key.textContent)
        }); 
        key.addEventListener('mouseup', () => {
          document.querySelector(`#${key.id}`).classList.remove('onClick');
        });
      }
      row.append(key);
    }
    boardCont.append(row);
  }
  return boardCont;
}

document.addEventListener('keydown', function(event) {
  let text = document.querySelector('#area');
  if (document.querySelector(`#${event.code}`)) document.querySelector(`#${event.code}`).classList.add('onClick');
  setTimeout(() => text.focus(), 50);
  if (event.shiftKey && event.altKey) {
    if (lang == engKeys) {
      localStorage.setItem('rus', true);
      board();
    }
    else {
      localStorage.setItem('rus', false);
      board();
    }
  }
  if (event.key == 'Shift') shift(document.querySelector('.board'), code, shiftLang);
  if (event.key == 'CapsLock') {
    if (document.querySelector(`#KeyK`).textContent == document.querySelector(`#KeyK`).textContent.toLowerCase()) caps(document.querySelector('.board'), code, lang, true);
    else {
      caps(document.querySelector('.board'), code, lang);
      document.querySelector(`#${event.code}`).classList.remove('onClick');
    }
  }
  else if (event.key == 'Tab') {
    event.preventDefault();
    pickKey(document.querySelector('#area'), 'Tab');
  }
})

document.addEventListener('keyup', function(event) {
  if (document.querySelector(`#${event.code}`) && event.key !== 'CapsLock') document.querySelector(`#${event.code}`).classList.remove('onClick');
  if (event.key == 'Shift') shift(document.querySelector('.board'), code, lang);
})

function textArea() {
  let area = document.createElement('textarea');
  area.id = 'area';
  return area;
}

function how() {
  let element = document.createElement('div');
  element.id = 'short';
  element.innerHTML = '<p>The keyboard is made on Windows OS<br>Shortcut for changing language: Shift + Alt</p>';
  return element;
}

document.querySelector('body').append(textArea());
document.querySelector('body').append(board());
document.querySelector('body').append(how());

document.interestCohort();