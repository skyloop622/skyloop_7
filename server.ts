import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

interface ContactPayload {
  name: string;
  email: string;
  whatsappNumber: string;
  websiteType: string;
  message: string;
  createdAt?: string;
}

interface OrderPayload {
  fullName: string;
  email: string;
  whatsappNumber: string;
  websiteType: string;
  price?: string;
  businessName: string;
  description: string;
  createdAt?: string;
}

// In-memory logs for preview
const contactSubmissions: ContactPayload[] = [];
const orderSubmissions: OrderPayload[] = [];

// Helper function to send email notification directly to skylopp622@gmail.com & skyloop622@gmail.com
async function sendEmailNotification(subject: string, replyTo: string, payload: Record<string, any>) {
  const recipients = ["skyloop622@gmail.com", "skylopp622@gmail.com"];
  
  for (const recipient of recipients) {
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: subject,
          _replyto: replyTo,
          _template: "table",
          _captcha: "false",
          ...payload,
        }),
      });
      console.log(`Email notification sent to ${recipient} (status: ${response.status})`);
    } catch (err) {
      console.error(`Error sending email notification to ${recipient}:`, err);
    }
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Health Check
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      app: "Skyloop Web Development Server",
      targetEmails: ["skylopp622@gmail.com", "skyloop622@gmail.com"],
      contactCount: contactSubmissions.length,
      orderCount: orderSubmissions.length,
    });
  });

  // Contact API Endpoint - Emails directly to owner
  app.post("/api/contact", async (req, res) => {
    const { name, email, whatsappNumber, websiteType, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields (name, email, message)" });
    }

    const newContact: ContactPayload = {
      name,
      email,
      whatsappNumber: whatsappNumber || "Not Provided",
      websiteType: websiteType || "General Inquiry",
      message,
      createdAt: new Date().toISOString(),
    };

    contactSubmissions.unshift(newContact);

    console.log("==========================================");
    console.log("⚡ NEW SKYLOOP CONTACT RECEIVED ⚡");
    console.log(`From: ${name} <${email}>`);
    console.log(`Phone/WhatsApp: ${whatsappNumber}`);
    console.log(`Website Type: ${websiteType}`);
    console.log(`Message: ${message}`);
    console.log("==========================================");

    // Send email directly to owner
    sendEmailNotification(`New Contact Inquiry from ${name}`, email, {
      "Client Name": name,
      "Client Email": email,
      "Phone / WhatsApp": whatsappNumber,
      "Website Type": websiteType,
      "Message Details": message,
      "Submitted At": new Date().toLocaleString(),
    });

    res.json({
      success: true,
      message: "Contact message received and sent to email successfully!",
      data: newContact,
    });
  });

  // Order API Endpoint - Emails order details directly to owner
  app.post("/api/order", async (req, res) => {
    const {
      fullName,
      email,
      whatsappNumber,
      websiteType,
      price,
      businessName,
      description,
    } = req.body || {};

    if (!fullName || !email || !whatsappNumber) {
      return res.status(400).json({ error: "Missing required fields (fullName, email, whatsappNumber)" });
    }

    const newOrder: OrderPayload = {
      fullName,
      email,
      whatsappNumber,
      websiteType: websiteType || "Custom Website",
      price: price || "Specified in Package",
      businessName: businessName || "Not Specified",
      description: description || "No additional description",
      createdAt: new Date().toISOString(),
    };

    orderSubmissions.unshift(newOrder);

    console.log("==========================================");
    console.log("🚀 NEW WEBSITE ORDER RECEIVED 🚀");
    console.log(`Client Name: ${fullName}`);
    console.log(`Email: ${email}`);
    console.log(`WhatsApp: ${whatsappNumber}`);
    console.log(`Website Package: ${websiteType}`);
    console.log(`Package Price: ${price}`);
    console.log(`Business Name: ${businessName}`);
    console.log(`Description: ${description}`);
    console.log("==========================================");

    // Send email directly to owner
    sendEmailNotification(`NEW WEBSITE ORDER: ${websiteType} - ${fullName}`, email, {
      "Client Name": fullName,
      "Client Email": email,
      "Phone / WhatsApp": whatsappNumber,
      "Selected Package": websiteType,
      "Package Price": price,
      "Business Name": businessName,
      "Order Description": description,
      "Submitted At": new Date().toLocaleString(),
    });

    res.json({
      success: true,
      message: "Website order submitted and emailed successfully!",
      data: newOrder,
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
