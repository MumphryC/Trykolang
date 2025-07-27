import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import { sendContactFormEmail } from "./email-service";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      const emailSent = await sendContactFormEmail(
        validatedData.name,
        validatedData.email,
        validatedData.subject,
        validatedData.message
      );

      if (emailSent) {
        res.json({ success: true, message: "Message sent successfully!" });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again later." 
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data. Please check your inputs." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
