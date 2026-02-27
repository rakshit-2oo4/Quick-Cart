import { serve } from "inngest/next";
import { createUserOrder, inngest, syncUserCreation, syncUserDeletion, syncUserUpdate } from "@/config/inngest";

export const runtime = "nodejs";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation, 
    syncUserUpdate,
    syncUserDeletion,
    createUserOrder,
  ],
});