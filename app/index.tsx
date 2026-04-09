import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { db } from '../database';

// define shape of an Activity
type Activity = {
    id: number;
    steps: number;
    date: number;
};

// display the list of entries in the activities table and display them on the home screen
export default function HomeScreen() {
  const [activities, setActivities] = useState<Activity[]>([]);
    const loadActivities = () => {
    const result = db.getAllSync(
      'SELECT * FROM activities ORDER BY date DESC;'
    ) as Activity[];

    setActivities(result);
  };

  useFocusEffect(
    useCallback(() => {
      loadActivities();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home screen</Text>

      <Button
        title="Add activity"
        onPress={() => router.push('/add-activity')}
      />

      <FlatList
        data={activities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Steps: {item.steps}</Text>
            <Text>Date: {new Date(item.date * 1000).toLocaleString()}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No activities yet</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  item: {
    marginTop: 15,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  empty: {
    marginTop: 20,
  },
});