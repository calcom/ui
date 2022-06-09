import { Menu } from '../index';
import {
  PencilIcon,
  DuplicateIcon,
  ExternalLinkIcon,
  TrashIcon,
  ArchiveIcon,
} from '@heroicons/react/solid';
import * as React from 'react';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const menu = () => (
  <Menu
    label="Options"
    items={[
      [
        {
          Icon: PencilIcon,
          label: 'Edit',
          onClick: () => window.alert('Edit was pressed!'),
        },
        { Icon: DuplicateIcon, label: 'Duplicate' },
      ],
      [
        { Icon: ArchiveIcon, label: 'Archive' },
        { Icon: ExternalLinkIcon, label: 'Move' },
      ],
      [{ Icon: TrashIcon, label: 'Delete' }],
      [{ label: 'Exit' }],
    ]}
  />
);
