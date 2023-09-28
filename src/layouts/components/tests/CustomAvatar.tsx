import { forwardRef, Avatar, AvatarProps } from "@chakra-ui/react";
import AvatarDefaultIcon from "@img/icons/avatar-default.svg";

const CustomAvatar = forwardRef<AvatarProps, "span">((props, ref) => {
  const src = props.src?.length ? props.src : AvatarDefaultIcon;
  return <Avatar {...props} ref={ref} src={src} data-testid="custom-avatar" />;
});