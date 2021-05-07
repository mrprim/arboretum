import Randomizer from 'random-seed'

const generateTree = (seed, size = 0) => {
  seed = seed || Math.random()
  const rand = new Randomizer(seed)
  const data = { points: [], lines: [] }

  data.points.push({ x: 0, y: 0, angle: 90, depth: 0 })

  for (let i = 0; i < size; i++) {
    const branches = rand.intBetween(1, data.points[i].depth)

    for (let j = 0; j < branches; j++) {
      addPoint(rand, data, i)
    }
  }

  return data
}

const addPoint = (rand, data, originIndex) => {
  const origin = data.points[originIndex]
  const length = 10 + 10 * rand.random()
  const angle = origin.angle + rand.floatBetween(-30 * origin.depth, 30 * origin.depth)

  data.points.push({
    x: origin.x + -length * Math.cos(angle * Math.PI / 180),
    y: origin.y + -length * Math.sin(angle * Math.PI / 180),
    angle: angle,
    depth: origin.depth + 1
  })

  data.lines.push([originIndex, data.points.length - 1])

}

export default generateTree