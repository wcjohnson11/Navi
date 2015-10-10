import element from 'dekujs/virtual-element';
import { deku, render } from 'dekujs/deku';
import Navi from '../lib';

let app = deku(<div style="display:block;text-align:center;">
  <Navi>
  </Navi>
</div>);

render(app, document.querySelector('main'));
