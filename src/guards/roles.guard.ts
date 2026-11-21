import {
  type CanActivate,
  type ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { type User } from 'entities/user.entity';
import { type ENUM_ROLE } from 'enums';
import { isEmpty } from 'lodash';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<ENUM_ROLE[]>(
      'roles',
      context.getHandler(),
    );
    // console.log(roles);
    if (isEmpty(roles)) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = <User>request.user;
    return roles.includes(user.role);
  }
}
