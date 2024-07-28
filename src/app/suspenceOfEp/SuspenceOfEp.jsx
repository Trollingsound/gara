import { Suspense, useSearchParams } from "react";
import EpPage from "../watch/page";

const SuccessPage = () => {

    const searchParams = useSearchParams();
    const id = searchParams.get('view')
    const title = searchParams.get('t')

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <EpPage />
            </Suspense>
        </div>
    );
};

export default SuccessPage;