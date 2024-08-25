import { auth } from "@/auth";

export default async function Dashboard() {
  const session = await auth();
  return (
    <main>
      You are on the dashboard
      <p>{session ? JSON.stringify(session) : "No session"}</p>
    </main>
  );
}
