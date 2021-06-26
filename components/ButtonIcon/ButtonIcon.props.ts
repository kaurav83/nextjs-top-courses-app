import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import OpenIcon from './openMenu.svg';
import CloseIcon from './closeMenu.svg';

export const icons = {
    OpenIcon,
    CloseIcon
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: 'primary' | 'white';
    icon: IconName;
}