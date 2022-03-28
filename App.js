import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
} from "react-native";

export default function App() {
  const [example, setExample] = useState("");
  const [count, setCount] = useState(0);
  const handleExample = (e) => {
    setExample(e);
  };
  const handlePress = (e) => {
    setCount(count + 1);
  };

  return (
    <>
      <View style={styles.container} onTouch={handlePress}>
        <Text>Hello World desde React Nativee!</Text>
        <Text>{count}</Text>
        <Text value={example}>{example}</Text>
        <TextInput
          style={{
            height: 40,
            width: 400,
            borderColor: "gray",
            borderWidth: 1,
            padding: 2,
            margin: 4,
          }}
          onChangeText={handleExample}
          defaultValue="You can type in me"
        />
        <StatusBar style="auto" />
        <Button onPress={handlePress} title="presioname" color="#fd3" />
        <Button onPress={handlePress} title="presioname" color="#fd3" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: "row",
    backgroundColor: "#ff2",
    alignItems: "center",
    justifyContent: "space-evenly",
    alignContent: "center",
  },
});
