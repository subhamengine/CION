import React from "react";
import cx from "classnames";
import "./ExternalLink.scss";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

function ExternalLink({ href, children, className }: Props) {
  const classNames = cx("link-underline", className);
  return href === "" ? (
    <a href="#" className={classNames}>
      {children}
    </a>
  ) : (
    <a href={href} className={classNames} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default ExternalLink;
