import './style.css'
import ImgDrop from './conponents/ImgDrop/ImgDrop'
import ImgTests from './conponents/ImgTests/ImgTests'
import PuzzleDraggable from './helpers/PuzzleDragable'

const target = document.querySelector<HTMLDivElement>('#app')

if (target instanceof HTMLDivElement) {
  target.innerHTML = `
    <div class="grid max-w-6xl mx-auto gap-16 p-4 md:p-8">
      <h1 class="text-3xl text-center text-amber-500 font-extrabold">
        Drag and Drop examples 
      </h1>
      <ul class="justify-self-center">
        <li>
          <h2 class="font-medium tracking-widest text-amber-300 md:text-lg py-2">Simple Drag and Drop</h2>
          <div class="grid gap-16 lg:grid-cols-[1fr_10rem]">
            ${ImgDrop()}
            ${ImgTests()}
          </div>
        </li>
      </ul>
    </div>
  `
}

// const implementsDragItem = (): void => {
//   const dragGlobalList = new DragItem(document.querySelector('#listImgContainer'))
//   dragGlobalList.dragStart()
//   dragGlobalList.dragEnd()
// }

// const implementsDragContainer = (): void => {
//   const dragContainer = new DragContainer(document.querySelector('#dragContainer'))
//   dragContainer.dragEnter()
//   dragContainer.dragLeave()
//   dragContainer.dragOver()
//   dragContainer.dragDrop()
// }

// implementsDragContainer()
// implementsDragItem()

const implementsDragContainer = (): void => {
  const dragContainer = document.querySelector('#dragContainer')
  const dragItem = document.querySelector('#listImgContainer')

  if ((dragContainer instanceof HTMLElement && dragItem instanceof HTMLElement)) {
    const dragAndDrop = new PuzzleDraggable(dragContainer, dragItem)

    dragAndDrop.dragItem.dragStart()
    dragAndDrop.dragItem.dragEnd()
    dragAndDrop.dragContainer.dragEnter()
    dragAndDrop.dragContainer.dragOver()
    dragAndDrop.dragContainer.dragLeave()
  } else {
    throw new TypeError('no data')
  }
}

implementsDragContainer()
