import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-otp-custom-library' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type OtpCustomLibraryProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'OtpCustomLibraryView';

export const OtpCustomLibraryView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<OtpCustomLibraryProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
