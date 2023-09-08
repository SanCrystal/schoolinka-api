var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
import {
  IsString,
  validate,
  IsArray,
  IsOptional,
  IsNotEmpty,
  IsEmail,
  MaxLength,
  MinLength,
  IsInt,
  IsUUID,
} from "class-validator";
export class User {}
__decorate(
  [
    IsNotEmpty({ message: "Please enter a valid username" }),
    IsString({ message: "Username must be a string" }),
    MaxLength(30, { message: "Username must be at most 30 characters" }),
    MinLength(2, { message: "Username must be at least 2 characters" }),
  ],
  User.prototype,
  "userName",
  void 0,
);
__decorate(
  [
    IsNotEmpty({ message: "Please enter a valid First Name" }),
    IsString({ message: "First Name must be a string" }),
    MaxLength(30, { message: "First Name must be at most 30 characters" }),
    MinLength(2, { message: "First Name must be at least 2 characters" }),
  ],
  User.prototype,
  "firstName",
  void 0,
);
__decorate(
  [
    IsNotEmpty({ message: "Please enter a valid Last Name" }),
    IsString({ message: "Last Name must be a string" }),
    MaxLength(30, { message: "Last Name must be at most 30 characters" }),
    MinLength(2, { message: "Last Name must be at least 2 characters" }),
  ],
  User.prototype,
  "lastName",
  void 0,
);
__decorate(
  [
    IsNotEmpty({ message: "Please enter a valid Image url" }),
    IsString({ message: "Image url must be a string" }),
    MaxLength(2000, { message: "Image url must be at most 2000 characters" }),
    MinLength(10, { message: "Image url must be at least 10 characters" }),
    IsOptional(),
  ],
  User.prototype,
  "imageUrl",
  void 0,
);
__decorate(
  [
    IsNotEmpty({ message: "Email must not be empty" }),
    IsEmail(undefined, { message: "Please enter a valid Email" }),
  ],
  User.prototype,
  "email",
  void 0,
);
__decorate(
  [
    IsNotEmpty({ message: "Email must not be empty" }),
    IsArray({ message: "Please enter a valid Email" }),
    IsOptional(),
  ],
  User.prototype,
  "blogs",
  void 0,
);
export class Blog {}
__decorate(
  [
    IsNotEmpty({ message: "Please enter a valid id" }),
    IsUUID(4, { message: "User Id must be a UUID" }),
  ],
  Blog.prototype,
  "userId",
  void 0,
);
__decorate(
  [
    IsNotEmpty({ message: "Please enter a valid Title" }),
    IsString({ message: "Title must be a string" }),
    MaxLength(100, { message: "Title must be at most 100 characters" }),
    MinLength(2, { message: "Title must be at least 2 characters" }),
    IsOptional(),
  ],
  Blog.prototype,
  "title",
  void 0,
);
__decorate(
  [
    IsNotEmpty({ message: "Please enter a valid Image url" }),
    IsString({ message: "Image url must be a string" }),
    MaxLength(2000, { message: "Image url must be at most 2000 characters" }),
    MinLength(10, { message: "Image url must be at least 10 characters" }),
    IsOptional(),
  ],
  Blog.prototype,
  "imageUrl",
  void 0,
);
__decorate(
  [
    IsNotEmpty({ message: "Blog text must not be empty" }),
    IsString({ message: "Blog must be a string" }),
    MaxLength(2000, { message: "Blog must be at most 2000 characters" }),
    MinLength(10, { message: "Blog must be at least 2 characters" }),
    IsOptional(),
  ],
  Blog.prototype,
  "text",
  void 0,
);
__decorate(
  [
    IsNotEmpty({ message: "Blog text must not be empty" }),
    IsString({ message: "Blog must be a string" }),
    IsArray(),
    IsOptional(),
  ],
  Blog.prototype,
  "comments",
  void 0,
);
export class Paginate {}
__decorate(
  [
    IsNotEmpty({ message: "Page Number cannot be empty" }),
    IsInt({ message: "PageNumber must be a number" }),
  ],
  Paginate.prototype,
  "pageNumber",
  void 0,
);
__decorate(
  [
    IsNotEmpty({ message: "Page Size cannot be empty" }),
    IsInt({ message: "Page Size must be a number" }),
  ],
  Paginate.prototype,
  "pageSize",
  void 0,
);
export const runValidator = async (inputs) => {
  // verify input parameters
  const errors = await validate(inputs);
  if (errors.length > 0) return { isValid: false, errors };
  return { isValid: true, errors: {} };
};
//# sourceMappingURL=validators.js.map
