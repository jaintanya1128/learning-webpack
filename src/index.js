import helloWorld from './hello-world';
import addImage from './adding-image';
import HelloButton from './components/Hello-button/Hello-button';
import CustomButton from './components/Custom-button/CustomButton';

helloWorld();

addImage();

const helloButton = new HelloButton();
helloButton.render();

const customButton = new CustomButton();
customButton.render();
