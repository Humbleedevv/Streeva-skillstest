import cn from "classnames";
import PropTypes from "prop-types";
import styles from "./hero.module.scss";

import Container from "../../atoms/Container";
import Img from "../../atoms/Image";

const Hero = ({ className }) => {
  const classes = cn(styles.hero, className);

  return (
    <section className={classes}>
      <Container className={styles.container}>HERO</Container>
    </section>
  );
};

export default Hero;

Hero.propTypes = {
  className: PropTypes.string,
};
