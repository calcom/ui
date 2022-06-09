import { Switch } from '../index';
import * as React from 'react';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const switch_ = () => (
  <Switch onSwitched={(enabled) => console.log('Switched to', enabled)} />
);
