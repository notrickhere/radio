// How to begin: 
// Create a new HTML/CSS/JS and complete the following in your .js file
// Make a radio Object.Give it a property called stations and make the value an array of station objects


// Give each station object a property called name and songs. Name should be a string and should be an array of song objects.
// Song object should have two properties: title and artist
// Create a method on your radio object that changes the station randomly. 

// When the station is changed, pick a song from that station console.log("Now Playing:" + song,title + "by" + song.artist)

// Submission: Submit a share link of your repl file here

let radio = {
    stations: 
    [
        station1 = {
            name:"Hard Style",
            songs: {
                title: "Legend",
                artist: "Tevvez"
            }
        },
        station2 = {
            name:"Russian Techno",
            songs: {
                title: "Painkiller",
                artist: "Skurt"
            }
        },
        station3 = {
            name:"Valorant",
            songs: {
                title: `Can't Slow Me Down`,
                artist: "Mirani"
            }
        }
    ],
}
let currentSong = document.querySelector('.midOfBox')

const randomStation = (min, max) =>{
    return Math.floor(Math.random() * max) + min;
}

// function to switch station
    //randomize station returns a number

    //if station is 1
        //console.log
    //else if station is 2
        //console.log
    //else if station is 3
        //console.log 
const playSound = () => {
    let vinylSound = document.getElementById('vinyl')
    vinylSound.play()
}
const playRadio = () => {
    
    if(randomStation(1, radio.stations.length) === 1){
        console.log(`Now Playing from ${radio.stations[0].name}: ${radio.stations[0].songs.title} by ${radio.stations[0].songs.artist}`)

        currentSong.innerHTML = `Now Playing from ${radio.stations[0].name}: ${radio.stations[0].songs.title} by ${radio.stations[0].songs.artist}`
    }else if(randomStation(1, radio.stations.length) === 2){
        console.log(`Now Playing from ${radio.stations[1].name}: ${radio.stations[1].songs.title} by ${radio.stations[1].songs.artist}`)

        currentSong.innerHTML = `Now Playing from ${radio.stations[1].name}: ${radio.stations[1].songs.title} by ${radio.stations[1].songs.artist}`

    }else if(randomStation(1, radio.stations.length) === 3){
        console.log(`Now Playing from ${radio.stations[2].name}: ${radio.stations[2].songs.title} by ${radio.stations[2].songs.artist}`)

        currentSong.innerHTML = `Now Playing from ${radio.stations[2].name}: ${radio.stations[2].songs.title} by ${radio.stations[2].songs.artist}`

    }
}
