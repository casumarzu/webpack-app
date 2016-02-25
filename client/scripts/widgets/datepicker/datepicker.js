import React from 'react';
import {DatePicker} from 'material-ui';

export const DatePickerBlock = () => (
  <div>
    <DatePicker hintText="Portrait Dialog" />
    <DatePicker hintText="Landscape Dialog" mode="landscape" />
    <DatePicker hintText="Dialog Disabled" disabled={true} />
  </div>
);
