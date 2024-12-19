class Human {
  readonly name: string;
  readonly age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person3 = new Human("soma", 20);
console.log(person3);

// Access Modifiers
// public
// Private
// Protected

// Public :Can be accessed from anywhere,both inside and outside the class
// Private: Can be accessed only within the class they are defined in
// Protected:Can be accessed from within the class they are defined in,as well as any subclass that extend the class

class Game {
  public gameName: string;
  private gameHealth: number;
  private gameTime: number;
  constructor(gameName: string, gameHealth: number, gameTime: number) {
    this.gameName = gameName;
    this.gameHealth = gameHealth;
    this.gameTime = gameTime;
  }
  getHealth() {
    return this.gameHealth;
  }
}

const player1 = new Game("sofikul sk", 100, 2000);

console.log(player1);

class Spotify {
  public song_name: string;
  public song_duration: number;
  public movie_name: string;
  protected singer_name: string;
  private year: number;
  constructor(
    song_name: string,
    song_duration: number,
    movie_name: string,
    singer_name: string,
    year: number
  ) {
    this.song_name = song_name;
    this.song_duration = song_duration;
    this.singer_name = singer_name;
    this.year = year;
    this.movie_name = movie_name;
  }
  getYear() {
    return this.year;
  }
}

const song1 = new Spotify("janam", 4, "udit narayan", "veer zara", 2008);
console.log(song1.getYear());

class Bgmi {
  public playerName: string;
  public playerRating: number;
  public playerHealth: number;
  public playerId: string;
  private playerLocation: string;
  private playerTransaction: string;
  constructor(
    playerName: string,
    playerRating: number,
    playerHealth: number,
    playerId: string,
    playerLocation: string,
    playerTransaction: string
  ) {
    this.playerName = playerName;
    this.playerRating = playerRating;
    this.playerHealth = playerHealth;
    this.playerId = playerId;
    this.playerLocation = playerLocation;
    this.playerTransaction = playerTransaction;
  }
  getPrivateLocation() {
    return this.playerLocation;
  }
  getPrivateTransaction() {
    return this.playerTransaction;
  }
}

const bgmiPlayer1 = new Bgmi(
  "xyz",
  4.5,
  100,
  "12@westbengal",
  "murshidabad",
  "23/12/2024-10.7k"
);

console.log(bgmiPlayer1);
