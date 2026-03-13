async function getTeams() {

  const res = await fetch(
    "YOUR_GOOGLE_SHEET_CSV_LINK",
    { cache: "no-store" }
  );

  const text = await res.text();

  const rows = text.split("\n").slice(1);

  return rows.map((row) => {

    const cols = row.split(",");

    return {
      team: cols[0],
      member1: cols[1],
      member2: cols[2],
      member3: cols[3],
    };

  });

}

export default async function TeamsPage() {

  const teams = await getTeams();

  return (
    <main className="max-w-7xl mx-auto px-8 py-16">

      <h1 className="text-5xl font-bold mb-12">
        Registered Teams
      </h1>

      <div className="grid md:grid-cols-3 gap-10">

        {teams.map((t, i) => (

          <div
            key={i}
            className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-blue-500 transition"
          >

            <h2 className="text-2xl font-semibold mb-3">
              {t.team}
            </h2>

            <p className="text-gray-400">
              {t.member1}
            </p>

            <p className="text-gray-400">
              {t.member2}
            </p>

            <p className="text-gray-400">
              {t.member3}
            </p>

          </div>

        ))}

      </div>

    </main>
  );
}