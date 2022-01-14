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
        console.log(data)
    })
}

  submitBtn.addEventListener('click', formSubmitHandler);


