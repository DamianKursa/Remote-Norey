import React from "react"
import { Link } from "gatsby"
import List from "../../UIElements/List/List"
import Typography from "../../UIElements/Typohraphy/Typography"
import MenuAnimation from "../../UIElements/Animation/MenuAnimation"
import Container from "../../UIElements/Container/Container"
const Menu = () => {
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
          <Typography color='primary' align='left' variant='h6'>
            Find what you are looking
          </Typography>
          {menuItems.map((item) => (
            <Link className='menu-link' key={item.id} to={item.url}>
              {item.title}
            </Link>
          ))}
        </List>
        <MenuAnimation name='menuAnim' />
      </Container>
      <Container padding="3rem 4rem" container width='1-col' direction='row' gap='large'>
        <Typography color='primary' align='left' variant='h6'>
          Latest news
        </Typography>
        
      </Container>
    </Container>
  )
}

export default Menu
