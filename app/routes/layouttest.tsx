import Button from "~/components/ui/Button";
import Sidebar from "~/components/layout/Sidebar";
import Navbar from "~/components/layout/Navbar";

export default function Layouttest() {
  return (
      <main className="flex flex-col">
          <Navbar variant={"patient"}/>
          <div className="flex flex-wrap">
              <Sidebar variant={"patient"}/>

              {/* Below is just a demo of the button component. Delete in final layout */}
              <div className="flex-grow mt-24">
                  <div className="flex gap-2.5 m-5">
                      Button demo
                      <Button variant="primary">Click me</Button>
                      <Button variant="secondary">Click me</Button>
                      <Button variant="tertiary">Click me</Button>
                      <Button variant="tertiary" icon={true}>Click me</Button>
                      <Button variant="text">Click me</Button>
                  </div>
              </div>
          </div>

      </main>
  );
}
