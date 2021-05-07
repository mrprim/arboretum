import { useState } from 'react';
import Tree from '../Tree'
import './index.css';

const App = () => {
  const [seed, setSeed] = useState(Math.random())
  const [size, setSize] = useState(3)

  return (
    <div className="App">
      <Tree seed={seed} size={size} />
      <div>
        Seed: {seed}
      </div>
      <div>
        <button onClick={e => setSeed(Math.random())} value={seed}>New Seed</button>
      </div>
      <div>
        Size
      </div>
      <div>
        <input onChange={e => setSize(e.target.value)} value={size} type='number' />
      </div>
    </div>

  )
}

export default App;
