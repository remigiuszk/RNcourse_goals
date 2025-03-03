import { TextInput, View, StyleSheet, Button, Modal } from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your course goal!"
          value={enteredGoalText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    gap: 16,
    height: "100%",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    width: "100%",
    gap: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  button: {
    width: "30%",
  },
});

export default GoalInput;
