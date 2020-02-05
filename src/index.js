import helloWorld from './hello-world';
import addImage from './adding-image';
import HelloButton from './components/Hello-button/Hello-button';

helloWorld();
addImage();
const helloButton = new HelloButton();
helloButton.render();
