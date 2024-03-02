import getConversations from "@/action/getConversations";
import getUsers from "@/action/getUser";
import ConversationList from "@/components/conversations/ConversationList";
import Sidebar from "@/components/sidebar/Sidebar";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversation = await getConversations();
  const users = await getUsers();
  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList
          users={users}
          title="Message"
          initialItems={conversation}
        />
        {children}
      </div>
    </Sidebar>
  );
}
