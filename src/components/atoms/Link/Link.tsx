import React from "react";

type LinkProps = {
  to: string;
  children?: JSX.Element;
};

const Link = (props: LinkProps) => (
  <a target="_blank" rel="noreferrer" href={props.to}>
    {props.children}
  </a>
);

export default Link;
