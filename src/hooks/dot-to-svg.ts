import { useState, useEffect, ReactElement, useMemo } from 'react';
import { renderToDot } from '@ts-graphviz/react';
import { graphviz } from '@hpcc-js/wasm';


export function useDotToSVG(dotElement: ReactElement): string | undefined {
  const dot = useMemo(() => renderToDot(dotElement), [dotElement]);
  const [svg, setSVG] = useState<string>();
  useEffect(() => {
    graphviz.layout(dot).then((svg) => setSVG(svg));
  }, [dot, setSVG]);
  return svg;
};
