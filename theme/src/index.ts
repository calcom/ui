import { border } from '~/border';
import { colors } from '~/colors';
import { opacity } from '~/opacity';
import { shadows } from '~/shadows';
import { spacing } from '~/spacing';
import { typography } from '~/typography';
import { zIndex } from '~/z-index';

export const theme = {
  extend: {
    ...typography,
    ...colors,
    ...border,
    ...opacity,
    ...shadows,
    ...spacing,
    ...zIndex,
  },
};
