class DragElement {
  protected readonly puzzle!: HTMLElement

  constructor (puzzle: HTMLElement | null) {
    if (puzzle instanceof HTMLElement) {
      this.puzzle = puzzle
    } else {
      throw new TypeError(`${typeof puzzle} no es un elemento instanciado de HTMLElement`)
    }
  }

  protected addEventListenerDrag (eventName: string, handler: (e: Event) => void): void {
    if (!this.puzzle.hasAttribute(`data-event-${eventName}`)) {
      this.puzzle.addEventListener(eventName, (e: Event) => {
        handler(e)
        this.puzzle.setAttribute(`data-event-${eventName}`, 'true')
      })
    }
  }

  protected validateHTMLElement (e: Event): HTMLElement {
    if (e.target instanceof HTMLElement && e.target.draggable) {
      return e.target
    }
    throw new TypeError(`${typeof e} no es de tipo HTMLElement`)
  }
}

export default DragElement
