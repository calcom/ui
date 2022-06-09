import { Dialog } from '../index';
import * as React from 'react';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const dialog = () => (
  <Dialog
    openLabel="Open dialog"
    closeLabel="Got it, thanks!"
    title="Payment successful"
    details="Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order."
    onOpen={() => console.log("You've opened the dialog")}
    onClose={() => console.log("You've closed the dialog")}
  />
);
