import { z } from 'zod'

export const mealSchema = z.object({
  name: z.string(),
  description: z.string(),
  isHealthyFood: z.boolean(),
  hour: z.date(),
  date: z.date(),
})

export interface IMealSchema extends z.infer<typeof mealSchema> {}
