import * as migration_20241207_101241 from './20241207_101241';

export const migrations = [
  {
    up: migration_20241207_101241.up,
    down: migration_20241207_101241.down,
    name: '20241207_101241'
  },
];
