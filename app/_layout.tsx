// connects screens to router
import { Stack } from 'expo-router'; // enable nav
import { StatusBar } from 'expo-status-bar'; // top status bar UI
import { useEffect } from 'react'; // used to run code when component mounts
import { initDatabase } from '../database'; // db initialisation function

export default function RootLayout() {
  useEffect(() => {
    initDatabase(); // when app starts -> run the db init function
  }, []);

  return ( // render screens
    <>
      <Stack />
      <StatusBar style="auto" />
    </>
  );
}