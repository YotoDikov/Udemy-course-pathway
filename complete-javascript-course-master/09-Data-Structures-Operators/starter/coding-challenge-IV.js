document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

let input = document.getElementsByTagName('textarea')[0];

const btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', () => {
  let inputContent = input.value;
  convertedContent(inputContent);
});

////////// Primal way ////////////////
// function convertedContent(content) {
//   const splittedByNewLine = content.split('\n');
//   for (let el of splittedByNewLine) {
//     const result = el.split('_');
//     result[1] = result[1][0].toUpperCase() + result[1].slice(1).toLowerCase();

//     console.log(result.join('').trim());
//   }
// }

//////////// Jonas's little help ////////////////
// function convertedContent(content) {
//   const rows = content.split('\n');
//   let tick = '';
//   for (const row of rows) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${(tick += '✔')}`);
//   }
// }

////////// more help from Jonas ///////////////////
function convertedContent(content) {
  const rows = content.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✔'.repeat(i + 1)}`);
  }
}
