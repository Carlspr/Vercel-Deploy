
import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css"

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const NavBar = () => {
  return (
    <>
      <nav className={styles.NabvarContainer}>
        
       {
        menuItems.map((item)=>{
          return <ActiveLink key={item.text} text={item.text} href={item.href}></ActiveLink>
        })
       }
      </nav>
    </>
  );
};
