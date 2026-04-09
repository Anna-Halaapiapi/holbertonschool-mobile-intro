import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { initDatabase } from '../database';

export default function RootLayout() {
  useEffect(() => {
    initDatabase(); // create table upon app start
  }, []);

  return (
    <>
      <Stack />
      <StatusBar style="auto" />
    </>
  );
}