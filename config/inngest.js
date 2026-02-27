import { Inngest } from "inngest";
import connectDB from "./db";
import User from "../models/User.js"
import Order from "@/models/Order";
// Create a client to send and receive events
export const inngest = new Inngest({ id: "quickcart-next" });

// Inngest fucation to save user data to the database
export const syncUserCreation = inngest.createFunction(
    {
        id: 'sycn-user-from-clerk',
    },
    {
        event: 'clerk/user.created'
    }, async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            imageUrl: image_url
        }
        await connectDB()
        await User.create(userData)
    }
)

// inngest Fucation to update user data in the database
export const syncUserUpdate = inngest.createFunction(
    {
        id: 'user-update-from-clerk',
    },
    { event: 'clerk/user.updated' }, async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            imageUrl: image_url
        }
        await connectDB()
        await User.findByIdAndUpdate(id, userData)
    }
)

// Inngest Fucation to delete user data from the database
export const syncUserDeletion = inngest.createFunction(
    {
        id: 'delete-user-with-clerk',
    },
    { event: 'clerk/user.deleted' }, async ({ event }) => {
        const { id } = event.data;
        await connectDB()
        await User.findByIdAndDelete(id)
    }
)


// Inngets function to create users order in database

export const createUserOrder = inngest.createFunction(
  {
    id: 'create-user-order',
    batchEvents: {
      maxSize: 5,
      timeout: '5s',
    },
  },
  { event: 'order/created' },
  async ({ events }) => {
    await connectDB();

    const orders = events.map((evt) => ({
      userId: evt.data.userId,
      items: evt.data.items,
      amount: evt.data.amount,
      address: evt.data.addressId,
      date: evt.data.Date,
    }));

    const insertedOrders = await Order.insertMany(orders);

    return { success: true, processed: insertedOrders.length };
  }
);