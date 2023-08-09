import styles from './header.module.css';

import ignitelogo from  '../assets/ignite-logo.svg';

export function Header () {
    return (
    <header className={styles.header}> 
        <img src={ignitelogo} alt="logotipo do ignites" />
     </header>
  );
}