import { removeExtraSpaces } from '@shared/utils';

export const cardOwnerPattern = (owner: string): string => removeExtraSpaces(owner).toUpperCase();
