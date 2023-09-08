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

export class User {
  @IsNotEmpty({ message: "Please enter a valid username" })
  @IsString({ message: "Username must be a string" })
  @MaxLength(30, { message: "Username must be at most 30 characters" })
  @MinLength(2, { message: "Username must be at least 2 characters" })
  userName: string;

  @IsNotEmpty({ message: "Please enter a valid First Name" })
  @IsString({ message: "First Name must be a string" })
  @MaxLength(30, { message: "First Name must be at most 30 characters" })
  @MinLength(2, { message: "First Name must be at least 2 characters" })
  firstName: string;

  @IsNotEmpty({ message: "Please enter a valid Last Name" })
  @IsString({ message: "Last Name must be a string" })
  @MaxLength(30, { message: "Last Name must be at most 30 characters" })
  @MinLength(2, { message: "Last Name must be at least 2 characters" })
  lastName: string;

  @IsNotEmpty({ message: "Please enter a valid Image url" })
  @IsString({ message: "Image url must be a string" })
  @MaxLength(2000, { message: "Image url must be at most 2000 characters" })
  @MinLength(10, { message: "Image url must be at least 10 characters" })
  @IsOptional()
  imageUrl: string;

  @IsNotEmpty({ message: "Email must not be empty" })
  @IsEmail(undefined, { message: "Please enter a valid Email" })
  email: string;

  @IsNotEmpty({ message: "Email must not be empty" })
  @IsArray({ message: "Please enter a valid Email" })
  @IsOptional()
  blogs: string[];
}

export class Blog {
  @IsNotEmpty({ message: "Please enter a valid id" })
  @IsUUID(4, { message: "User Id must be a UUID" })
  userId: string;

  @IsNotEmpty({ message: "Please enter a valid Title" })
  @IsString({ message: "Title must be a string" })
  @MaxLength(100, { message: "Title must be at most 100 characters" })
  @MinLength(2, { message: "Title must be at least 2 characters" })
  @IsOptional()
  title: string;

  @IsNotEmpty({ message: "Please enter a valid Image url" })
  @IsString({ message: "Image url must be a string" })
  @MaxLength(2000, { message: "Image url must be at most 2000 characters" })
  @MinLength(10, { message: "Image url must be at least 10 characters" })
  @IsOptional()
  imageUrl: string;

  @IsNotEmpty({ message: "Blog text must not be empty" })
  @IsString({ message: "Blog must be a string" })
  @MaxLength(2000, { message: "Blog must be at most 2000 characters" })
  @MinLength(10, { message: "Blog must be at least 2 characters" })
  @IsOptional()
  text: string;

  @IsNotEmpty({ message: "Blog text must not be empty" })
  @IsString({ message: "Blog must be a string" })
  @IsArray()
  @IsOptional()
  comments: string[];
}

export class Paginate {
  @IsNotEmpty({ message: "Page Number cannot be empty" })
  @IsInt({ message: "PageNumber must be a number" })
  pageNumber: number;

  @IsNotEmpty({ message: "Page Size cannot be empty" })
  @IsInt({ message: "Page Size must be a number" })
  pageSize: number;
}

export const runValidator = async (
  inputs: any,
): Promise<{ isValid: boolean; errors: any }> => {
  // verify input parameters
  const errors = await validate(inputs);
  if (errors.length > 0) return { isValid: false, errors };
  return { isValid: true, errors: {} };
};
