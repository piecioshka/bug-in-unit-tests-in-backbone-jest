import { LikeButton } from './like-button';

describe('LikeButton', () => {
  let likeButton;

  beforeEach(() => {
    likeButton = new LikeButton();
    document.body.appendChild(likeButton.render().el);
  });

  afterEach(function () {
    likeButton.remove();
  });

  test('should have the correct tag name and class name', () => {
    expect(likeButton.tagName).toBe('button');
  });

  test('should call onClick method when clicked', () => {
    const onClickSpy = jest.spyOn(likeButton, 'handleClick');
    likeButton.$el.trigger('click');
    expect(onClickSpy).toHaveBeenCalled();
    onClickSpy.mockRestore();
  });
});
