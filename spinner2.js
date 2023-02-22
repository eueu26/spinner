// setTimeout(() => {
//   process.stdout.write('\r|   ');
//   setTimeout(() => {
//     process.stdout.write('\r/   ');
//   }, 300);
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// // ... fill in the rest yourself ...

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1001);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1003);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 1005);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1007);

// const spinner = "|/-\|";

// for (let i = 0; i < spinner.length; i++) {
//   let spin = spinner[i];
//   setTimeout(() => {
//     process.stdout.write('\r' + spin);
// },200 * i);
// }

const spinner = ["|", "/", "-", "\\", "|", "\n"];

let delay = 0;
for (let spin of spinner) {
  setTimeout(() => {
    process.stdout.write("\r" + spin);
  }, (delay += 200));
}
