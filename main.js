const can = document.querySelector('canvas'),
      ctx = can.getContext('2d'),
      w = can.width = window.innerWidth - 10,
      h = can.height = window.innerHeight - 10,
      startPoint = { x: w/2, y: h/2 },
      points = [],
      n = 40000

let primes = [],
    zoom = 100

function initPoints() {
  for (let i = 1; i <= n; i++) {
    const nextPoint = new Point(can, 1, i)
    points.push(nextPoint)
  }
}

function initPrimes() {
  const prim = new Prime() 
  const pr = prim.init()
  for (let j = 0; j < n; j ++) {
    pr.next();
  }
  primes = prim.getPrimes()
}


function draw() {
  points.forEach(p => {
    if (primes.includes(p.index)) p.draw(zoom)
  })
}

initPoints()
initPrimes()
draw()
