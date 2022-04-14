export type FieldHandler<T> = (values: Partial<T>) => void;

export interface LoginFields {
  email: string;
  password: string;
}

export interface SignupFields {
  firstName: string;
  lastName: string;
  pronouns: string;
  program: string;
  graduationYear: string;
  email: string;
  studentId: string;
  password: string;
  passwordConf: string;
}

export type ValidationState<T> = { validated: boolean; } & Partial<T>;