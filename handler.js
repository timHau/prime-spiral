const zoomInp = document.querySelector('.zoom')

zoomInp.addEventListener('change', e => {
  zoom = parseInt(e.target.value,10)
  draw()
})
