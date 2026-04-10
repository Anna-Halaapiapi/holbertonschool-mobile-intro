// add activity screen
import { router } from 'expo-router';
import { useState } from 'react'; // used to manage input state
import { Button, Text, TextInput, View } from 'react-native';
import { db } from '../database'; // db connection/instance
import { styles } from './styles'; // use the shared file of styles

export default function AddActivityScreen() {
  const [steps, setSteps] = useState(''); // store user's input of steps

  const handleAddActivity = () => {
    const stepsNumber = Number(steps); // conv inputted steps from str to num

    if (!stepsNumber) return; // catch empty input

    const unixDate = Math.floor(Date.now() / 1000); // get a current timestamp

    db.runSync( // add db row with steps & date
      'INSERT INTO activities (steps, date) VALUES (?, ?);',
      [stepsNumber, unixDate]
    );

    router.push('/'); // return to home screen
  };

  return ( // render the content on the screen
    <View style={styles.screenContainer}>
      <Text style={styles.heading}>Add activity screen</Text>

      <TextInput
        style={styles.textbox}
        placeholder="Enter number of steps"
        keyboardType="numeric"
        value={steps}
        onChangeText={setSteps}
      />

      <Button title="Save activity" onPress={handleAddActivity} />
      <View style={styles.verticalSpace} />
      <Button title="Go back" onPress={() => router.push('/')} />
    </View>
  );
}
