/** @format */
import { Button } from "@/shadcn/ui/button";
import Pre from "./components/pre.jsx";

export function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}

function App() {
  return (
    <>
      <Pre />
      {/* <Contact /> */}
    </>
  );
}

export default App;
