const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while ((currentNode = iterator.nextNode()) && currentNode) {
    console.log(currentNode.textContent.trim());
}