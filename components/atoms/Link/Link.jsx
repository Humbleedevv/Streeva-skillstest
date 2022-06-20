import cn from "classnames";
import Link from "next/link";
import PropTypes from "prop-types";
import styles from "./link.module.scss";

const Links = ({ url, children, aria, className, type, external }) => {
  const classes = cn(styles.button, styles[type], className);

  if (url) {
    return external ? (
      <a
        href={url}
        className={classes}
        aria-label={aria}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    ) : (
      <Link href={url}>
        <a className={classes} aria-label={aria}>
          {children}
        </a>
      </Link>
    );
  }
};

export default Links;

Links.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  aria: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(["primary", "secondary"]),
  external: PropTypes.bool,
};

Links.defaultProps = {
  type: "primary",
  external: false,
};
