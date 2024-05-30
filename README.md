# react-native-otp-custom-library

Custome Otp Feild Use In React Native

## Installation

```sh
npm install react-native-otp-custom-library
```
![Alt text](docs/dummy1.png)
![Alt text](docs/dummy2.png)
## Usage

```js
import { OtpCustomLibraryView } from "react-native-otp-custom-library";

// ...

<OtpCustomLibraryView filledColor="red" />
```
| Props | Description |
| --- | --- |
| filledColor  | Border color for filled fields  |
| nonFilledColor |Border color for non filled fields |
| currentFieldColor | Border color for the current index border |
| totalField | Total number of fields |
| onChange | Callback for value change, e.g., onChange = (val) => { setYourState(val) } |
| style | Style for the main OTP field container  |
| textInputStyle | Style for the OTP input fields |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
