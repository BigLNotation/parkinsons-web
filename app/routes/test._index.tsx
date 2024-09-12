import NavbarLoggedOut from "~/components/layout/NavbarLoggedOut";
import Button from "~/components/ui/Button";


export default function TestCaregivers() {
  return (
      <main className="flex flex-col">
          <NavbarLoggedOut/>

          <div className="flex gap-8 flex-col px-[200px] py-[96px]">
              <h1 className="text-2xl font-semibold text-gray-200">dev testing page</h1>
              <div className="flex flex-wrap gap-2">
                  <Button variant="secondary" as="a" href="/test/patients">patients dash</Button>
                  <Button variant="secondary" as="a" href="/test/caregivers">caregiver dash</Button>
                  <Button variant="tertiary" as="a" href="/test/layout">random</Button>
                  <Button variant="text" as="a" href="https://auckland.ac.nz">bad</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                  <Button variant="secondary" as="a" href="/auth/login">login</Button>
                  <Button variant="secondary" as="a" href="/auth/signup">signup</Button>

              </div>

              <div>
                  <h3 className="pt-4 text-gray-200 font-bold">notes</h3>
                  <p>
                      routing in remix is the dumbest thing imaginable
                  </p>
              </div>
          </div>
      </main>
  );
}
