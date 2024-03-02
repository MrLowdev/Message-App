import getUsers from "@/action/getUser";
import Sidebar from "@/components/sidebar/Sidebar";
import UserList from "@/components/user/UserList";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUsers();

  return (
    <Sidebar>
      <div className="h-full">
        <UserList items={user} />
        {children}
      </div>
    </Sidebar>
  );
}
