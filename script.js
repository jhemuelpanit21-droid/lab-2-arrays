// ===========================================
// SIMPLE MUSIC COLLECTION - ARRAYS LAB
// ===========================================

// ===========================================
// STEP 1: ARRAY DECLARATION
// ===========================================
let mySongs = [
    "Shape of You",
    "Blinding Lights",
    "Hotel California",
    "Bohemian Rhapsody",
    "Rolling in the Deep"
];

let myArtists = [
    "Ed Sheeran",
    "The Weeknd",
    "Eagles",
    "Queen",
    "Adele"
];

let genres = [
    "Pop",
    "Rock",
    "Jazz",
    "R&B",
    "Hip Hop"
];

let favorites = []; // starts empty

// ===========================================
// STEP 2: ARRAY ACCESS
// ===========================================
function displaySelectedSongs() {
    let firstSong = mySongs[0];
    let lastSong = mySongs[mySongs.length - 1];
    let middleSong = mySongs[Math.floor(mySongs.length / 2)];

    document.getElementById('first-song').textContent = firstSong;
    document.getElementById('last-song').textContent = lastSong;
    document.getElementById('middle-song').textContent = middleSong;

    showMessage("Displayed first, middle, and last songs!");
}

// ===========================================
// STEP 3: ARRAY PROPERTIES
// ===========================================
function showMusicStats() {
    let songCount = mySongs.length;
    let artistCount = myArtists.length;
    let genreCount = genres.length;
    let favoritesCount = favorites.length;

    if (mySongs.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add songs to mySongs array");
        return;
    }
    if (myArtists.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add artists to myArtists array");
        return;
    }
    if (genres.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add genres to genres array");
        return;
    }

    document.getElementById('song-count').textContent = songCount;
    document.getElementById('artist-count').textContent = artistCount;
    document.getElementById('genre-count').textContent = genreCount;
    document.getElementById('favorites-count').textContent = favoritesCount;

    showMessage("✅ Updated collection statistics!");
}

// ===========================================
// STEP 4: ARRAY METHODS - ADDING ITEMS
// ===========================================
function addSongToEnd() {
    mySongs.push("New Song");

    updateDisplays();
    showMessage("✅ Added 'New Song' to the end using .push()! New length: " + mySongs.length);
}

function addSongToBeginning() {
    mySongs.unshift("First Song");

    updateDisplays();
    showMessage("✅ Added 'First Song' to the beginning using .unshift()! New length: " + mySongs.length);
}

function addRandomToFavorites() {
    let randomIndex = Math.floor(Math.random() * mySongs.length);
    let randomSong = mySongs[randomIndex];
    favorites.push(randomSong);

    updateDisplays();
    showMessage("✅ Added '" + randomSong + "' to favorites!");
}

// ===========================================
// STEP 5: ARRAY METHODS - REMOVING ITEMS
// ===========================================
function removeLastSong() {
    let removedSong = mySongs.pop();

    updateDisplays();
    showMessage("✅ Removed '" + removedSong + "' from the end using .pop()!");
}

function removeFirstSong() {
    let removedSong = mySongs.shift();

    updateDisplays();
    showMessage("✅ Removed '" + removedSong + "' from the beginning using .shift()!");
}

// ===========================================
// STEP 6: ARRAY ITERATION
// ===========================================
function displayAllSongsForEach() {
    let songsHTML = "<h3>All Songs (using .forEach):</h3>";

    mySongs.forEach(function(song, index) {
        songsHTML += "<div class='song-item'>" + (index + 1) + ". " + song + "</div>";
    });

    document.getElementById('all-songs').innerHTML = songsHTML;
    showMessage("✅ Displayed all songs using .forEach()!");
}

function createFormattedSongList() {
    let formattedSongs = mySongs.map(function(song, index) {
        return (index + 1) + ". " + song + " ♫";
    });

    let songsHTML = "<h3>Formatted Songs (using .map):</h3>";

    formattedSongs.forEach(function(formattedSong) {
        songsHTML += "<div class='song-item'>" + formattedSong + "</div>";
    });

    document.getElementById('all-songs').innerHTML = songsHTML;
    showMessage("✅ Created formatted song list using .map() and displayed with .forEach()!");
}

// ===========================================
// STEP 7: ARRAY SEARCHING
// ===========================================
function searchForSong() {
    let searchTerm = document.getElementById('search-input').value;

    if (!searchTerm.trim()) {
        showMessage("❌ Please enter a song title to search for");
        return;
    }

    let position = mySongs.indexOf(searchTerm);

    if (position >= 0) {
        showMessage("✅ Found '" + searchTerm + "' at position " + (position + 1) + " using .indexOf()!");
    } else {
        showMessage("❌ Song '" + searchTerm + "' not found using .indexOf()!");
    }
}

function checkIfSongExists() {
    let searchTerm = document.getElementById('search-input').value;

    if (!searchTerm.trim()) {
        showMessage("❌ Please enter a song title to search for");
        return;
    }

    let exists = mySongs.includes(searchTerm);

    if (exists) {
        showMessage("✅ Song '" + searchTerm + "' exists in your collection using .includes()!");
    } else {
        showMessage("❌ Song '" + searchTerm + "' does not exist using .includes()!");
    }
}

// ===========================================
// STEP 8: ARRAY DESTRUCTURING
// ===========================================
function getTopThreeSongs() {
    if (mySongs.length < 3) {
        showMessage("❌ Need at least 3 songs for this operation!");
        return;
    }

    let [first, second, third] = mySongs;
    showMessage("✅ Top 3 songs using destructuring: 1) " + first + " 2) " + second + " 3) " + third);
}

function separateFirstSong() {
    let [first, ...others] = mySongs;
    showMessage("✅ First song: '" + first + "', Other songs: " + others.length + " using destructuring!");
}

// ===========================================
// HELPER FUNCTIONS
// ===========================================
function showMessage(text) {
    let messagesDiv = document.getElementById('messages');
    let currentTime = new Date().toLocaleTimeString();
    messagesDiv.innerHTML += '<p><strong>' + currentTime + ':</strong> ' + text + '</p>';
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '<p>Messages cleared!</p>';
}

function updateDisplays() {
    displaySelectedSongs();
    showMusicStats();
}

// ===========================================
// TESTING YOUR CODE
// ===========================================
console.log("My Songs:", mySongs);
console.log("My Artists:", myArtists);
console.log("Genres:", genres);
console.log("Favorites:", favorites);
// Expose functions for testing in console
window.displaySelectedSongs = displaySelectedSongs;
window.showMusicStats = showMusicStats;