import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isPositive', async: false })
export class IsPositiveConstraint implements ValidatorConstraintInterface {
  validate(positiveNumber: number, args: ValidationArguments) {
    return positiveNumber >= 1;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Number must be a positive number';
  }
}

@ValidatorConstraint({ name: 'threeLength', async: false })
export class overThreeLengthConstraint implements ValidatorConstraintInterface {
  validate(str: string, args: ValidationArguments) {
    return str.length >= 3;
  }

  defaultMessage(args: ValidationArguments) {
    return 'The length should be 3 or more.';
  }
}

export function IsPositiveOne(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'isPositiveOne',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: number, args: ValidationArguments) {
          if (value !== -1 && value < 0) {
            // Convert the number to 2
            args.object[propertyName] = 1;
          }
          return true;
        },
      },
    });
  };
}
