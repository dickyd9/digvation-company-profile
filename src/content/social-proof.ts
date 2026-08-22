export type ClientItem = {
  name: string;
  href?: string;
};

/** Only public, verifiable client names belong in this list. */
export const clients: ClientItem[] = [
  { name: 'Poseidon Filter', href: 'https://poseidonfilter.id/' },
  { name: 'Leaf Lab', href: 'https://leaf-lab.digvation.id/' },
];
