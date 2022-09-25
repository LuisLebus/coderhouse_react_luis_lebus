import CartWidget from "./CartWidget"

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li><a href="#">Electronica</a></li>
        <li><a href="#">Hogar</a></li>
        <li><a href="#">Camping</a></li>
        <li><a href="#">Informatica</a></li>
      </ul>
      <CartWidget/>
    </nav>
  )
}
