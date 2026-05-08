// Array of song objects
const songs = [
  { name: "Shape of You", rating: 5 },
  { name: "Believer", rating: 4 },
  { name: "Perfect", rating: 5 },
  { name: "Faded", rating: 3 },
  { name: "Senorita", rating: 4 }
];

// Display all song names using map()
const songNames = songs.map(song => song.name);

console.log("Playlist Songs:");
console.log(songNames);

// Find highly rated songs using filter()
const topSongs = songs.filter(song => song.rating >= 4);

console.log("\nTop Rated Songs:");
console.log(topSongs);

// Calculate total ratings using reduce()
const totalRating = songs.reduce(
  (sum, song) => sum + song.rating,
  0
);

console.log("\nTotal Rating:", totalRating);

// Calculate average rating
const averageRating = totalRating / songs.length;

console.log("Average Rating:", averageRating);

// Add "🔥" to top songs using map()
const trendingSongs = songs.map(song =>
  song.rating === 5
    ? `🔥 ${song.name}`
    : song.name
);

console.log("\nTrending Playlist:");
console.log(trendingSongs);