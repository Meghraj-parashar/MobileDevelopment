import { View, Text } from "react-native";
const index = () => {
  return (
    <View
      style={{
        backgroundColor: "lightgray",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{
        // color: "bl",
        fontSize: 20,
        fontWeight: "bold",
      }}>Hello Meghraj Parashar {'\n'}
      This is My First React-Native App{'\n'}
      Using Expo Cli 
      </Text>
    </View>
  );
};
export default index;
