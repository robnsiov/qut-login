window.addEventListener("DOMContentLoaded", () => {
  const _ = document;
  
  const advButton = _.querySelector(".adv"),
  overlayEl = _.querySelector(".overlay"),
  latestContentBox = _.querySelector(".latest-content"),
  firstColnentBox = _.querySelector(".first-content"),
  gotoLoginButton = _.querySelector(".go-to-login"),
  guideLink = _.querySelector(".guide"),
  loginLink = _.querySelector(".login"),
  UserEl = _.querySelector(".user"),
  rndNumber = Math.trunc(Math.random()*7)+1;
  UserEl.style.background = `url('https://lms.qut.ac.ir/login1/images/${rndNumber}.jpg')`
  const addStyleHandler = () => {
    overlayEl.classList.toggle("move");
    latestContentBox.classList.toggle("active-latest");
    firstColnentBox.classList.toggle("hide-first-content");
    firstColnentBox.classList.toggle("change-first-content");
  };
  advButton.addEventListener("click", addStyleHandler);
  gotoLoginButton.addEventListener("click", addStyleHandler);
  guideLink.addEventListener("click", addStyleHandler);
  loginLink.addEventListener("click", addStyleHandler);
});
