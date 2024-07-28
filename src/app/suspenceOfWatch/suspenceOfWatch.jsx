import { Suspense, useSearchParams } from "react";
import WatchPage from "../watch/page";

const SuccessPage = () => {

    const searchParams = useSearchParams();
    const id = searchParams.get('view')
    const title = searchParams.get('t')

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <WatchPage  />
            </Suspense>
        </div>
    );
};

export default SuccessPage;