import './style.css';
import pickKey from './pickKey.js';

let engKeys = [['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'], ['Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\','Del'], ['CapsLock','a','s','d','f','g','h','j','k','l',';','\'','Enter'], ['Shift','z','x','c','v','b','n','m',',','.','/','▲','Shift'], ['Ctrl','Win','Alt','','Alt','◄','▼','►','Ctrl']];

let shiftEngKeys = [['~','!','@','#','$','%','^','&','*','(',')','_','+','Backspace'], ['Tab','Q','W','E','R','T','Y','U','I','O','P','{','}','|','Del'], ['CapsLock','A','S','D','F','G','H','J','K','L',';','\'','Enter'], ['Shift','Z','X','C','V','B','N','M','<','>','?','▲','Shift'], ['Ctrl','Win','Alt','','Alt','◄','▼','►','Ctrl']];

let rusKeys = [['ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'], ['Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\','Del'], ['CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter'], ['Shift','я','ч','с','м','и','т','ь','б','ю','.','▲','Shift'], ['Ctrl','Win','Alt','','Alt','◄','▼','►','Ctrl']];

let shiftRusKeys = [['Ё','!','@','#','$','%','^','&','*','(',')','_','+','Backspace'], ['Tab','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','/','Del'], ['CapsLock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Enter'], ['Shift','Я','Ч','С','М','И','Т','Ь','Б','Ю',',','▲','Shift'], ['Ctrl','Win','Alt','','Alt','◄','▼','►','Ctrl']];

let code = [['Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus', 'Equal', 'Backspace'], ['Tab','KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','Backslash', 'Delete'], ['CapsLock','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','Enter'], ['ShiftLeft','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ArrowUp','ShiftRight'], ['ControlLeft','MetaLeft','AltLeft','Space','AltRight','ArrowLeft','ArrowDown','ArrowRight','ControlRight']];

let lang = engKeys;
let shiftLang = shiftEngKeys;

function keyBored() {
  const element = document.createElement('div');

  for (let i in lang) {
    const row = document.createElement('div');
    row.classList.add('row')
    for (let j in lang[i]) {
      row.insertAdjacentHTML('beforeend', `<div class="keyBox" id="${code[i][j]}"><p>${lang[i][j]}</p></div>`);
    }
    element.append(row);
  }

  element.classList.add('hello');
  element.id = 'forlop';

  setTimeout(() => {
    let keys = document.querySelectorAll('.keyBox');
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].textContent !== 'CapsLock' && keys[i].textContent !== 'Shift') {
        keys[i].addEventListener("mousedown", function() {
          let el = keys[i];
          document.querySelector('textarea').innerHTML = pickKey(document.querySelector('textarea').textContent, el.textContent);
          document.querySelector(`#${el.id}`).classList.add('onClick');
        });
        keys[i].addEventListener("mouseup", function() {
          let el = keys[i];
          document.querySelector(`#${el.id}`).classList.remove('onClick');
        });
      }
      else {
        if (keys[i].textContent == 'Shift') {
          let el = keys[i];
          el.addEventListener("mousedown", function() {
            document.querySelector(`#${el.id}`).classList.add('onClick');
            let board = document.querySelector(`#forlop`).querySelectorAll('.row');
            for (let i = 0; i < board.length; i++) {
              let rowElms = board[i].querySelectorAll('.keyBox');
              for (let j = 0; j < rowElms.length; j++) {
                rowElms[j].querySelector('p').textContent = shiftLang[i][j];
              }
            }
          });
          el.addEventListener("mouseup", function() {
            document.querySelector(`#${el.id}`).classList.remove('onClick');
            let board = document.querySelector(`#forlop`).querySelectorAll('.row');
            for (let i = 0; i < board.length; i++) {
              let rowElms = board[i].querySelectorAll('.keyBox');
              for (let j = 0; j < rowElms.length; j++) {
                rowElms[j].querySelector('p').textContent = lang[i][j];
              }
            }
          });
        }
        else if (keys[i].textContent == 'CapsLock') {
          let el = keys[i];
          el.addEventListener("mousedown", function() {
            if (el.classList.contains('onClick')) {
              document.querySelector(`#${el.id}`).classList.remove('onClick');
              let board = document.querySelector(`#forlop`).querySelectorAll('.row');
              for (let i = 0; i < board.length; i++) {
                let rowElms = board[i].querySelectorAll('.keyBox');
                for (let j = 0; j < rowElms.length; j++) {
                  let pep = rowElms[j].querySelector('p');
                  if (pep.textContent.length == 1) pep.textContent = pep.textContent.toLowerCase();
                }
              }
            }
            else {
              document.querySelector(`#${el.id}`).classList.add('onClick');
              let board = document.querySelector(`#forlop`).querySelectorAll('.row');
              for (let i = 0; i < board.length; i++) {
                let rowElms = board[i].querySelectorAll('.keyBox');
                for (let j = 0; j < rowElms.length; j++) {
                  let pep = rowElms[j].querySelector('p');
                  if (pep.textContent.length == 1) pep.textContent = pep.textContent.toUpperCase();
                }
              }
            }
          });
        }
      }
    }
  }, 200);

  return element;
}

function textArea() {
  let element = document.createElement('textarea');
  element.classList.add('textareaField');

  return element;
}

document.addEventListener('keydown', function(event) {
  if (document.querySelector(`#${event.code}`)) document.querySelector(`#${event.code}`).classList.add('onClick');
  if (event.ctrlKey && event.altKey) {
    if (lang == engKeys) {
      lang = rusKeys;
      shiftLang = shiftRusKeys;
      let toReplace = document.querySelector('#forlop');
      let replaced = keyBored();
      toReplace.parentNode.replaceChild(replaced, toReplace);
    } else {
      lang = engKeys;
      shiftLang = shiftEngKeys;
      let toReplace = document.querySelector('#forlop');
      let replaced = keyBored();
      toReplace.parentNode.replaceChild(replaced, toReplace);
    }
  }
  document.querySelector('textarea').innerHTML = pickKey(document.querySelector('textarea').textContent, event.key);
});
document.addEventListener('keyup', function(event) {
  if (document.querySelector(`#${event.code}`)) document.querySelector(`#${event.code}`).classList.remove('onClick');
});
document.body.appendChild(textArea());
document.body.appendChild(keyBored());
