import { DragContainer, DragItem } from './DragComponents'

class PuzzleDraggable {
  dragItem: DragItem
  dragContainer: DragContainer
  protected dragScreenImg = ''

  constructor (container: HTMLElement, item: HTMLElement) {
    this.dragContainer = new DragContainer(container)
    this.dragItem = new DragItem(item)
  }
}

export default PuzzleDraggable
