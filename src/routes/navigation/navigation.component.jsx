import { Fragment, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { CartContext } from '../../context/cart.context'
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles.jsx'

function Navigation() {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer className="logo-container" to="/">
          <CrownLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
