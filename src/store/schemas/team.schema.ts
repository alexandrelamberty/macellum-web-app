import { z } from "zod";

export const teamMemberSchema = z.object({
  id: z.string(),
  name: z.string(),
  status: z.string(),
  label: z.string(),
});

export type TeamMember = z.infer<typeof teamMemberSchema>;
