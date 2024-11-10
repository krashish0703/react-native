import SQLite from 'react-native-sqlite-storage';

const database_name = 'Authors.db';
const database_version = '1.0';
const database_display_name = 'Circana Assignment';
const databas_size = 200000;


// SQLite.DEBUG(true);
SQLite.enablePromise(true);

let database;

export const getDBConnection = async() => {
    if(!database) {
        database = await SQLite.openDatabase(
            database_name,
            database_version,
            database_display_name,
            databas_size
        );
    }
    return database;
}

export const creatTable = async() => {
    const db = await getDBConnection();
    if(db) {
        await db.executeSql(
            `CREATE TABLE IF NOT EXISTS Authors (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE,
            gender TEXT
            );` 
        );
    } else {
        console.error("SQLiteDatabase: creatTable: unable to get database connection");
    }
};

