import { SetMetadata } from '@nestjs/common';
import { ENUM_ROLE } from 'enums';

// eslint-disable-next-line @typescript-eslint/naming-convention
// export const Roles = Reflector.createDecorator<ENUM_ROLE[]>();

export const Roles = (...roles: ENUM_ROLE[]) => SetMetadata('roles', roles);
