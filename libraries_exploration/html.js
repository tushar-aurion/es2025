import { sampleSize } from 'typetify';

const participants = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
    { name: 'Diana', age: 28 },
    { name: 'Eve', age: 26 }
];

const winners = sampleSize(participants, 3);

// Log original participants
console.log('Original Participants:', participants);

// Log winners
console.log('Winners:', winners);
