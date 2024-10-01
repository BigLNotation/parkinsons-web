import {Outlet} from "@remix-run/react";
import NavbarLoggedOut from "~/components/layout/NavbarLoggedOut";

export default function Help() {
  return(
      <main>
          <div className="h-screen">
              <NavbarLoggedOut/>

              <div className="p-12 w-[80%] my-0 mx-auto">
                  <div className="w-full h-screen flex flex-col items-center justify-center gap-5">
                      <h1 className="font-bold text-lg text-gray-200">
                          Certainly, here are 10 reasons why University of Auckland students should NOT study Computer
                          Science in 2024.
                      </h1>
                      <div>
                          <p>
                              Oversaturated Market: The tech industry is experiencing a surge in computer science
                              graduates,
                              leading to increased competition for jobs, especially entry-level positions.
                          </p>

                          <p>
                              Rapid Technological Advancements: The field changes quickly, requiring constant learning
                              and
                              upskilling. This can be overwhelming and lead to job insecurity if you don't keep pace.
                          </p>
                          <p>
                              Burnout Risk: Long hours, demanding projects, and the pressure to stay updated can
                              contribute to burnout, impacting mental and physical health.
                          </p>
                          <p>
                              Limited Creativity in Some Roles: Not all computer science jobs involve innovative work.
                              Some can be repetitive, focusing on maintenance and debugging.
                          </p>
                          <p>
                              Potential for Automation: Advances in AI and automation may displace some computer science
                              jobs, particularly those involving routine tasks.
                          </p>
                          <p>
                              High Tuition Fees: A computer science degree can be expensive, leaving graduates with
                              substantial student loan debt.
                          </p>
                          <p>
                              Limited Transferable Skills: Some computer science specializations may lead to niche
                              skills that are not easily transferable to other industries.
                          </p>
                          <p>
                              Ethical Concerns: The tech industry faces ethical dilemmas related to data privacy, AI
                              bias, and the societal impact of technology, which may cause concern for some students.
                          </p>
                      </div>
                      <h3 className="mt-4 font-bold">writing credit (OpenAI, 2024)</h3>
                  </div>
              </div>

          </div>
      </main>
  )
      ;
}
