// initialise db tables and db connection to use
import * as SQLite from 'expo-sqlite'; // import SQLite library from Expo

export const db = SQLite.openDatabaseSync('activities.db'); // create 'db' connection and create local db file 'activities.db'

export function initDatabase() { // called when app starts to init db and create tables if non existent
  db.execSync(`
    CREATE TABLE IF NOT EXISTS activities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      steps INTEGER NOT NULL,
      date INTEGER NOT NULL
    );
  `);
}
