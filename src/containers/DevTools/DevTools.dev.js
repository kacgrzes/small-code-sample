import React from 'react';
import { createDevTools } from 'redux-devtools';
// Monitors are separate packages, and you can make a custom one
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey={'ctrl-h'}
    changePositionKey={'ctrl-q'}
    defaultIsVisible
    defaultSize={0.2}
  >
    <LogMonitor theme={'tomorrow'} />
  </DockMonitor>
);

export default DevTools;
