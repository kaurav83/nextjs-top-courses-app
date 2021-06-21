import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { DetailedPeerCertificate } from 'tls';

export interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sort: SortEnum,
    setSort: (sort: SortEnum) => void;
}

export enum SortEnum {
    Rating,
    Price
}