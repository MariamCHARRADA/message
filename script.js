const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Niahahahah😈!!<br> you've just sealed your fate!<br> Brace yourself for another year<br> of my weirdness, marjjjness,<br>and barchaa bous w 3adh w 7ess 😈";
  gif.src =
    "https://media3.giphy.com/media/maPtLNbAsA0pRkozT9/giphy.gif?cid=ecf05e47oaapvfc34alqg0ip68ot9c3ge28vrlo1wlw3ek3n&ep=v1_gifs_related&rid=giphy.gif&ct=g"
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});