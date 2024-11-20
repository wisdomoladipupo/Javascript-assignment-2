const container = document.getElementById("container");
const tooltip = document.getElementById("toolTip");

const loremText = document.createElement("p");
const loremText2 = document.createElement("p");

loremText.textContent = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, itaque
        quia dolore alias ad suscipit voluptate nemo inventore nam,
        exercitationem natus enim, ipsa consequuntur quidem ullam temporibus
        consectetur voluptates aut!`;

loremText2.textContent = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, itaque
        quia dolore alias ad suscipit voluptate nemo inventore nam,
        exercitationem natus enim, ipsa consequuntur quidem ullam temporibus
        consectetur voluptates aut!`;
const qouteQ = document.createElement("q");

qouteQ.innerHTML = `
        Teacher: why are you late?
        <br>
        student: There was a man that lost a hundred dollar Bill
            <br>
        Teacher: Thats nice , where you helping him look for it?
            <br>
        student: NO , i was standing on it
        `;

container.appendChild(loremText);
container.appendChild(qouteQ);
container.appendChild(loremText2);

function positionAt(anchor, position, element) {
  const anchorRect = anchor.getBoundingClientRect();

  let top, left, bottom;

  switch (position) {
    case "top":
      top = anchorRect.top - element.offsetHeight + window.scrollY;
      left = anchorRect.left + window.scrollX;
      break;

    case "right":
      top = anchorRect.top + window.scrollY
      left = anchorRect.left + window.scrollX
      break;

    case "bottom":
      top = anchorRect.bottom + window.scrollY;
      left = anchorRect.left + window.scrollX;
      break;

    case "left":
      top = anchorRect.top + window.scrollY
      left = anchorRect.left - element.offsetwidth + window.scrollX;
      break;

    default:
      console.error("invalid position specified. use top right bottom or left");
      return;
  }
  element.style.position = "absolute";
  element.style.top = `${top}px`;
  element.style.left = `${left}px`;
}

container.addEventListener("mouseover", () => {
  tooltip.style.display = "block";
  positionAt(container, "top", tooltip);
});

container.addEventListener("mouseleave", () => {
  tooltip.style.display = "none";
  positionAt(container, "left", tooltip);
});

positionAt(container, "top", tooltip);
positionAt(container, "bottom", tooltip);
