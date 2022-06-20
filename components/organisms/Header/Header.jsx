import cn from "classnames";
import PropTypes from "prop-types";
import styles from "./header.module.scss";
import { useContext } from "react";
import { ContentContext } from "../../../components/common/ContentProvider";

import Container from "../../atoms/Container";
import Logo from "../../molecules/Logo";
import Navigation from "../../molecules/Navigation";

const Header = ({ className }) => {
  const classes = cn(styles.header, className);
  const { menus } = useContext(ContentContext);

  return (
    <header className={classes}>
      <Container className={styles.container}>
        <Logo />
        <Navigation className={styles.navigation} links={menus?.primary} />
      </Container>
    </header>
  );
};

export default Header;

Header.propTypes = {
  className: PropTypes.string,
};
