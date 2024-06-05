import {
  HDKComponent,
  HNode,
  Prefab,
  render,
  Animation,
  InfoPanel,
} from '@hiber3d/hdk-react';
const World = () => (
  <HNode y={-1}>
    <Prefab id="flat_cube_01" scaleX={50} scaleY={50} />
  </HNode>
);
render(<World />, { environment: 'sunrise_01' });
