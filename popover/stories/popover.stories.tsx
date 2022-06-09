import { Popover } from '../index';
import {
  LightBulbIcon,
  TerminalIcon,
  DocumentReportIcon,
} from '@heroicons/react/solid';
import * as React from 'react';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const popover = () => (
  <Popover
    title="Solutions"
    items={[
      [
        {
          name: 'Insights',
          description: 'Measure actions your users take',
          href: '##',
          icon: LightBulbIcon,
        },
        {
          name: 'Automations',
          description: 'Create your own targeted content',
          href: '##',
          icon: TerminalIcon,
        },
        {
          name: 'Reports',
          description: 'Keep track of your growth',
          href: '##',
          icon: DocumentReportIcon,
        },
      ],
      [
        {
          name: 'Documentation',
          description: 'Start integrating products and tools',
          href: '##',
        },
      ],
    ]}
  />
);
