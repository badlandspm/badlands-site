export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">
        Badlands Property Management
      </h1>
      <p className="text-lg mb-8">
        Book your stay directly with us — no hidden fees, no middleman!
      </p>
      <a
        href="https://buy.stripe.com/test_cN2bLn8X42yq07G5kk"
        className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book Now
      </a>
    </main>
  );
}

