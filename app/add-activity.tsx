import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function AddActivityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Activity Screen</Text>
      <Button
        title="Go back"
        onPress={() => router.push('/')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',// vertical 
    alignItems: 'center',    // horizontal
  },
  title: {
    marginBottom: 20,
  },
});
