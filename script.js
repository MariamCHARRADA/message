const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  // Existing code to change question and gif
  question.innerHTML = "Niahahahah 😈<br> you've just sealed your fate!";
  gif.src = "https://media3.giphy.com/media/maPtLNbAsA0pRkozT9/giphy.gif?cid=ecf05e47oaapvfc34alqg0ip68ot9c3ge28vrlo1wlw3ek3n&ep=v1_gifs_related&rid=giphy.gif&ct=g";


  // Adding the new text dynamically under the question
  const additionalText = document.createElement('p');
  additionalText.className = 'additional-text';
  additionalText.innerHTML = "Brace yourself for another year<br> of my weirdness, marjjjness, and<br>baarcha bous w 3adh w taanig w 7ess! <br> Welcome to the chaos haboubii 😘<br> Kol aaam wenty l hoob 😍 <br> weni l klab 😝 ahaha ";

  wrapper.appendChild(additionalText);
});

noBtn.addEventListener("mouseover", () => {
  // Existing code for moving the noBtn
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
