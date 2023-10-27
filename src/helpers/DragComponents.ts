import DragElement from './DragElement'

//  class DragItem orientada al los items que serán movibles
export class DragItem extends DragElement {
  public dragStart (): void {
    this.addEventListenerDrag('dragstart', (e: Event): void => {
      const parentNode = this.validateHTMLElement(e)
      parentNode.classList.add('opacity-0')
    })
  }

  public dragEnd (): void {
    this.addEventListenerDrag('dragend', (e: Event): void => {
      const parentNode = this.validateHTMLElement(e)
      parentNode.classList.remove('opacity-0')
    })
  }

  public drag (): void {
    this.addEventListenerDrag('drag', (e: Event): void => {
      this.validateHTMLElement(e)
    })
  }
}

//  class DragContainer orienta a la parte que recibirá la imagen
export class DragContainer extends DragElement {
  public dragEnter (): void {
    this.addEventListenerDrag('dragenter', (e: Event): void => {
      const boxDrag = this.validateHTMLElement(e)
      boxDrag.classList.add('shadow-customShadow')
      console.log('enter')
    })
  }

  public dragLeave (): void {
    this.addEventListenerDrag('dragleave', (e: Event): void => {
      const boxDrag = this.validateHTMLElement(e)
      boxDrag.classList.remove('shadow-customShadow')
      console.log('leave')
    })
  }

  public dragOver (): void {
    this.addEventListenerDrag('dragover', (e: Event): void => {
      e.preventDefault()
      const boxDrag = this.validateHTMLElement(e)
      boxDrag.classList.add('shadow-customShadow')
      console.log('dragOver')
    })
  }

  public dragDrop (): void {
    this.addEventListenerDrag('drop', (e: Event): void => {
      this.validateHTMLElement(e)
    })
  }
}
