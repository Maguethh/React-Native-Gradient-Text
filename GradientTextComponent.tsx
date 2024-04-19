import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

// Define the props for the GradientText component // Définir les props pour le composant GradientText //
interface GradientTextProps {
  text: string | string[];
  leftColor: string;
  rightColor: string;
  fontSize?: number;
  marginLeft?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through";
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
}

const GradientText: React.FC<GradientTextProps> = ({
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
}) => {
  // Convert text to array if it's a string // Convertir le texte en tableau si c'est une chaîne de caractères //
  const lines = Array.isArray(text) ? text : [text];

  // Calculate container height based on number of lines // Calculer la hauteur du conteneur en fonction du nombre de lignes //
  const containerHeight = lines.length * fontSize * 1.3;

  return (
    <View
      style={[
        {
          height: containerHeight,
          marginLeft,
          marginTop,
          marginRight,
          marginBottom,
          width: "100%",
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
              {
                fontSize,
                textDecorationLine,
                fontWeight,
                textAlign: textAlign || "center",
              },
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
};

export default GradientText;
