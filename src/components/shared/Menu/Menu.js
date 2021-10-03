import React from "react"
import { Link } from "gatsby"
import List from "../../UIElements/List/List"
import Typography from "../../UIElements/Typohraphy/Typography"
import MenuAnimation from "../../UIElements/Animation/MenuAnimation"
import Container from "../../UIElements/Container/Container"
import Button from "../../UIElements/Button/Button"
import BackAnimation from "../../UIElements/Animation/BackAnimation"
const Menu = (props) => {
  const menuItems = [
    { title: "Home", url: "/", id: 1 },
    { title: "About", url: "/about", id: 2 },
    { title: "Client's story", url: "/story", id: 3 },
    { title: "Book meeting", url: "/booking", id: 4 },
    { title: "Write message", url: "/message", id: 5 },
  ]
  return (
    <Container>
      <Container container width='1-col' direction='row' gap='large'>
        <List>
          <Button type='primary--left' onClick={props.close}>
            Close
          </Button>
          {menuItems.map((item) => (
            <Link
              onClick={props.close}
              className='menu-link'
              key={item.id}
              to={item.url}
            >
              {item.title}
            </Link>
          ))}
        </List>
        <MenuAnimation name='menuAnim' />
      </Container>
    </Container>
  )
}

export default Menu
