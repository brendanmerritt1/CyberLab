export default function Navbar() {
  return (
    <div class="mt-5 flex h-auto flex-col items-center gap-10">
      <div class="flex w-full flex-row">
        <div class="h-full w-1/4">{/* empty placeholder space */}</div>
        <div class="flex h-full w-1/2 flex-row items-center justify-center gap-14 pr-36">
          <img
            src="/src/assets/images/TC-Logo-with-white-text.svg"
            alt="Triangle Cyber Logo"
            class="h-20"
          />
          <h1 class="text-7xl font-bold">CyberLab</h1>
        </div>
        <div class="h-full w-1/4">
          {/* login/register buttons will go here */}
        </div>
      </div>
      <div class="flex h-full w-[60rem] ml-12 flex-row items-center justify-around text-2xl font-semibold underline">
        <h2>Home</h2>
        <h2>Learning Tracks</h2>
        <h2>SkillBridge</h2>
      </div>
    </div>
  );
}
