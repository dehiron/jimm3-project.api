export = {
   type: "postgres",
   host: "localhost",
   port: 5432,
   username: "hidehiroaya",
   password: "",
   database: "soloapi_db",
   synchronize: false, //true→falseに変えた
   logging: false,
   entities: [
      "src/entity/**/*.ts"
   ],
   migrations: [
      "src/migration/**/*.ts"
   ],
   seeds: [
      "src/seeds/**/*.ts"
   ],
   subscribers: [
      "src/subscriber/**/*.ts"
   ],
   cli: {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   },
};