import './Hello-button.css';

export default class HelloWorldButton {
  render() {
    const button = document.createElement('button');
    button.innerHTML = 'Press Me!!';
    button.classList.add('hello-world-button');
    button.onclick = function() {
      const p = document.createElement('p');
      p.innerHTML = 'Hello world';
      p.classList.add('hello-world-text');
      body.appendChild(p);
    };
    const body = document.querySelector('body');
    body.appendChild(button);
  }
}
