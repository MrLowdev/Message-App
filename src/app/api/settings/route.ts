import getCurrentUser from "@/action/getCurrentUser";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await req.json();
    const { name, image } = body;
    if (!currentUser?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const updatedUser = await prisma?.user.update({
      where: {
        id: currentUser?.id,
      },
      data: {
        image,
        name,
      },
    });
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error, "ERROR_MESSAGES");
    return new NextResponse("Error", { status: 500 });
  }
}
