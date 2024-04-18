import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

export default function GradientText({
  text = "",
  leftColor,
  rightColor,
  fontSize = 16,
  marginLeft = 0,
  marginTop = 0,
  marginRight = 0,
  marginBottom = 0,
  textDecorationLine = "none",
  fontWeight = "normal",
  textAlign = "center",
}: any) {
  // Convert text to array if it's a string
  const lines = Array.isArray(text) ? text : [text];

  // Calculate container height based on number of lines
  const containerHeight = lines.length * fontSize * 1.3;

  return (
    <View
      style={[
        styles.TextGradientContainer,
        {
          height: containerHeight,
          marginLeft,
          marginTop,
          marginRight,
          marginBottom,
        },
      ]}
    >
      <MaskedView
        style={{
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
        }}
        maskElement={
          <Text
            style={[
              styles.TextGradient,
              { fontSize, textDecorationLine, fontWeight, textAlign },
            ]}
          >
            {lines.join("\n")}
          </Text>
        }
      >
        <LinearGradient
          colors={[leftColor, rightColor]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ flex: 1 }}
        />
      </MaskedView>
    </View>
  );
}

const styles = StyleSheet.create({
  TextGradient: {
    textAlign: "center",
  },
  TextGradientContainer: {
    width: "100%",
  },
});
