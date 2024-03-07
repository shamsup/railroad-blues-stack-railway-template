import { prisma } from "~/db.server";

export const loader = async () => {
  try {
    // if we can connect to the database and make a simple query we're good
    await prisma.note.findFirst();
    return new Response("OK");
  } catch (error: unknown) {
    console.log("healthcheck ❌", { error });
    return new Response("ERROR", { status: 500 });
  }
};
