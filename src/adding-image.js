import lionImg from '../images/lion.jpg';

export default function addImage() {
  const img = document.createElement('img');
  img.alt = 'lion image';
  img.title = 'title image';
  img.src = lionImg;
  img.width = 300;

  const body = document.querySelector('body');
  body.appendChild(img);
}
