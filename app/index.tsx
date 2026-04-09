import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home screen</Text>
      <Button
        title="Add activity"
        onPress={() => router.push('/add-activity')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                 // full screen
    justifyContent: 'center',// vertical
    alignItems: 'center',    // horizontal
  },
  title: {
    marginBottom: 20,
  },
});