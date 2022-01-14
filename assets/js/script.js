var submitBtn = document.getElementById('submit');
var platformUserIdentifier = document.getElementById('platformUserIdentifier');
var platform = document.getElementById('platform');


// Makes search bar functional and puts the data in the console
var formSubmitHandler = function (event) {
    // prevents page from refreshing
    event.preventDefault();
    
    // gets users playerID. Create object for key value pairs for user input (encapsulation).
    var username = {
        
        user: platformUserIdentifier.value.trim(),
        platform: platform.options[platform.selectedIndex].value, 
    }
  
    // if we get a valid value submitted, then it uses that value to make a fetch request
    if (username) {
      getplatformUserIdentifier(username);
  
    //   repoContainerEl.textContent = '';
      platformUserIdentifier.value = '';
    } else {
      alert('Please enter a valid username');
    }
  };

//   gets user info
  var getplatformUserIdentifier = function (user) {
    var apiUrl = `https://cors-anywhere.herokuapp.com/https://public-api.tracker.gg/v2/apex/standard/profile/${user.platform}/${user.user}`
    


    fetch (apiUrl,
    {
        headers: { 
            'TRN-api-Key': '1a4488dd-ebfd-4fe6-b679-e353929b097e'
        } 
    
    })
    .then(res => res.json())
    .then(data =>{
        renderStats(data)
    })

    
}

  submitBtn.addEventListener('click', formSubmitHandler);



function renderStats(playerData) {
console.log(playerData)
    var statsArray= playerData.data.segments
    console.log(statsArray)
    
    // creates an object for all of the images so they can later be matched to the character names in the API data
    var img= {
        lifetime: "https://www.dailyesports.gg/wp-content/uploads/2019/02/Apex-Legends-Reveal-5-Things-You-Could-Be-Doing-While-You-Wait-800x400.jpg",
        seer: "https://assets2.rockpapershotgun.com/apex-seer.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/apex-seer.jpg", 
        lifeline: "https://zilliongamer.com/uploads/apex-legends-mobile/character/lifeline.jpg",
        bloodhound: "https://zilliongamer.com/uploads/apex-legends-mobile/character/bloodhound.jpg",
        fuse: "https://www.nme.com/wp-content/uploads/2021/01/apex-legends-fuse@2000x1270-696x442.jpg",
        horizon: "https://assets2.rockpapershotgun.com/apex-legends-horizon.jpg/BROK/resize/880%3E/format/jpg/quality/80/apex-legends-horizon.jpg",
        rampart: "https://cdn.mos.cms.futurecdn.net/KtuNMDP5YHSMUdQBKRuy2E-1024-80.jpg.webp",
        mirage: "https://cdn.wccftech.com/wp-content/uploads/2020/08/WCCFapexlegends32.jpg",
        wattson: "https://zilliongamer.com/uploads/apex-legends-mobile/character/wattson.jpg",
        caustic: "https://zilliongamer.com/uploads/apex-legends-mobile/character/caustic.jpg",
        crypto: "https://zilliongamer.com/uploads/apex-legends-mobile/character/crypto.jpg",
        loba: "https://images2.minutemediacdn.com/image/upload/c_fill,w_1080,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/dataimagejpegbase649j4AAQSkZJRgABAQAAAQABAAD2wBDAA-e0884e728f18bb8a6c5afd3bb7fce840.jpg",
        pathfinder: "https://zilliongamer.com/uploads/apex-legends-mobile/character/pathfinder.jpg",
        bangalore: "https://zilliongamer.com/uploads/apex-legends-mobile/character/bangalore.jpg",
        wraith: "https://zilliongamer.com/uploads/apex-legends-mobile/character/wraith.jpg",
        octane: "https://zilliongamer.com/uploads/apex-legends-mobile/character/octane.jpg",
        ash: "https://cdn.mos.cms.futurecdn.net/dsyFYx8kT5MJK5ETe9yRE9-1024-80.jpg.webp",
        revenant: "https://zilliongamer.com/uploads/apex-legends-mobile/character/revenant.jpg",
        gibraltar: "https://zilliongamer.com/uploads/apex-legends-mobile/character/gibraltar.jpg",
        valkyrie: "https://www.pcgamesn.com/wp-content/uploads/2021/05/apex-legends-valkyrie-character-guide-900x506.jpg", 
    }
    

    for (var i= 0; i < statsArray.length; i++) {

            // This allows the function to ignore a tag if it doesn't exist for a player. If the tag does exist, it will display the value for the stat
            let aRank= !statsArray[i].stats.arenaRankScore ? "No Arena Rank Score": statsArray[i].stats.arenaRankScore.displayValue
            let dam= !statsArray[i].stats.damage ? "No damage": statsArray[i].stats.damage.displayValue
            let kills= !statsArray[i].stats.kills ? "No kills": statsArray[i].stats.kills.displayValue
            let level= !statsArray[i].stats.level ? "No level": statsArray[i].stats.level.displayValue
            let rankScore= !statsArray[i].stats.rankScore ? "No rank": statsArray[i].stats.rankScore.displayValue
            let season10Wins= !statsArray[i].stats.season10Wins ? "No wins": statsArray[i].stats.season10Wins.displayValue
            let season10Kills= !statsArray[i].stats.season10Kills ? "No kills": statsArray[i].stats.season10Kills.displayValue
            let season11Wins= !statsArray[i].stats.season11Wins ? "No wins": statsArray[i].stats.season11Wins.displayValue
            let season11Kills= !statsArray[i].stats.season11Kills ? "No kills": statsArray[i].stats.season11Kills.displayValue
            let winningKills= !statsArray[i].stats.winningKills ? "No kills": statsArray[i].stats.winningKills.displayValue

            // Allows the function to search for the name of the character in the api so we can match it to a picture
            let name= statsArray[i].metadata.name
            name= name.toLowerCase().trim()
            let imgSrc= !img[name] ? "No Source Image": img[name] 

            // creates player cards using the data from the API
            console.log(!statsArray[i].stats.arenaRankScore ? "No Arena Rank Score": statsArray[i].stats.arenaRankScore.displayValue)
            console.log(statsArray[i].metadata.name)
            let playerDiv= document.createElement("div")
            playerDiv.classList.add("flip-card")
            playerDiv.innerHTML= `<div class="flip-card-inner">
               <div class="flip-card-front">
               <img src=${imgSrc}
               alt="No Image to Show" style="width:300px;height:200px;">
               </div>
               <div class="flip-card-back" id="Bangalore">
                   <h1>Character Name: ${statsArray[i].metadata.name}</h1>
                    <p>Arena Rank Score: ${aRank}</p>
                    <p>Damage: ${dam}</p>
                    <p>Kills: ${kills}</p>
                    <p>Level: ${level}</p>
                    <p>Rank Score: ${rankScore}</p>
                    <p>Season 10 Wins: ${season10Wins}</p>
                    <p>Season 10 Kills: ${season10Kills}</p>
                    <p>Season 11 Wins: ${season11Wins}</p>
                    <p>Season 11 Kills: ${season11Kills}</p>
                    <p>Winning Kills: ${winningKills}</p>
               </div>
           </div>`
        //  creates a new card for every character
        document.querySelector(".playerCard").appendChild(playerDiv)

    }
}








