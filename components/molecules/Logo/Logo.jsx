import cn from "classnames";
import PropTypes from "prop-types";
import styles from "./logo.module.scss";

import Link from "../../atoms/Link";
import Image from "../../atoms/Image";

const Logo = ({ className, height, width }) => {
  const classes = cn(styles.logo, className);

  return (
    <Link url="/">
      <Image
        className={classes}
        src="https://res.cloudinary.com/insites-digital-ltd/image/upload/v1625492426/Logo_12f147ea86.svg"
        alt="Insites Digital"
        height={height}
        width={width}
      />
    </Link>
  );
};

export default Logo;

Logo.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

Logo.defaultProps = {
  height: 30,
  width: 44,
};
