import { StyleSheet, View, Text, Pressable, Modal } from "react-native";

const GoalItem = (props) => {
  return (
    <Modal>
      <View style={styles.goalContainer}>
        <Pressable
          android_ripple={{ color: "#dddddd" }}
          key={props.id}
          onPress={props.onDeleteItem.bind(this, props.id)}
          style={(pressed) => pressed && styles.pressedItem}
        >
          <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  goalContainer: {
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 15,
    marginBottom: 16,
    backgroundColor: "#55a8c9",
  },
  goalText: {
    fontSize: 24,
    padding: 16,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
