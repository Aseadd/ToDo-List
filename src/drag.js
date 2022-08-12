let target = document.querySelector('.list');
export default function slist(target) {
  //target.classList.add('slist');
  let items = target.getElementsByTagName('div');
  let current = null;
  for (let i of items) {
    i.draggable = true;

    i.ondragstart = (ev) => {
      current = i;
      for (let it of items) {
        if (it != current) {
          it.classList.add('hint');
        }
      }
    };

    i.ondragenter = (ev) => {
      if (i != current) {
        i.classList.add('active');
      }
    };

    i.ondragleave = () => {
      i.classList.remove('active');
    };

    i.ondragend = () => {
      for (let it of items) {
        it.classList.remove('hint');
        it.classList.remove('active');
      }
    };

    i.ondragover = (evt) => {
      evt.preventDefault();
    };

    i.ondrop = (evt) => {
      evt.preventDefault();
      if (i != current) {
        let currentpos = 0,
          droppedpos = 0;
        for (let it = 0; it < items.length; it++) {
          if (current == items[it]) {
            currentpos = it;
          }
          if (i == items[it]) {
            droppedpos = it;
          }
        }
        if (currentpos < droppedpos) {
          i.parentNode.insertBefore(current, i.nextSibling);
        } else {
          i.parentNode.insertBefore(current, i);
        }
      }
    };
  }
}

window.addEventListener('DOMContentLoaded', () => {
  slist(document.querySelector('.list'));
});
