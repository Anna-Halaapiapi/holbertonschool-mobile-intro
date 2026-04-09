import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabaseSync('activities.db');

export function initDatabase() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS activities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      steps INTEGER NOT NULL,
      date INTEGER NOT NULL
    );
  `);
}
