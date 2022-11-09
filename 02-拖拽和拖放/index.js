const draggable = document.getElementById("draggable");
const droppable = document.getElementById("droppable");

draggable.addEventListener("dragstart", handleDragStart);
function handleDragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
}

droppable.addEventListener("dragover", handleDragover);
function handleDragover(e) {
  e.preventDefault();
  droppable.classList.add("dragover");
}

droppable.addEventListener("dragleave", handleDragLeave);
function handleDragLeave(e) {
  droppable.classList.remove("dragover");
}

droppable.addEventListener("drop", handleDrop);
function handleDrop(e) {
  e.preventDefault();
  // const draggedId = e.dataTransfer.getData("text/plain");
  // droppable.appendChild(document.getElementById(draggedId));
  
  droppable.classList.add("dropped");

  // 处理拖放进来的文件
  [...e.dataTransfer.items].forEach(item => {
    if(item.kind === 'file') {
      const file = item.getAsFile();
      createPreview(file)
    }
  })
}

function createPreview(imageFile) {
  if(!imageFile.type.startsWith("image/")) {
    return ;
  }

  const image = document.createElement("img");
  image.src = URL.createObjectURL(imageFile);
  image.onload = function () {
    URL.revokeObjectURL(this.src);
  }
  droppable.appendChild(image);
}