import React, { useState } from "react";
import GroupCard from "./GroupCard";
import CreateGroupModal from "./CreateGroupModal";
import { Button } from "@/components/ui/button";
import useQuery from "@/hooks/useQuery";
import { useNavigate } from "react-router-dom";
import JoinGroup from "./JoinGroup";
// import { Button } from "../components/ui/button";

export default function GroupsList() {
  // const [groups, setGroups] = useState([]);
  const navigate = useNavigate()
  const [isModalOpen, setModalOpen] = useState(false);
  const [isJoinOpen, setJoinOpen] = useState(false);

  const { data: groups, refetch } = useQuery("api/groups/my");
  console.log(groups)

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Groups</h2>
        <div>
          <Button className="mr-3" onClick={() => setJoinOpen(true)}>Join Group</Button>
          <Button onClick={() => setModalOpen(true)}>Create Group</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups?.data?.data?.map((g) => (
          <GroupCard
            key={g.id}
            name={g.groupName}
            avatars={g.avatars}
            inviteCode={g.inviteCode}
            users={g?.usersList || []}
            netBalance={g.netBalance}
            baseCurrency={g.baseCurrency}
            onClick={() => navigate(`/home/groups/${g.id}`, {
              state:g,
            })}
          />
        ))}
      </div>

      <CreateGroupModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        refetch={refetch}
        // onCreate={handleCreate}
      />

      <JoinGroup
        isOpen={isJoinOpen}
        onClose={() => setJoinOpen(false)}
        refetch={refetch}
        // onCreate={handleCreate}
      />
    </div>
  );
}
