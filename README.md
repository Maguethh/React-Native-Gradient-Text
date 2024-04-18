# React Native Gradient Text for Expo

React Native Gradient Text is a custom, reusable component for displaying text with a gradient effect in React Native applications. It is compatible with Expo.

![Simple Gradient Text](images/simpletext.PNG)
![Multiline Gradient Text](images/multilinetext.PNG)

## Installation

To install this component, run:

```bash
npm install mag-react-native-gradient-text
```

## Usage

Here's an example of how to use the GradientText component :

```jsx
import GradientText from "mag-react-native-gradient-text";

<GradientText
  text="Hello, world!"
  leftColor="#000"
  rightColor="#fff"
  fontSize={20}
/>;
```

## Props

- `text` (string or array of strings): The text to display. If an array is provided, each element will be displayed on a new line.
- `leftColor` (string): The color at the left end of the gradient (HEX color).
- `rightColor` (string): The color at the right end of the gradient (HEX color).
- `fontSize` (number): The font size of the text.
- `marginLeft`, `marginTop`, `marginRight`, `marginBottom` (numbers): The margins around the text.
- `textDecorationLine` (string): The decoration to apply to the text (e.g., 'underline', 'line-through').
- `fontWeight` (string): The weight of the font.
- `textAlign` (string): The text alignment (e.g., 'center', 'left', 'right').

## Dependencies

This component relies on the following peer dependencies:

- `react`
- `react-native`
- `expo-linear-gradient`
- `@react-native-masked-view/masked-view`

These should be installed in your Expo project.

## License

MIT License

Copyright (c) 2024 Magueth.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
