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
    
    for (var i= 0; i < statsArray.length; i++) {
        // console.log(statsArray[i].stats.damage.displayName)
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



            console.log(!statsArray[i].stats.arenaRankScore ? "No Arena Rank Score": statsArray[i].stats.arenaRankScore.displayValue)

            let playerDiv= document.createElement("div")
            playerDiv.classList.add("flip-card")
            playerDiv.innerHTML= `<div class="flip-card-inner">
               <div class="flip-card-front">
                   <img src="https://zilliongamer.com/uploads/apex-legends-mobile/character/bangalore.jpg"
                       alt="Bangalore" style="width:300px;height:200px;">
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
         
        document.querySelector(".playerCard").appendChild(playerDiv)

    }
}

const imageArray = ["https://assets2.rockpapershotgun.com/apex-seer.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/apex-seer.jpg","https://cdn.mos.cms.futurecdn.net/KtuNMDP5YHSMUdQBKRuy2E-1024-80.jpg.webp", "https://cdn.wccftech.com/wp-content/uploads/2020/08/WCCFapexlegends32.jpg", "https://assets2.rockpapershotgun.com/apex-legends-horizon.jpg/BROK/resize/880%3E/format/jpg/quality/80/apex-legends-horizon.jpg", "https://www.nme.com/wp-content/uploads/2021/01/apex-legends-fuse@2000x1270-696x442.jpg", "https://zilliongamer.com/uploads/apex-legends-mobile/character/lifeline.jpg", "https://zilliongamer.com/uploads/apex-legends-mobile/character/wattson.jpg", "https://zilliongamer.com/uploads/apex-legends-mobile/character/caustic.jpg", "https://zilliongamer.com/uploads/apex-legends-mobile/character/gibraltar.jpg", "https://zilliongamer.com/uploads/apex-legends-mobile/character/crypto.jpg", "https://images2.minutemediacdn.com/image/upload/c_fill,w_1080,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/dataimagejpegbase649j4AAQSkZJRgABAQAAAQABAAD2wBDAA-e0884e728f18bb8a6c5afd3bb7fce840.jpg", "https://zilliongamer.com/uploads/apex-legends-mobile/character/pathfinder.jpg", "https://zilliongamer.com/uploads/apex-legends-mobile/character/bloodhound.jpg", "https://zilliongamer.com/uploads/apex-legends-mobile/character/revenant.jpg", "https://cdn.mos.cms.futurecdn.net/dsyFYx8kT5MJK5ETe9yRE9-1024-80.jpg.webp", "https://zilliongamer.com/uploads/apex-legends-mobile/character/octane.jpg", "https://zilliongamer.com/uploads/apex-legends-mobile/character/wraith.jpg", "https://zilliongamer.com/uploads/apex-legends-mobile/character/bangalore.jpg"]



// This needs to match the card name to populate the correct card

// I can populate all stats with 'display name: display value'

// make a sweat score based on the percentile in the stats


