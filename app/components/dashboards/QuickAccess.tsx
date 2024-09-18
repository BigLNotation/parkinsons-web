import Button from "~/components/ui/Button";
import DashboardModule from "~/components/dashboards/DashboardModule";

function MoodForm() {
    return (
        <DashboardModule variant="accent" isFullSize>
            <div className="flex flex-col gap-6">
                <h3 className="font-bold text-gray-200 text-xl">Quick access</h3>
                <div className="flex flex-col gap-3">
                    <div className="w-full h-[72px]">
                        <Button variant="primary" isFullSize as="a" href="./symptoms">
                            <span className="text-lg">Track your symptoms ➜</span>
                        </Button>
                    </div>
                    <div className="w-full h-[60px]">
                        <Button variant="secondary" isFullSize as="a" href="./progress">
                            <span className="text-md">See your progress</span>
                        </Button>
                    </div>
                    <div className="w-full h-[60px]">
                        <Button variant="secondary" isFullSize as="a" href="./history">
                            <span className="text-md">View submission history</span>
                        </Button>
                    </div>
                </div>
                <p className="text-sm text-gray-500 font-inter text-center">
                    You last tracked symptoms 3 hours ago.
                </p>
            </div>
        </DashboardModule>
    )
}

export default MoodForm;
