export default function BookLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="bg-yellow-400">BookLayout</h1>
      {children}
    </div>
  );
}
