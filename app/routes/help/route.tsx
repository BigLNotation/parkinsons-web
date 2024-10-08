
import {Outlet} from "@remix-run/react";
import React from "react";
import NavbarLoggedOut from "~/components/layout/NavbarLoggedOut";
import HelpModule from "~/components/help/HelpModule";

// Editor's note: it's 2am and I've decided I don't want to be a software developer anymore

export default function Help() {
  return(
      <main className="flex flex-col">
          <NavbarLoggedOut/>


          <div className="flex flex-wrap my-0 mx-auto w-[90%] max-w-[1450px]">
              <div className="py-12 px-6 lg:px-16 flex-1 flex flex-col gap-10 text-gray-200">
                  <div>
                      <h1 className="font-extrabold text-gray-200 text-3xl">
                          Help centre
                      </h1>
                      <p>
                          Quick guides for completing various tasks on our platform.
                      </p>
                  </div>
                  <div className="flex flex-col gap-4">
                      <h2 className="font-bold text-xl">For patients</h2>
                      <div className="flex gap-4 flex-wrap">
                          <HelpModule title="Navigating the interface" desc="How to use our interface quickly."
                                      link={"/help/x"}/>
                          <HelpModule title="Tracking your symptoms" desc="How to enter and submit a symptom update form"
                                      link={"/help/x"}/>
                          <HelpModule title="Tracking your medications" desc="How to use our medication tracker."
                                      link={"/help/x"}/>
                          <HelpModule title="Tailoring accessible layouts" desc="How to moddify the interface to suit your needs."
                                      link={"/help/x"}/>
                          <HelpModule title="Understanding statistics" desc="How to view and interpret progress information."
                                      link={"/help/x"}/>
                          <HelpModule title="Edit or remove submissions" desc="How to edit previously submitted forms."
                                      link={"/help/x"}/>
                          <HelpModule title="Sharing data with a caregiver" desc="How to connect your account to a caregiver."
                                      link={"/help/x"}/>
                          <HelpModule title="Creating an account" desc="How to sign up, log in, and more."
                                      link={"/help/x"}/>
                      </div>
                  </div>
                  <div className="flex flex-col gap-4">
                      <h2 className="font-bold text-xl">For caregivers</h2>
                      <div className="flex gap-4 flex-wrap">
                          <HelpModule title="Navigating the interface" desc="How to use our interface quickly."
                                      link={"/help/x"}/>
                          <HelpModule title="Placeholder" desc="How to use our interface quickly."
                                      link={"/help/x"}/>
                          <HelpModule title="Placeholder" desc="How to use our interface quickly."
                                      link={"/help/x"}/>
                          <HelpModule title="Placeholdere" desc="How to use our interface quickly."
                                      link={"/help/x"}/>
                          <HelpModule title="Placeholder" desc="How to use our interface quickly."
                                      link={"/help/x"}/>
                          <HelpModule title="Placeholder" desc="How to use our interface quickly."
                                      link={"/help/x"}/>
                          <HelpModule title="Placeholder" desc="How to use our interface quickly."
                                      link={"/help/x"}/>
                      </div>
                  </div>

              </div>
          </div>

      </main>
  );
}
