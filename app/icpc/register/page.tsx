export default function RegisterTeam() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-16">

      <h1 className="text-4xl font-bold mb-8">
        Register Your ICPC Team
      </h1>

      <p className="text-gray-400 mb-8">
        Fill the form below to register your team for the
        ECA ICPC college level contest.
      </p>

      <iframe
        src="YOUR_GOOGLE_FORM_LINK"
        width="100%"
        height="900"
        className="rounded-xl border border-gray-800"
      />

    </main>
  );
}