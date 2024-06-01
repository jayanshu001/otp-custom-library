import React, { useEffect, useState } from 'react';
import { type ViewStyle, View, TextInput , type TextStyle } from 'react-native';

interface Props {
  filledColor: string;
  nonFilledColor: string;
  currentFieldColor: string;
  totalField: number;
  errorColor?: string;
  isError?: boolean;
  onChange: any;
  onClear?: any;
  value?: any;
  style?: ViewStyle;
  textInputStyle?: any;
}

const OtpInput: React.FC<Props> = ({
  filledColor = '#000',
  nonFilledColor = '#fff',
  currentFieldColor = '#ccc',
  totalField = 4,
  onChange = () => {},
  style = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap:'wrap'
  },
  textInputStyle = {
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
}) => {
  const repeat = (num: number) => {
    return Array(num).fill('');
  };

  const [forgotPasswordOtp, SetForgotPasswordOtp] = useState(
    repeat(totalField)
  );
  const [focusedInput, SetFocusInput] = useState(0);

  useEffect(() => {
    onChange(forgotPasswordOtp.join(''));
  }, [forgotPasswordOtp, onChange]);
  let EventHandlerOtpScreen = (index: number) => {
    return {
      onChangeText: (text: any) => handleChangeText(text, index),
      onKeyPress: ({ nativeEvent }: any) => {
        if (nativeEvent?.key === 'Backspace') {
          removeTextHandler(index);
        }
      },
      ref: (input: any) => {
        if (index === focusedInput && input) {
          input.focus();
        }
      },
    };
  };
  const removeTextHandler = (index: any) => {
    let newOtp = [...forgotPasswordOtp];
    if (index === 0) {
      console.log('1>>>>>>>>>>>>>>>>')
      newOtp[index] = '';
      SetForgotPasswordOtp(newOtp);
      SetFocusInput(0);
    } else if (index >= totalField - 1 && newOtp[totalField - 1] !== '') {
      console.log('2?>>>>>>>>>>>>>>>>>.')
      newOtp[index] = '';
      SetForgotPasswordOtp(newOtp);
      SetFocusInput(totalField - 1);
    } else {
      if(!newOtp[index].length){
        newOtp = [...forgotPasswordOtp];
        newOtp[index - 1] = '';
        SetForgotPasswordOtp(newOtp);
        const prevInput = index - 1;
        SetFocusInput(prevInput);
      }else{
        newOtp = [...forgotPasswordOtp];
        newOtp[index] = '';
        SetForgotPasswordOtp(newOtp);
        const prevInput = index;
        SetFocusInput(prevInput);
      }
    }
  };
  const handleChangeText = (text: any, index: any) => {
    const newOtp = [...forgotPasswordOtp];
    newOtp[index] = text;
    SetForgotPasswordOtp(newOtp);

    if (text && index < forgotPasswordOtp.length - 1) {
      const nextInput = index + 1;
      SetFocusInput(nextInput);
    }
  };
  return (
    <View style={style}>
      {forgotPasswordOtp.map((digit: any, index: any) => (
        <View key={index}>
          <View />
          <TextInput
            style={[
              textInputStyle,
              {
                borderColor:
                  index === focusedInput
                    ? currentFieldColor
                    : digit
                      ? filledColor
                      : nonFilledColor,
              },
            ]}
            value={digit}
            {...EventHandlerOtpScreen(index)}
            keyboardType="numeric"
            maxLength={1}
            textAlign={'center'}
            testID="otpDataTestId"
          />
        </View>
      ))}
    </View>
  );
};

export default OtpInput;
