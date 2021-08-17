import { Comparator } from '@suitest/types';
/**
 * Translate only values that might be unclear to user, like "^",
 * leave obvious comparators as they are
 */
export declare const translateComparator: (comparator: Comparator) => string;
