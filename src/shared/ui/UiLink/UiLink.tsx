import { FC } from "react";
import { UiLinkProps } from ".";
import { Link, LinkProps } from "@nextui-org/react";
import { redirect, useNavigate } from "react-router-dom";

export const UiLink: FC<UiLinkProps & LinkProps> = (props) => {
  const navigate = useNavigate();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    props.href && navigate(props.href);
  };

  return (
    <Link underline="none" {...props} onClick={(e) => handleClick(e)}>
      {props.children}
    </Link>
  );
};
