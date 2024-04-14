import { object, string } from 'zod';

const userZodSchemas = {
  register: object({
    body: object({
      email: string().email(),
      password: string().min(8),
      lastName: string(),
      firstName: string(),
    }),
  }),
  login: object({
    body: object({
      email: string().email(),
      password: string().min(8),
    }),
  }),
};

export { userZodSchemas };
