function ToggleButton({ $target, text }) {
  const $button = document.createElement('button');

  this.render = () => {
    $button.textContent = text;
    let isInit = false;

    if (!isInit) {
      $target.appendChild($button);

      $button.addEventListener('click', () => {
        if ($button.style.textDecoration === 'line-through') {
          $button.style.textDecoration = 'none';
        } else {
          $button.style.textDecoration = 'line-through';
        }
      });
      isInit = true;
    }
  };

  this.render();
}

const $app = document.querySelector('#app');

new ToggleButton({
  $target: $app,
  text: 'Button1',
});

new ToggleButton({
  $target: $app,
  text: 'Button2',
});

new ToggleButton({
  $target: $app,
  text: 'Button3',
});

new ToggleButton({
  $target: $app,
  text: 'Button4',
});