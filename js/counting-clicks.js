import ReactDOM from '../web_modules/react-dom.js';
import {html} from '../web_modules/htm/react.js';
import {useState} from '../web_modules/react.js';

//========== Model

const rootModel = {
  numberOfClicks: 0,
};

//========== Component

function CountingClicks({rootModel: initialRootModel}) {
  const [rootModel, setRootModel] = useState(initialRootModel);
  return html`
    <div>
      <a href="" onClick=${handleIncrement}>Number of clicks: ${rootModel.numberOfClicks}</a>
      <p />
      <button onClick=${handleReset}>Reset</button>
    </div>
  `;

  function handleIncrement(event) {
    event.preventDefault();
    const nextRootModel = {
      numberOfClicks: rootModel.numberOfClicks + 1,
    };
    setRootModel(nextRootModel);
  }
  function handleReset(event) {
    const nextRootModel = {
      numberOfClicks: 0,
    };
    setRootModel(nextRootModel);
  }
}

//========== Entry point

ReactDOM.render(
  html`<${CountingClicks} rootModel=${rootModel} />`,
  document.getElementById('root'));
