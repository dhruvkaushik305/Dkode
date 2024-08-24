import FormPage from "./_components/FormPage";

export default function Signup() {
  return (
    <section className="bg-offwhite flex h-1/2 w-1/2 flex-col items-center gap-5 rounded-xl p-4">
      <header className="text-2xl font-semibold text-slate-700">Signup</header>
      <FormPage />
    </section>
  );
}
