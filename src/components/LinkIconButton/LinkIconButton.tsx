import { FC, ReactNode } from 'react';
import { IconButton } from '@mui/material';

interface ILinkIconButtonProps {
  link: string;
  children: ReactNode;
}

export const LinkIconButton: FC<ILinkIconButtonProps> = ({
  link,
  children,
}) => {
  return (
    <IconButton
      href={link}
      target="_blank"
      rel="noreferrer"
      color="primary"
      sx={{ p: 1 }}
    >
      {children}
    </IconButton>
  );
};
