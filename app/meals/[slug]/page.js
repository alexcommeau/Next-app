export default async function MealDetail({ params }) {
  const { slug } = await params;
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Meal Detail
      </h1>
    <p>{slug}</p>
    </main>
  );
}
