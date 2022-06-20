import cn from "classnames";
import PropTypes from "prop-types";
import styles from "./navigation.module.scss";

import Link from "../../atoms/Link";

const Navigation = ({ links, className }) => {
  const classes = cn(styles.nav, className);
  return (
    !!links && (
      <nav className={classes}>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.label}>
                <Link url={link.url} external={true}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    )
  );
};

export default Navigation;

Navigation.propTypes = {
  links: PropTypes.array,
  className: PropTypes.string,
};