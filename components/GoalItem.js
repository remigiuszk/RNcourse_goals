import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <Pressable key={props.id} onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalContainer}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
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
