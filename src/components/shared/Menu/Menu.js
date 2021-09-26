import React from "react"
import { Link } from 'gatsby'

const Menu = () => {

  const menuItems = [
    { title: "Home", url: "/", id: 1 },
    { title: "About", url: "/about", id: 1 },
    { title: "Client's story", url: "/story", id: 1 },
    { title: "Book meeting with us", url: "/booking", id: 1 },
    { title: "Write message to us", url: "/booking", id: 1 },
  ]
  return (
    <div>
      {menuItems.map((item) => (
        <Link
          key={item.id}
          style={{
            flexDirection: `${props.direction}`,
            color: `${props.color}`,
            textDecoration: "none",
          }}
          to={item.url}
        >
        </Link>
      ))}
    </div>
  )
}

export default Menu
