import {
    HDKComponent,
    HNode,
    Prefab,
    render,
    Animation,
    InfoPanel,
  } from '@hiber3d/hdk-react';
  const World = () => <HNode y={-1}></HNode>;
  
  render(<World />, { environment: 'sunrise_01' });
  