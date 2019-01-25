import React from 'react';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react';

const CartComponent = ({ title, id, image, removeFromCart }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Button onClick={removeFromCart.bind(this, id)} color="red">
          Удалить
        </Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
);


const MenuComponent = ({ totalPrice, count, items }) => (
  <Menu>
    <Menu.Item>
      Магазин книг
    </Menu.Item>

    <Menu.Menu position='right'>
      <Menu.Item>
        Итого: &nbsp; <b>{totalPrice}</b> &nbsp;eur
      </Menu.Item>
      
      <Menu.Item>
      <Popup
        trigger={<Button  color='red'>Корзина (<b>{count}</b>)</Button>}
        content={items.map(book => <CartComponent {...book} />)}
        on="click"
        hideOnScroll
      />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default MenuComponent;