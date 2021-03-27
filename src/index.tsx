import { FC } from 'react';
import { render } from 'react-dom';
import { Digraph, Edge, Node } from '@ts-graphviz/react';
import { wasmFolder } from '@hpcc-js/wasm';

import { Graphviz } from './components/Graphviz'

export const App: FC = () => {
  return (
    <div>
      <Graphviz>
        <Digraph>
          <Node id="a" />
          <Node id="b" />
          <Edge targets={['a', 'b']}  />
        </Digraph>
      </Graphviz>
    </div>
  );
};


wasmFolder('https://cdn.jsdelivr.net/npm/@hpcc-js/wasm/dist');

render(<App />, document.getElementById('root'));
