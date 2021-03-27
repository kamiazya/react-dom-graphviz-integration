import { FC, ReactElement } from 'react';
import { useDotToSVG } from '../hooks/dot-to-svg';

type GraphvizProps = {
  children: ReactElement;
};

export const Graphviz: FC<GraphvizProps> = ({ children: dotElement }) => {
  const svg = useDotToSVG(dotElement);
  return svg ? <div dangerouslySetInnerHTML={{ __html: svg }} /> : null;
};
