var platform= 'origin';
var platformUserIdentifier= 'AmbitiouslyErik';

fetch (`https://cors-anywhere.herokuapp.com/https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${platformUserIdentifier}`,
{
    headers: { 
        'TRN-api-Key': '1a4488dd-ebfd-4fe6-b679-e353929b097e'
    } 

})
.then(res => console.log(res.json()))
.then(data =>{
    console.log(data)
})