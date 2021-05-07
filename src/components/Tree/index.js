import generateTree from "../../utils/generateTree"

const Tree = ({ seed, size = 5 }) => {
  const data = generateTree(seed, size)

  let lineString = ''

  data.lines.forEach(l => {
    const p1 = data.points[l[0]]
    const p2 = data.points[l[1]]
    lineString += `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} `
  })

  return (
    <svg viewBox="-50 -90 100 100" width="400px" height="400px" style={{ border: "solid 1px green" }}>
      <path fill="none" stroke="brown" strokeWidth="1" d={lineString} />
      {data.points.map(p => <circle key={p.x + '_' + p.y} r="1" fill="blue" cx={p.x} cy={p.y} />)}
      <path fill="none" stroke="black" strokeWidth=".5" d='M -40 0 L 40 0' />
    </svg>
  )
}

export default Tree