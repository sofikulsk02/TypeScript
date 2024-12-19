import { NodeModuleEmitKind } from "ts-node";
interface bgmiDetails {
  playerName: string;
  playerId: number;
  playerLocation: string;
  playerTransaction: number;
}

const player_1_bgmi: bgmiDetails = {
  playerName: "sofikul sk",
  playerId: 122,
  playerLocation: "westBengal",
  playerTransaction: 122,
};

console.log(player_1_bgmi);

interface Movie {
  readonly name: string;
  ratings: number;
  genra?: string;
}
const movie1: Movie = {
  name: "Star wars",
  ratings: 4,
  genra: "Action",
};

// interfaces for functions

interface MathData {
  (x: number, y: number): number;
}

const getSum: MathData = (a, b) => {
  return a + b;
};

console.log(getSum(29, 2));

interface Song {
  songName: string;
  singerName: string;
  printSongInfo(songName: string, singerName: string): string;
}
const song1: Song = {
  songName: "Natural",
  singerName: "Imagin Dragon",
  printSongInfo: (songName, singerName) => {
    return `song :${songName},singer:${singerName}`;
  },
};

console.log(song1.printSongInfo("rajib", "sk"));

interface Books {
  bookName: string;
  bookAuthor: string;
  publicationYear: number;
  bookPublisher: string;
  bookPrice: number;
  isValidBook(bookName: string, bookAuthor: string): boolean;
}

const book1: Books = {
  bookName: "Broken Hearts",
  bookAuthor: "wiillium sheksphire",
  publicationYear: 1998,
  bookPublisher: "Jems&books",
  bookPrice: 1221,
  isValidBook: (bookName, bookAuthor) => {
    return true;
  },
};

console.log(book1);
// interface while uisng with the methods it should be mentioned and access by the same name mire

interface CricketTeams {
  Name: string;
  PlayerNo: number;
  salary: number;
  isQualified(ratings: number): boolean;
}

const team1: CricketTeams = {
  Name: "India",
  PlayerNo: 11,
  salary: 12000,
  isQualified: (ratings) => {
    return ratings > 4 ? true : false;
  },
};

console.log(team1.isQualified(2));
