import {
  computePosition,
  offset,
  flip,
  shift,
} from "https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.12/+esm";

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
  const placementMap = {
    top: "top",
    bottom: "bottom",
    left: "left",
    right: "right",
  };

  const placement = placementMap[position] || "top";

  computePosition(anchor, element, {
    placement: placement,
    middleware: [offset(10), flip(), shift()],
  }).then(({ x, y }) => {
    element.style.position = "absolute";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
  });
}



container.addEventListener("mouseover",() => {
  tooltip.style.display = "block"

  positionAt(container,"top",tooltip)
  positionAt(container,"left",tooltip)
})

container.addEventListener("mouseleave",() => {
  tooltip.style.display = "none"
  
})