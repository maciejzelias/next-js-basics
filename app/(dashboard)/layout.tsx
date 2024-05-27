export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h1>Dashboard</h1>
      {children}
    </section>
  );
}
