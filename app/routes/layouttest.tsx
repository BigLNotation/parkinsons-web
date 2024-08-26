import Button from "~/components/ui/Button";
import Sidebar from "~/components/layout/Sidebar";
import Navbar from "~/components/layout/Navbar";

export default function Layouttest() {
  return (
      <main>
          <Navbar variant={"patient"}/>
          <Sidebar variant={"patient"}/>
          <div className="flex gap-2.5 m-5">
              Button demo
              <Button variant="primary">Click me</Button><Button variant="secondary">Click me</Button>
              <Button variant="tertiary">Click me</Button><Button variant="tertiary" icon={true}>Click me</Button>
              <Button variant="tertiary" icon={true}>Click me</Button>
          </div>
      </main>
  );
}
