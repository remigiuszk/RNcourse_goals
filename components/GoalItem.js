import { StyleSheet, View, Text } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalContainer}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalContainer: {
    justifyContent: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 15,
    marginBottom: 16,
    backgroundColor: "#55a8c9",
  },
  goalText: {
    fontSize: 24,
  },
});

export default GoalItem;
