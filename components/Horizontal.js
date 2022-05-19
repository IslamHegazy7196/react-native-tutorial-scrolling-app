import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Horizontal = () => {
  return (
    <ScrollView horizontal={true} pagingEnabled={true} style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>welcome to my scrolling app</Text>
      </View>
      <View style={[styles.view,styles.viewsecond]}>
        <Text style={styles.text}>my second page</Text>
      </View>
      <View style={[styles.view,styles.viewfinal]}>
        <Text style={styles.text}>my final page</Text>
      </View>
    </ScrollView>
  );
};

export default Horizontal;

const styles = StyleSheet.create({
  container: {},
  text: {
      color: '#fff',
      fontSize:20,
  },
  view: {
      backgroundColor: "#BF3325",
    flex: 1,
    alignItems:'center',
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("screen").height,
  },
  viewsecond: {
      backgroundColor: "#E07C24",
  },
  viewfinal: {
      backgroundColor: "#35BDD0",
  
  },
});
