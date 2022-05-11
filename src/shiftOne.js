export default (board, code, shiftLang) => {
  for (let  i in code) {
    for (let j in code[i]) {
      board.querySelector(`#${code[i][j]}`).querySelector('p').textContent = shiftLang[i][j];
    }
  }
}