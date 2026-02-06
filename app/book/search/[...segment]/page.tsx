type CatchAllPageProps = {
  params: Promise<{ segment: string[] }>;
};

export default async function CathAllPage({ params }: CatchAllPageProps) {
  const { segment } = await params;
  console.log(segment);
  return <div>CathAllPage</div>;
}
