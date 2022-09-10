import React from "react";
import { View, Image, Text } from "react-native";

import { SIZES, FONTS, COLORS, assets } from "../constants";

export const ItemName = ({ title, titleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export const ItemType = ({ type }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 2 }}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        {type}
      </Text>
    </View>
  );
};
