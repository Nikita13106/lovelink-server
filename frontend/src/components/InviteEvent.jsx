import MainEvents from "./MainEvents";

export default function Events() {
  return (
    <section className="pt-24 bg-black min-h-screen">
      {/* Page Header */}
      {/* Active Events */}
      <MainEvents />
      <div className="text-center mb-20 px-6">
        <h1 className="text-4xl font-bold text-white mb-4">
          Lovelink Events 🎉
        </h1>
        <p className="text-pink-200/80 max-w-xl mx-auto">
          Participate in fun events, invite friends, play games, and win
          exciting rewards.
        </p>
      </div>

      {/* Future events go here */}
      {/* <GameNight /> */}
      {/* <MovieNight /> */}
    </section>
  );
}
