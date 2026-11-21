import { Param, ParseUUIDPipe, type PipeTransform } from '@nestjs/common';
import { type Type } from '@nestjs/common/interfaces';
// export function Auth(roles: ENUM_ROLE[] = []): MethodDecorator {
//   console.log(roles);
//   return applyDecorators(
//     Roles(roles),
//     UseGuards(JwtAuthGuard, RolesGuard),
//     ApiBearerAuth(),
//   );
// }

export function UUIDParam(
  property: string,
  ...pipes: Array<Type<PipeTransform> | PipeTransform>
): ParameterDecorator {
  return Param(property, new ParseUUIDPipe({ version: '4' }), ...pipes);
}
