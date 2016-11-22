import React from 'react';
import { createDevTools } from 'redux-devtools';
// Monitors are separate packages, and you can make a custom one
import SliderMonitor from 'redux-slider-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey={'ctrl-h'}
    changePositionKey={'ctrl-q'}
    defaultIsVisible
    defaultPosition={'bottom'}
    defaultSize={0.15}
  >
    <SliderMonitor keyboardEnabled />
  </DockMonitor>
);

export default DevTools;
