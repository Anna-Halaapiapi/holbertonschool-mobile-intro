// Home screen: display db activity entries
import { FlashList } from '@shopify/flash-list';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { db } from '../database'; // db connection/instance
import { styles } from '../styles/styles'; // use the shared file of styles

type Activity = { // define shape of an Activity
    id: number;
    steps: number;
    date: number;
};

export default function HomeScreen() { // display the list of entries in the activities table
  const [activities, setActivities] = useState<Activity[]>([]);
    const loadActivities = () => { // reloads activities list 
    const result = db.getAllSync(
      'SELECT * FROM activities ORDER BY date DESC;' // get all activities and sort by newest first
    ) as Activity[];

    setActivities(result); // update state with results
  };

  useFocusEffect(
    useCallback(() => {
      loadActivities(); // reload list 
    }, [])
  );

  return ( // render content on page
    <View style={styles.screenContainer}>
      <Text style={styles.heading}>Home screen</Text>

      <Button // add activity button -> redirect to add activtiy screen
        title="Add activity"
        onPress={() => router.push('/add-activity')}
      />
      
      <View style={styles.verticalSpace}></View>

      <Button // Delete all button -> delete all activities from db
        title="Delete all"
        onPress={() => {
          db.runSync('DELETE FROM activities;')
          loadActivities(); // reload list
      }}
      />

      <FlashList
        data={activities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>Steps: {item.steps}</Text>
            <Text>Date: {new Date(item.date * 1000).toLocaleString()}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyList}>No activities yet</Text>}
      />
    </View>
  );
}