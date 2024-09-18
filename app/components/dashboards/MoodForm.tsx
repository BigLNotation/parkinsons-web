import React from "react";

import Button from "~/components/ui/Button";
import DashboardModule from "~/components/dashboards/DashboardModule";

function MoodForm() {
    return (
        <DashboardModule variant="accent" isFullSize>
            <div className="flex flex-col gap-6">
                <h3 className="font-bold text-gray-200 text-xl">How are you feeling?</h3>
                <div className="flex flex-col gap-3">
                    <div className="h-[70px]">
                        <Button variant="secondary" icon="/icons/moodSmile.svg" isFullSize>
                            Great!
                        </Button>
                    </div>
                    <div className="h-[70px]">
                        <Button variant="secondary" icon="/icons/moodNeutral.svg" isFullSize>
                            Average
                        </Button>
                    </div>
                    <div className="h-[70px]">
                        <Button variant="secondary" icon="/icons/moodFrown.svg" isFullSize>
                            Bad
                        </Button>
                    </div>
                </div>
                <p className="text-sm text-gray-500 font-inter text-center">
                    Mood updates are tracked every time you click.
                </p>
            </div>
        </DashboardModule>
    )
}

export default MoodForm;
