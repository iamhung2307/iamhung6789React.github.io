export default function Banner({ title = 'all products' }) {
  return (
    <div className="banner">
      <h1>{title.toUpperCase()}</h1>
    </div>
  );
}
