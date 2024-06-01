import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import OtpInput from 'react-native-otp-custom-library';

export default function App() {
  const onChange = (val: any) => {
    // set your state here
    console.log(val);
  };
  return (
    <View style={styles.container}>
      <OtpInput
        filledColor="#21C274"
        nonFilledColor="#DCDCDC"
        currentFieldColor="#8735E1"
        totalField={4}
        onChange={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 50,
    height: 50,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#18181E',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    top: 0,
    borderRadius: 8,
    marginLeft: 10,
    paddingTop: 0,
    paddingBottom: 0,
  },
  mainOtpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
