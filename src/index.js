import elementReady from 'element-ready';

import button from './ui/button';

elementReady(".p-customize_emoji_wrapper").then(element => {
  const injectBefore = '.p-customize_emoji_wrapper';
  const beforeElement = document.querySelector(injectBefore);
  
  button.onclick = () => alert("We're LIVE!!!");  
  beforeElement.before(button);
});
