import React from 'react';
import { CheckBox, CheckBoxProps } from 'react-native-ui-kitten';

export const CheckBoxShowcase = (props?: CheckBoxProps): React.ReactElement<CheckBoxProps> => {
  return (
    <CheckBox
      style={styles.checkbox}
      textStyle={styles.checkboxText}
      text='Place your text'
      checked={this.state.checked}
    />
  );
};
