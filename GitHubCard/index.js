/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/nisaChampagne')
  .then(res => {
    // console.log('data!',res.data)
    const cards = document.querySelector('.cards')
    const data = gitHubCard( res.data)
    cards.append(data)
  })
  .catch(err=> {
    console.log('error', err)
  })



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 


  // login = username
  // name= name
  // bio = bio
  // company = company
  // public_repos = repos
  // location = location
  // following and followers


   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "MarquesJ8023",
  "justsml",
  "bigknell",
  "Luis1D",
  "adkhiker",
  "dorabelme",
  "pdadlani",
  "brudnak"
];

const followersAxios = ()=> {
  axios.get("https://api.github.com/users/nisaChampagne/followers")
    .then(res=> {
      console.log(res.data, 'FOLLOWERS!')
    })
}

followersArray.forEach(follow=> {
  axios.get(`https://api.github.com/users/${follow}`)
    .then(res => {
      // console.log(res.data, 'look!')
      const cardsChild = document.querySelector('.cards')
      const data = gitHubCard(res.data)
      cardsChild.append(data)
    })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} /> res.data.avatar_url
  <div class="card-info">
    <h3 class="name">{users name}</h3> res.data.name
    <p class="username">{users user name}</p> res.data.login
    <p>Location: {users location}</p> res.data.login
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>  res.data.html_url
    </p>
    <p>Followers: {users followers count}</p>  res.data.followers
    <p>Following: {users following count}</p>  res.data.following
    <p>Bio: {users bio}</p>  res.data.bio
  </div>
</div>

*/

function gitHubCard(userObject){
  const card = document.createElement('div')
  const image = document.createElement('img')

  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const userName = document.createElement('p')
  const location = document.createElement('p')

  const profile = document.createElement('p')
  const profileUrl = document.createElement('a')

  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  card.append(image)
  card.append(cardInfo)
  cardInfo.append(name,userName, location, profile, followers, following,bio)
  profile.append(profileUrl)

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  userName.classList.add('username')

  image.src = userObject.avatar_url
  profile.url = userObject.html_url

  //set Content
  userName.textContent = `${userObject.login}`
  name.textContent = `${userObject.name}`
  location.textContent = `Location: ${userObject.location}`
  profileUrl.textContent = userObject.html_url
  profile.textContent = `Profile: ${profileUrl}`
  followers.textContent = `Followers: ${userObject.followers}`
  following.textContent = `Following: ${userObject.following}`
  bio.textContent = `Bio: ${userObject.bio}`

  return card
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
