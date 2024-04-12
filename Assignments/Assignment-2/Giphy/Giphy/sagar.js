let key='sn5SiZ85xMWAYLdOZ3M9kp4Cqfn8raPA';
let url=`https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=50`;

fetch(url)
.then(response=>response.json())//parsing to json
.then(data => {console.log(data);
})
.catch(error => {
  console.error('Error fetching GIFs:', error);
});