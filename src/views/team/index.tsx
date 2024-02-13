import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { fetchAllTeam } from "@/store/actions/team.actions";
import { AppDispatch, RootState } from "@/store/store";
import { teamColumns } from "@/views/team/components/data-table-columns";
import { TeamMemberDataTable } from "@/views/team/components/team-member-data-table";

export function Team() {
  const dispatch = useDispatch<AppDispatch>();
  const teamMembers = useSelector((state: RootState) => state.team.members);

  useEffect(() => {
    dispatch(fetchAllTeam());
  }, [dispatch]);

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <PageHeader title="Team">
        <Button variant="outline">New member</Button>
      </PageHeader>
      <TeamMemberDataTable data={teamMembers} columns={teamColumns} />
    </div>
  );
}
