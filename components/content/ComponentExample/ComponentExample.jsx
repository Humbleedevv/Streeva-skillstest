import cn from "classnames";
import PropTypes from "prop-types";
import styles from "./component-example.module.scss";

import Heading from "../../atoms/Heading";
import Body from "../../atoms/Body";

//* This is an example of how to structure a basic CMS component

const ComponentExample = ({ title, text, className }) => {
  const classes = cn(styles.componentExample, className);
  console.log("ComponentExample");
  return (
    <section className={classes}>
      <Heading element="h4">{title}</Heading>
      <Body>{text}</Body>
    </section>
  );
};

export default ComponentExample;

ComponentExample.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};
