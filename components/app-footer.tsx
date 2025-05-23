import React from 'react';

function AppFooter() {
    return (
        <section className={"flex items-center justify-center mt-12"}>
        <div className={" max-w-md text-center border-t border-zinc-700 p-4 text-xs text-neutral-500"}>
            &copy; {new Date().getFullYear()} James Niyongira - All rights reserved.
        </div>
        </section>
    );
}

export default AppFooter;