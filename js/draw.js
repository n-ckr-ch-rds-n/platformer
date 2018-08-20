function elt(name, attrs, ...children) {
  let dom = document.createElement(name);
  for (let attr of Object.keys(attrs[attr])) {
    dom.setAttribute(attr, attrs[attr]);
  }
  for (let child of children) {
    dom.appendChild(child);
  }
  return dom;
}

class DOMDisplay {
  constructor(parent, level) {
    this.dom = elt("div", {class: "game"}, drawGrid(level));
    this.actorLayer = null;
    parent.appendChild(this.dom);
  }

  clear() { this.dom.remove(); }
}

const scale = 20;

function drawGrid(level) {
  return elt("table", {
    class: "background",
    style: `width ${level.width * scale}px`
  }, ...level.rows.map(row =>
    elt("tr", {style: `height ${scale}`},
        ...row.map(type => elt("td", {class: type})))
  ));
}
