# ReactDOM and @ts-graphviz/react integration

**This repository is for PoC. Please copy and use.**

This repository shows an example of integrating ReactDOM and `@ts-graphviz/react`
to display the image output from Graphviz on the browser.

## Related packages

- [React](https://www.npmjs.com/package/react)
- [ReactDOM](https://www.npmjs.com/package/react-dom)
- [ts-graphviz](https://www.npmjs.com/package/ts-graphviz)
- [@ts-graphviz/react](https://www.npmjs.com/package/@ts-graphviz/react)
- [@hpcc-js/wasm](https://www.npmjs.com/package/@hpcc-js/wasm)

## What's this?

If you use [Graphviz](./src/components/Graphviz.tsx) component, you can display the image output by Graphviz
without being aware of the boundary between ReactDOM and `@ts-graphviz/react` as shown below.

```tsx
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
```

This repository uses [@hpcc-js/wasm](https://www.npmjs.com/package/@hpcc-js/wasm)
to run Graphviz on the browser.

Since [@hpcc-js/wasm](https://www.npmjs.com/package/@hpcc-js/wasm) uses WASM internally,
there are restrictions on the browsers that can be executed.

## How it Works?

The following processing is performed inside the [Graphviz](./src/components/Graphviz.tsx) component.

1. Converts `@ts-graphviz/react`'s components inside a `Graphviz` component to a string in dot language format.
    - Don't include components for ReactDOM (such as `div`) within `Graphviz` components.
1. The graphviz module in the `@hpcc-js/wasm` package does the dot to svg conversion.
1. The output svg is inserted in the DOM.

## License

This software is released under the MIT License, see [LICENSE](./LICENSE).
