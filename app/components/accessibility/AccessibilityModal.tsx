import React from "react";
import Button from "~/components/ui/Button";
import Notice from "~/components/layout/Notice";

/* Modal that pops up after clicking the Accessibility button. */



function AccessibilityModal() {

    // High contrast logic
    // The way this is handled is extremely hacky at the moment, I know.
    // It doesn't really work either lol.

    function enableContrast(){
        const buttons = document.querySelectorAll("button");
        const text = document.querySelectorAll("p");

        for(const i of buttons){
            i.classList.add("text-white", "bg-black")
        }
        for(const i of text){
            i.classList.add("text-black")
        }
    }

    function disableContrast(){
        const buttons = document.querySelectorAll("button");
        const text = document.querySelectorAll("p");

        for(const i of buttons){
            i.classList.remove("text-white", "bg-black")
        }
        for(const i of text){
            i.classList.remove("text-black")
        }
    }

    return (
        <div
            // This is div centering madness.
            className="absolute z-[100] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-980 rounded-2xl px-9 py-8 flex flex-col gap-6 w-[95%] max-w-[650px] text-gray-200">
            <p className="text-2xl font-extrabold text-gray-200">Accessibility</p>
            <p className="font-semibold">
                The following options allow you to change the sizes of text, buttons, and other elements on the
                screen to best suit your needs.
            </p>
            <div className="flex flex-col gap-3">
                <div className="py-8 px-9 bg-teal-990 rounded-xl flex flex-col gap-6 border-2 border-teal-400">
                    <div className="flex flex-col gap-2">
                        <p className="font-bold">Interface size</p>
                        <div className="w-full flex gap-3">
                            <Button variant="secondary" onClick={() => {
                                document.body.style.zoom = '80%'
                            }}>Small</Button>
                            <Button variant="secondary" onClick={() => {
                                document.body.style.zoom = '100%'
                            }}>Normal</Button>
                            <Button variant="secondary" onClick={() => {
                                document.body.style.zoom = '120%'
                            }}>Big</Button>
                            <Button variant="secondary" onClick={() => {
                                document.body.style.zoom = '150%'
                            }}>Very Big</Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold">Colour contrast mode</p>
                        <div className="w-full flex gap-3">
                            <Button variant="secondary" onClick={disableContrast}>Regular</Button>
                            <Button variant="secondary" onClick={enableContrast}>High Contrast</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="font-normal">You can also use tab to navigate between buttons and interactive elements on
                    all pages, and enter to select and deselect.</p>
            </div>
            {/*<div>*/}
            {/*    <p>Need help with more accessibility settings?</p>*/}
            {/*    <p>Visit the help page (coming soon).</p>*/}
            {/*</div>*/}
            {/*<div className="py-8 px-9 bg-gray-950 rounded-xl flex flex-col gap-4">*/}
            {/*    <p>*/}
            {/*        Your browser likely has inbuilt support for zoom modes, which you can access through either the*/}
            {/*        Command or Control keys alongside the - and + buttons.*/}
            {/*    </p>*/}
            {/*</div>*/}
            <div>
                <p className="text-red-400 text-sm font-bold">Accessibility settings are experimental.</p>
                <p className="text-red-500 text-sm font-normal">Various issues may arise during use at the moment.</p>
            </div>

        </div>
    )
}

export default AccessibilityModal;
