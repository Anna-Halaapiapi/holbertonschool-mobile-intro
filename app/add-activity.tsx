import { router } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { db } from '../database';

export default function AddActivityScreen() {
  const [steps, setSteps] = useState('');

  const handleAddActivity = () => {
    const stepsNumber = Number(steps);

    if (!stepsNumber) return;

    const unixDate = Math.floor(Date.now() / 1000);

    db.runSync(
      'INSERT INTO activities (steps, date) VALUES (?, ?);',
      [stepsNumber, unixDate]
    );

    router.push('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add activity screen</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter number of steps"
        keyboardType="numeric"
        value={steps}
        onChangeText={setSteps}
      />

      <Button title="Save activity" onPress={handleAddActivity} />
      <View style={styles.space} />
      <Button title="Go back" onPress={() => router.push('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 20,
    borderRadius: 8,
  },
  space: {
    height: 12,
  },
});
