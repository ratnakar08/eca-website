"use client"

type TeamDetailsProps = {
  params: {
    teamId: string
  }
}

// Example structure for a team member
type TeamMember = {
  name: string
  codeforcesHandle: string
}

export default function TeamDetails({ params }: TeamDetailsProps) {

  const { teamId } = params;

  // Example hardcoded team members
  const members: TeamMember[] = [
    { name: "Alice", codeforcesHandle: "user1" },
    { name: "Bob", codeforcesHandle: "user2" },
    { name: "Charlie", codeforcesHandle: "user3" }
  ];

  return (
    <main className="max-w-4xl mx-auto px-10 py-16">

      <h1 className="text-4xl font-bold mb-6">
        {teamId}
      </h1>

      <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">

        {members.map((member, idx) => (
          <p key={idx}>
            Member {idx + 1}: {member.name} ({member.codeforcesHandle})
          </p>
        ))}

      </div>

    </main>
  );
}