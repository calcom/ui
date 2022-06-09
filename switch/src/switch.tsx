import { useId } from '@radix-ui/react-id';
import { Root as LabelRoot } from '@radix-ui/react-label';
import { Root, Thumb } from '@radix-ui/react-switch';
import * as React from 'react';
import classNames from '~/utils/classNames';

const Switch = (
  props: React.ComponentProps<typeof Root> & {
    label?: string;
  }
) => {
  const { label, ...primitiveProps } = props;
  const id = useId();

  return (
    <div className="flex h-[20px] items-center">
      <Root
        className={classNames(
          props.checked ? 'bg-gray-900' : 'bg-gray-200 hover:bg-gray-300',
          'focus:ring-brand-800 h-[24px] w-[40px] rounded-full p-0.5 shadow-none focus:ring-1'
        )}
        {...primitiveProps}
      >
        <Thumb
          id={id}
          className={
            'block h-[18px] w-[18px] translate-x-0 rounded-full bg-white transition-transform'
          }
        />
      </Root>
      {label && (
        <LabelRoot
          htmlFor={id}
          className="ml-2 cursor-pointer align-text-top text-sm font-medium text-neutral-700 ltr:ml-3 rtl:mr-3 dark:text-white"
        >
          {label}
        </LabelRoot>
      )}
    </div>
  );
};

export default Switch;
