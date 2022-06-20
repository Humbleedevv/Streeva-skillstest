import cn from "classnames";
import PropTypes from "prop-types";
import styles from "./footer.module.scss";
import { useContext } from "react";
import { ContentContext } from "../../../components/common/ContentProvider";

import Container from "../../atoms/Container";
import Logo from "../../molecules/Logo";
import Navigation from "../../molecules/Navigation";

const Footer = ({ className }) => {
  const classes = cn(styles.footer, className);
  const { menus } = useContext(ContentContext);

  return (
    <footer className={classes}>
      <Container className={styles.container}>
        <Logo />
        <Navigation className={styles.navigation} links={menus?.secondary} />
      </Container>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  className: PropTypes.string,
};
