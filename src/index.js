import elementReady from 'element-ready';
import button from './ui/button';

(async () => {
  const selector = '#list_emoji_section';
  const element = await elementReady(selector);
  button.onclick = () => alert("We're LIVE!!!");
  element.insertBefore(button, element.childNodes[0]);
})();
