import Item from './component/item.js';
import Card from './component/card.js';

function App() {
  return (
      <>
          <h1>Minha Primeira Aplicação com React</h1>
          <ul>
            <Item text="Item 1"/>
            <Item> Item 2</Item>
            <Item text="Item ">
              3
            </Item>
          </ul>
          <Card />
      </>
  );
}

export default App;
