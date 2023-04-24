import { removeExtraSpaces } from '../../../../6 - shared/utils';

export const cardOwnerPattern = (owner: string): string => removeExtraSpaces(owner).toUpperCase();
