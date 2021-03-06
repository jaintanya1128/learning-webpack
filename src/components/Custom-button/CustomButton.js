import './CustomButton.scss';

class CustomButton {
  buttonCssClass = 'custom-button';

  render() {
    const button = document.createElement('button');
    const body = document.querySelector('body');
    button.innerHTML = 'Custom Button';
    button.onclick = function() {
      const p = document.createElement('p');
      p.innerHTML = 'Custom Text';
      p.classList.add('custom-text');
      body.appendChild(p);
    };

    // button.classList.add('custom-button');

    button.classList.add(this.buttonCssClass); //this will work after setting up babel loader to support ES6 features

    body.appendChild(button);
  }
}

export default CustomButton;
