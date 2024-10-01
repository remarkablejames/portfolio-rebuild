import React from 'react';
import CenteredLayout from "@/components/layout/centered-layout";

function Page() {
    return (
        <CenteredLayout>
            <section className={"w-full flex flex-col items-center justify-center text-md"}>

                    <div className={"max-w-lg space-y-4 text-red-500"}>
                        No blog posts yet.
                    </div>

            </section>
        </CenteredLayout>
    );
}

export default Page;