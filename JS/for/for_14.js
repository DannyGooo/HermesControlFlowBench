function showOffsetPos(id) {
    let left = 0;
    let top = 0;
    for (
      let itNode = document.getElementById(id); // initialization
      itNode; // condition
      left += itNode.offsetLeft,
        top += itNode.offsetTop,
        itNode = itNode.offsetParent // afterthought
    ); // semicolon
  
    console.log(
      `Offset position of "${id}" element:
  left: ${left}px;
  top: ${top}px;`,
    );
  }
  
  showOffsetPos("content");
  
  // Logs:
  // Offset position of "content" element:
  // left: 0px;
  // top: 153px;
  