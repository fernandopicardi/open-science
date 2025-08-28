import { SpeedInsights } from "@vercel/speed-insights/next";

function Home() {
  return (
    <div>
      <h1>Open Science</h1>
      <SpeedInsights />
    </div>
  );
}

export default Home;
