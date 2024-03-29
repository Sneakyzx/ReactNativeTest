import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

interface Props {
  color?: string;
  isChecked?: string;
  id: string;
  selectedItem?: string;
  onCheck(id: string, isChecked: boolean): void;
}

const StyledCheckBox = (props: Props) => {
  const {color = '#e54a2b'} = props;
  const [checked, setChecked] = useState(true);

  const toggleCheckBox = (v: boolean) => {
    setChecked(v);
    props.onCheck(props.id, checked);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => toggleCheckBox(!checked)}
        style={[
          styles.square,
          {backgroundColor: props.isChecked ? color : 'white'},
        ]}
      />
      <Text>Đồng ý với điều khoản</Text>
    </View>
  );
};

export default StyledCheckBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  square: {
    width: 20,
    height: 20,
    backgroundColor: '#e54a2b',
    borderColor: 'black',
    borderWidth: 1.5,
    marginRight: 10,
  },
});
