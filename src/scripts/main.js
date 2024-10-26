import { LikeButton } from './like-button';

function main() {
  const $app = document.querySelector('#app');
  if (!$app) {
    throw new Error('#app is not found');
  }

  const likeBtn = new LikeButton();
  const $button = likeBtn.render().el;
  $app.appendChild($button);
}

window.addEventListener('DOMContentLoaded', main);
