export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="animate-drift-a absolute -left-32 -top-32 h-[26rem] w-[26rem] rounded-full bg-blue/25 blur-3xl" />
      <div className="animate-drift-b absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-coral/20 blur-3xl" />
      <div className="animate-drift-c absolute -bottom-40 left-1/4 h-[24rem] w-[24rem] rounded-full bg-mint/20 blur-3xl" />
    </div>
  );
}
