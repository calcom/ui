import { RadioGroup } from '../index';
import * as React from 'react';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const radio_group = () => (
  <RadioGroup
    label="Server Size"
    items={[
      {
        name: 'Startup',
        description: '12GB/6 CPUs &middot; 160 GB SSD disk',
      },
      {
        name: 'Business',
        description: '16GB/8 CPUs &middot; 512 GB SSD disk',
      },
      {
        name: 'Enterprise',
        description: '32GB/12 CPUs &middot; 1024 GB SSD disk',
      },
    ]}
    onSelected={(item) => console.log('selected:', item)}
  />
);
