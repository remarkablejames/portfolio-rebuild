import FramerMotionWrapper from "@/components/FramerMotionWrapper";
import Link from "next/link";

export default function Contact() {
    return (
        <FramerMotionWrapper>
        <div className="max-w-7xl 2xl:max-w-7xl mx-auto  py-4 ">
        <section className="relative flex items-center justify-center overflow-hidden">
            <div className="relative items-center w-full px-5 py-12 mx-auto max-w-7xl lg:px-16 lg:py-32 md:px-12">
                <div>
                    <div className="w-full mx-auto">
                        <p className="mt-2 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                            Contact me <span className="text-[#50d236]">here</span>.
                        </p>
                        <div className="divide-y divide-white/25 w-fit ">
                            {/* Icon Block */}
                            <div className="flex gap-x-7 py-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    className="w-6 h-6"
                                    viewBox="0 0 40 40"
                                >
                                    <path
                                        fill="#b6dcfe"
                                        d="M30.597,38.5c-0.629,0-1.24-0.126-1.815-0.376c-3.455-1.498-10.136-4.896-16.073-10.833 S3.374,14.673,1.876,11.219C1.118,9.471,1.512,7.458,2.879,6.091l3.727-3.727C7.163,1.807,7.904,1.5,8.693,1.5 c0.789,0,1.53,0.307,2.087,0.865l4.883,4.883c0.542,0.542,0.833,1.297,0.818,2.126c-0.014,0.796-0.312,1.543-0.818,2.049 l-5.11,5.11l0.112,0.301c0.061,0.163,1.522,4.028,4.998,7.503c3.475,3.476,7.34,4.938,7.503,4.998l0.301,0.112l5.11-5.11 c0.558-0.558,1.299-0.865,2.088-0.865c0.789,0,1.53,0.307,2.087,0.865l4.883,4.883c1.151,1.151,1.151,3.024,0,4.175l-3.727,3.727 C33.033,37.998,31.825,38.5,30.597,38.5z"
                                    />
                                    <path
                                        fill="#4788c7"
                                        d="M8.693,2c0.655,0,1.271,0.255,1.734,0.718l4.883,4.883c0.977,0.977,0.802,2.666,0,3.468 l-4.883,4.883l-0.454,0.454l0.224,0.602c0.062,0.167,1.561,4.131,5.113,7.683c3.552,3.552,7.516,5.051,7.683,5.113l0.602,0.224 l0.454-0.454l4.883-4.883c0.463-0.463,1.079-0.718,1.734-0.718c0.655,0,1.271,0.255,1.734,0.718l4.883,4.883 c0.956,0.956,0.956,2.512,0,3.468l-3.726,3.726C32.772,37.551,31.693,38,30.596,38c-0.56,0-1.103-0.113-1.616-0.335 c-3.422-1.483-10.04-4.85-15.918-10.727C7.184,21.06,3.818,14.442,2.335,11.02C1.659,9.461,2.012,7.666,3.232,6.445l3.726-3.726 C7.422,2.255,8.038,2,8.693,2 M8.693,1C7.81,1,6.926,1.337,6.252,2.011L2.525,5.738c-1.492,1.492-1.947,3.744-1.108,5.68 c1.658,3.826,5.067,10.356,10.938,16.227c5.871,5.871,12.402,9.279,16.227,10.938C29.232,38.864,29.916,39,30.596,39 c1.347,0,2.675-0.534,3.666-1.525l3.726-3.726c1.348-1.348,1.348-3.534,0-4.883l-4.883-4.883 c-0.674-0.674-1.558-1.011-2.441-1.011s-1.767,0.337-2.441,1.011l-4.883,4.883c0,0-3.886-1.444-7.324-4.883 c-3.438-3.438-4.883-7.324-4.883-7.324l4.883-4.883c1.223-1.223,1.348-3.534,0-4.883l-4.883-4.883C10.46,1.337,9.577,1,8.693,1 L8.693,1z"
                                    />
                                </svg>

                                <div className="grow">
                                    <h3 className="font-semibold text-white/70 ">
                                        Phone
                                    </h3>
                                    <a
                                        className="mt-2 inline-flex items-center gap-x-2 text-md font-medium text-white/45"
                                        href="#"
                                    >
                                        +1-613-87888-49
                                    </a>
                                </div>
                            </div>
                            {/* End Icon Block */}
                            {/* Icon Block */}
                            <div className="flex gap-x-7 py-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    className="w-6 h-6"
                                    viewBox="0 0 48 48"
                                >
                                    <linearGradient
                                        id="llg~BqHScWvBU6gQytvwFa_LPcVDft9Isqt_gr1"
                                        x1="24.73"
                                        x2="33.648"
                                        y1="19.892"
                                        y2="43.287"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset={0} stopColor="#5059c9"/>
                                        <stop offset=".999" stopColor="#4750b3"/>
                                    </linearGradient>
                                    <path
                                        fill="url(#llg~BqHScWvBU6gQytvwFa_LPcVDft9Isqt_gr1)"
                                        d="M9,26l36-14.308V38c0,1.105-0.895,2-2,2H9V26z"
                                    />
                                    <linearGradient
                                        id="llg~BqHScWvBU6gQytvwFb_LPcVDft9Isqt_gr2"
                                        x1="5.988"
                                        x2="26.58"
                                        y1="6.948"
                                        y2="44.356"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset={0} stopColor="#5961c3"/>
                                        <stop offset={1} stopColor="#3a41ac"/>
                                    </linearGradient>
                                    <path
                                        fill="url(#llg~BqHScWvBU6gQytvwFb_LPcVDft9Isqt_gr2)"
                                        d="M3,11.692V38c0,1.105,0.895,2,2,2h38c0.491,0,0.935-0.184,1.283-0.478L3,11.692z"
                                    />
                                    <path
                                        d="M3,11h42v1.692l-17.32,13.45c-2.165,1.681-5.195,1.681-7.36,0L3,12.692V11z"
                                        opacity=".05"
                                    />
                                    <path
                                        d="M3,10.5h42v1.692L26.966,25.304c-1.762,1.304-4.17,1.304-5.932,0L3,12.192V10.5z"
                                        opacity=".07"
                                    />
                                    <path
                                        fill="#7b83eb"
                                        d="M5,8h38c1.105,0,2,0.895,2,2v1.692L26.252,24.466c-1.359,0.926-3.146,0.926-4.504,0L3,11.692V10	C3,8.895,3.895,8,5,8z"
                                    />
                                </svg>

                                <div className="grow">
                                    <h3 className="font-semibold text-white/70 ">
                                        Email
                                    </h3>
                                    <a
                                        className="mt-2 inline-flex items-center gap-x-2 text-md font-medium text-blue-500 hover:text-blue-800 "
                                        href="mailto:jamesme85.me@gmail.com"
                                    >
                                        jamesme85.me@gmail.com
                                    </a>
                                </div>
                            </div>
                            {/* End Icon Block */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        </FramerMotionWrapper>

    )
}