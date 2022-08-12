// /* eslint no-use-before-define: 0 */
// document.querySelector('.list');
// export default function slist() {
//   const items = document.getElementsByTagName('div');
//   let current = null;
//   for (const i of items) {
//     i.draggable = true;

//     i.ondragstart = () => {
//       current = i;
//       for (const it of items) {
//         if (it !== current) {
//           it.classList.add('hint');
//         }
//       }
//     };

//     i.ondragenter = () => {
//       if (i !== current) {
//         i.classList.add('active');
//       }
//     };

//     i.ondragleave = () => {
//       i.classList.remove('active');
//     };

//     i.ondragend = () => {
//       for (const it of items) {
//         it.classList.remove('hint');
//         it.classList.remove('active');
//       }
//     };

//     i.ondragover = (evt) => {
//       evt.preventDefault();
//     };

//     i.ondrop = (evt) => {
//       evt.preventDefault();
//       if (i !== current) {
//         let currentpos = 0;
//         let droppedpos = 0;
//         for (let it = 0; it < items.length; it += 1) {
//           if (current === items[it]) {
//             currentpos = it;
//           }
//           if (i === items[it]) {
//             droppedpos = it;
//           }
//         }
//         if (currentpos < droppedpos) {
//           i.parentNode.insertBefore(current, i.nextSibling);
//         } else {
//           i.parentNode.insertBefore(current, i);
//         }
//       }
//     };
//   }
// }

// window.addEventListener('DOMContentLoaded', () => {
//   slist(document.querySelector('.list'));
// });
