// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  // Access target album in record collection
  const album = records[id];

  // If value is an empty string,
  //  delete the given prop property from the album
  if (value === "") {
    delete album[prop];
  }
  // If prop isn't tracks,
  //  update or set that album's prop to value
  else if (prop !== "tracks") {
    album[prop] = value;
  }
  // If prop is tracks,
  //  add value to the end of the album's existing tracks array
  else {
    album["tracks"] = album["tracks"] || [];
    album["tracks"].push(value);
  }

  // Your function must always return the entire record collection object
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');