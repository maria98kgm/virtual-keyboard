export default (board, code, lang, x) => {
  if (x == true) {
    for (let i in code) {
      for (let j in code[i]) {
        if (lang[i][j].length < 2) board.querySelector(`#${code[i][j]}`).querySelector('p').textContent = board.querySelector(`#${code[i][j]}`).querySelector('p').textContent.toUpperCase();
      }
    }
  }
  else {
    for (let i in code) {
      for (let j in code[i]) {
        if (lang[i][j].length < 2) board.querySelector(`#${code[i][j]}`).querySelector('p').textContent = board.querySelector(`#${code[i][j]}`).querySelector('p').textContent.toLowerCase();
      }
    }
  }
}