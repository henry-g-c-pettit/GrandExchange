import React, { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { ItemCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, ItemData } from "../constants";

const Home = () => {
  const [itemData, setItemData] = useState(ItemData);
  const handleSearch = (value) => {
    if (value.length === 0) {
      setItemData(ItemData);
    }

    const filteredData = ItemData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setItemData(ItemData);
    } else {
      setItemData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={itemData}
            renderItem={({ item }) => <ItemCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
