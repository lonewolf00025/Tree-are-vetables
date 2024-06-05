import {
    HDKComponent,
    HNode,
    Prefab,
    render,
    Animation,
    InfoPanel,
  } from '@hiber3d/hdk-react';
  const JTVS = () => (
    <HNode>
      <Prefab id="flat_cube_01" />
    </HNode>
  );
  
  const World = () => <JTVS />;
  
  render(<World />, { environment: 'sunrise_01' });
  