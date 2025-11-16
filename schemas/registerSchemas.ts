import { z } from 'zod'

export const registerSchema = z.object({
  nickname: z
    .string()
    .min(5, 'Minimum of 5 characters.')
    .max(18, 'Maximum of 18 characters.')
    .regex(/^[a-zA-Z\s]+$/, 'Only letters from A to Z.'),

  email: z.email('Invalid e-mail.'),

  password: z
    .string()
    .min(8, 'Minimum of 8 characters.')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?]).{8,}$/,
      'Must contain uppercase, lowercase, number and special character.'
    ),

  terms: z.boolean().refine((v) => v === true, {
    message: 'You must agree to the terms to continue.',
  }),
  marketing: z.boolean().optional(),
})

export type RegisterSchema = z.infer<typeof registerSchema>
