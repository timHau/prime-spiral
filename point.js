class Point {
  constructor(can, r, i) {
    this.p = { 
      w: can.width,
      h: can.height,
      ctx: can.getContext('2d'),
      r }
    this.index = i
  }

  degToRad(d) {
    return d * Math.PI / 180
  }

  fromDefaultStart({ x, y }) {
    const { w, h } = this.p
    return { x: w/2 + x, y: h/2 + y }
  }

  radToCart(zoom) {
    const d = this.index
    return this.fromDefaultStart({ 
      x: d/zoom * Math.cos(this.degToRad(d)),
      y: d/zoom * Math.sin(this.degToRad(d))
      // x: d/zoom * Math.cos(d),
      // y: d/zoom * Math.sin(d)
    })
  }

  draw(zoom, c='rgba(0,0,0,0.4)') {
    const { ctx, r } = this.p
    const { x, y } = this.radToCart(zoom)
    ctx.moveTo(x, y)
    ctx.arc(x, y, r, 0, 2*Math.PI, false)
    ctx.fillStyle = c
    ctx.fill()
  }

}
