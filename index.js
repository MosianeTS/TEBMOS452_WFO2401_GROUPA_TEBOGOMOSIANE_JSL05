// Array of song objects. Add at least 5 songs with title, artist, and genre properties.

const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Love Yours", artist: "J Cole", genre: "Hip Hop" },
    { title: "Cant Tell Me Nothing", artist: "Kanye West", genre: "Hip Hop" },
    { title: "Imithandazo", artist: "Kabza de Small", genre: "Amapiano" },
    { title: "Amazwe", artist: "Kabza de Small", genre: "Amapiano" },
    { title: "018", artist: "Cassper Nyovest", genre: "Hip Hop" }, 
    { title: "Kwelinye", artist: "Mellow & Sleazy", genre: "Amapiano" }, 
    { title: "All Things", artist: "Kirk Franklin", genre: "Gospel" },
    { title: "Run to Him", artist: "Cece Winans", genre: "Gospel" },
    { title: "Osama", artist: "Zakes Bantwini", genre: "House" }, 
    { title: "Buffalo Soldier", artist: "Bob Marley", genre: "Reggae" },
    
];

const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Amapiano",
    "Groot": "Hip Hop",
    "Joseph": "Gospel",
    "Lord-Tebogo": "House",
    "Lord-Thabo": "Reggae"
  
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {

    for (const guardian in guardians) {
        const musicGenre = guardians[guardian];       

        let guardianPlayList = songs.map(song => {
            if (song.genre === musicGenre) { 
                const songTitleSpan = document.createElement('span');
                songTitleSpan.className = 'song-title'; // Add the song-title class
                songTitleSpan.textContent = song.title;
                return `${songTitleSpan.outerHTML} by ${song.artist}`;
            } 
        }).filter(song => song !== undefined);  
        
        let playListsDivEl = document.getElementById('playlists');
        
        let guardianPlayListDivEl = document.createElement('div');  
        let guardianPlayListDivElheading = document.createElement('h1'); 
        let guardianPlayListUnorderedList = document.createElement('ul');

        guardianPlayListDivEl.className = 'playlist';  
        guardianPlayListUnorderedList.className = 'guardian-playlist';

        guardianPlayListDivElheading.textContent = `${guardian}'s Playlist`;      
        
        // Appends songs to unordered list for each guardian
        guardianPlayList.forEach(song => {
            let guardianPlayListUnorderedListItem = document.createElement('li'); 
            guardianPlayListUnorderedListItem.innerHTML = song;
            guardianPlayListUnorderedList.appendChild(guardianPlayListUnorderedListItem);
        });
        
        guardianPlayListDivEl.appendChild(guardianPlayListDivElheading);
        guardianPlayListDivEl.appendChild(guardianPlayListUnorderedList);          
        playListsDivEl.appendChild(guardianPlayListDivEl);
    }  
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);




/*
// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Love Yours", artist: "J Cole", genre: "Hip Hop" },
    { title: "Cant Tell Me Nothing", artist: "Kanye West", genre: "Hip Hop" },
    { title: "Imithandazo", artist: "Kabza de Small", genre: "Amapiano" },
    { title: "Amazwe", artist: "Kabza de Small", genre: "Amapiano" },
    { title: "018", artist: "Cassper Nyovest", genre: "Hip Hop" }, 
    { title: "Kwelinye", artist: "Mellow & Sleazy", genre: "Amapiano" }, 
    { title: "All Things", artist: "Kirk Franklin", genre: "Gospel" },
    { title: "Run to Him", artist: "Cece Winans", genre: "Gospel" },
    { title: "Osama", artist: "Zakes Bantwini", genre: "House" }, 
    { title: "Buffalo Soldier", artist: "Bob Marley", genre: "Reggae" },        
        
];
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Amapiano",
    "Groot": "Hip Hop",
    "Joseph": "Gospel",
    "Lord-Tebogo": "House",
    "Lord-Thabo": "Reggae"     
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {

    for (const guardian in guardians) {
        const musicGenre = guardians[guardian];       

        let guardianPlayList = songs.map(song => 
            {if (song.genre == musicGenre) { 
                return (`${song.title} by ${song.artist}`)
             } 
            
        }).filter(song => song !== undefined);  
        
        let playListsDivEl = document.getElementById('playlists');
        
        let guardianPlayListDivEl = document.createElement('div')  
        let guardianPlayListDivElheading = document.createElement('h1') 
        let guardianPlayListUnorderedList = document.createElement('ul')
        

        guardianPlayListDivEl.className = 'playlist';  
        guardianPlayListUnorderedList.className = 'guardian-playlist';

        guardianPlayListDivElheading.textContent = `${guardian}'s PlayList`      
        
        //Appends songs to unordered list for each guardian

        for (let song of guardianPlayList) {
            let guardianPlayListUnorderedListItem = document.createElement('li'); 
            let guardianPlayListSongSpanEl = document.createElement('span');   
            guardianPlayListSongSpanEl.className = 'song-title'; 
            guardianPlayListSongSpanEl.textContent = song.title;     
            guardianPlayListUnorderedListItem.textContent = song;            
            guardianPlayListUnorderedList.appendChild(guardianPlayListUnorderedListItem)
            guardianPlayListUnorderedListItem.appendChild(guardianPlayListSongSpanEl);  
        }             
              
        playListsDivEl.appendChild(guardianPlayListDivEl)
        guardianPlayListDivEl.appendChild(guardianPlayListDivElheading) 
        guardianPlayListDivEl.appendChild(guardianPlayListUnorderedList)          
              
    }  
   
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);

*/