var platform= '';
var platformUserIdentifier= '';

fetch (`https://cors-anywhere.herokuapp.com/https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${platformUserIdentifier}`,
{
    headers: { 
        'TRN-api-Key': '1a4488dd-ebfd-4fe6-b679-e353929b097e'
    } 

})
.then(res => res.json())
.then(data =>{
    console.log(data)
})

var platform= '';
var gamertag= '';

fetch (`https://cors-anywhere.herokuapp.com/https://public-api.tracker.gg/v2/apex/standard/search`,
{
    headers: { 
        'TRN-api-Key': '1a4488dd-ebfd-4fe6-b679-e353929b097e'
    } 

})
.then(res => res.json())
.then(data =>{
    console.log(data)
})

var segment= '';

fetch (`https://cors-anywhere.herokuapp.com/https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${platformUserIdentifier}/segments/${segmentType}`,
{
    headers: { 
        'TRN-api-Key': '1a4488dd-ebfd-4fe6-b679-e353929b097e'
    } 

})
.then(res => res.json())
.then(data =>{
    console.log(data)
})
