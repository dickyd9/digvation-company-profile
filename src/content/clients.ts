export type ClientItem = {
  name: string;
  href: string;
  logo: string;
  logoType: 'wordmark' | 'mark';
  width: number;
  height: number;
};

/** Only approved clients with an official public logo belong in this list. */
export const clients: ClientItem[] = [
  {
    name: 'Poseidon Filter',
    href: 'https://poseidonfilter.id/',
    logo: 'https://poseidonfilter.id/poseidon-logo.svg',
    logoType: 'wordmark',
    width: 178,
    height: 95,
  },
  {
    name: 'Leaf Lab',
    href: 'https://leaf-lab.digvation.id/',
    logo: 'https://leaf-lab.digvation.id/icons/icon-512.png',
    logoType: 'mark',
    width: 512,
    height: 512,
  },
];
