<div id='parent'>
  <ul>
    <li id='child'>I am a child</li>
  </ul>
  <p id='not-a-parent'></p>
</div>

const child = document.getElementById('child');
const parent = document.getElementById('parent');
const notParent = document.getElementById('not-a-parent');

isDescendant(parent, child) // true
isDescendant(notParent, child) // false

function isDescendant(targetNode, child) {
    if (targetNode.childNodes.length == 0) {
        return false;
    }
    if (targetNode == child) {
        return true;
    }
    for (let i = 0; i < parent.childNodes.length; i++) {
         return isDescendant(parent.childNodes[i], child)
    }
}
