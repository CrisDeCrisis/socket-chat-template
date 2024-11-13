import { InboxChats } from "../components/InboxChats"
import { SidebarChat } from "../components/SidebarChat"
import { SelectChat } from "../components/SelectChat"

const Chat = () => {
    const isChatSelected = true

    return (
        <div className="flex h-screen">
            <div className="w-1/5">
                <SidebarChat />
            </div>
            <div className="w-4/5">
                {isChatSelected ? <InboxChats /> : <SelectChat />}
            </div>
        </div>
    )
}

export default Chat