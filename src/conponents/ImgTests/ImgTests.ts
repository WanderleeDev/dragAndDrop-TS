const ImgTests = (): string => {
  const listImages: string[] = [
    'https://images.pexels.com/photos/18842628/pexels-photo-18842628/free-photo-of-gente-animal-perro-mascota.jpeg',
    'https://images.pexels.com/photos/18707709/pexels-photo-18707709/free-photo-of-ciudad-paisaje-puesta-de-sol-gente.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/5435304/pexels-photo-5435304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png'
  ]

  return (`
    <ul id="listImgContainer" class="flex justify-self-center flex-wrap gap-8 justify-center pointer-events-none">
      <li class="text-white font-medium hidden lg:block underline" >
        Drag this images to the box
      </li>
      ${listImages.map(img => {
        return (`
          <li class="w-32 h-32 aspect-square bg-gray-800">
            <img class="dragItem object-cover aspect-square w-full h-auto cursor-move rounded-sm pointer-events-auto"
              src=${img} 
              alt="image stock" 
              loading="lazy"
              draggable="true">
          </li>
        `)
      }).join('')}
    </ul>
  `)
}

export default ImgTests
