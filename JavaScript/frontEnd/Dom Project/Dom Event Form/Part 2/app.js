// const tweetForm = document.querySelector('#tweetForm')
// const tweetsContainer = document.querySelector('#tweets')

// tweetForm.addEventListener('submit', function(e) {
//     e.preventDefault()
//     // const userInput = document.querySelectorAll('input')[0];
//     // const tweetInput = document.querySelectorAll('input')[1];
//     // console.log(userInput.value, tweetInput.value)

//     const username = tweetForm.elements.username.value;
//     const tweet = tweetForm.elements.tweet.value;

//     const newTweet = document.createElement('li')
//     const bTag = document.createElement('b')
//     bTag.append(username)
//     newTweet.append(bTag)
//     newTweet.append(`_ ${tweet}`)
//     tweetsContainer.append(newTweet)
// })

// const lis = document.querySelector('li');

// for (let li of lis) {
//     li.addEventListener('click', function() {
//         li.remove();
//     })
// }

const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");

tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // const userInput = document.querySelectorAll('input')[0];
  // const tweetInput = document.querySelectorAll('input')[1];
  // console.log(userInput.value, tweetInput.value)

  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = "";
  tweetInput.value = "";
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  const italic = document.createElement("i");

  bTag.append(username);
  newTweet.append(bTag);

  italic.append(`_ ${tweet}`);
  newTweet.append(italic);

  // newTweet.append(`_ ${tweet}`)

  tweetsContainer.append(newTweet);
};

tweetsContainer.addEventListener("click", function (e) {
  console.log(e.target);
  //    e.target.nodeName === 'LI' && e.target.remove()
  if (e.target.nodeName === "LI") {
    e.target.remove();
  }
});
