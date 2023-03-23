import { removeSpaces } from './remove-spaces';

export const cardOwnerPattern = (owner: string): string => removeSpaces(owner).toUpperCase();
