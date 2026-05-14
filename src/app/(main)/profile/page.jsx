"use client";
import { UpdateUser } from "@/components/UpdateUser";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const profilepage = () => {

    const userData = authClient.useSession()
      const user = userData.data?.user
      console.log(user);

    return (
        <div className="flex items-center justify-center">
            <Card className=" mx-auto flex flex-col items-center border my-8 shadow-2xl border-transparent  px-10">
                <Avatar className="h-50 w-50">
                        <Avatar.Image alt="John Doe" 
                        src={user?.image}
                        referrerPolicy="no-referrer" 
                        />
                        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                      </Avatar>

                      <h2 className="text-3xl font-bold">{user?.name}</h2>
                      <p className="text-gray-500 text-xl">{user?.email}</p>

                      <UpdateUser></UpdateUser>
            </Card>
        </div>
    );
};

export default profilepage;