function songDecoder(song){
    return song.split("WUB").filter(x => x !== "").join(" ");
}

console.log(songDecoder("AWUBBWUBC"))