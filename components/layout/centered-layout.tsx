import React from "react";

function CenteredLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-7xl 2xl:max-w-7xl mx-auto  p-4 sm:px-6 lg:px-8">
            {children}
        </div>
    );
}

export default CenteredLayout;
