const ImgDrop = (): string => {
  return (`
  <div>
    <img id="dragContainer" class="h-auto max-w-full transition-shadow  rounded-lg object-cover lg:self-stretch"
      title="drag and drop your image here" 
      src="https://flowbite.com/docs/images/examples/image-1@2x.jpg" 
      alt="empty template"
    >
    </div>
  `)
}

export default ImgDrop
