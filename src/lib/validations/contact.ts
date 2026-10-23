import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Full name must be at least 2 characters long." })
    .max(100, { message: "Full name cannot exceed 100 characters." }),
  
  workEmail: z
    .string()
    .trim()
    .email({ message: "Please provide a valid work email address." })
    .max(120, { message: "Email cannot exceed 120 characters." })
    .refine((email) => {
      // Basic blocklist for throwaway/disposable spam domains if needed, but ensure legitimate domains pass
      return !email.endsWith("@mailinator.com") && !email.endsWith("@10minutemail.com");
    }, { message: "Please provide a valid business email domain." }),

  companyName: z
    .string()
    .trim()
    .max(120, { message: "Company name cannot exceed 120 characters." })
    .optional()
    .or(z.literal("")),

  role: z
    .string()
    .trim()
    .max(80, { message: "Role cannot exceed 80 characters." })
    .optional()
    .or(z.literal("")),

  areaOfInterest: z.enum(
    [
      "client-onboarding",
      "document-processing",
      "system-integration",
      "custom-workflow",
      "general-inquiry",
    ],
    {
      message: "Please select a valid area of operational interest.",
    }
  ),

  message: z
    .string()
    .trim()
    .min(10, { message: "Please provide at least 10 characters describing your workflow or inquiry." })
    .max(2500, { message: "Message cannot exceed 2,500 characters." }),

  consent: z.literal(true, {
    message: "You must acknowledge and consent to our Privacy Policy to submit.",
  }),

  // Honeypot field for anti-spam bots (must remain empty)
  websiteUrlHoneypot: z.string().max(0, { message: "Bot detected" }).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
