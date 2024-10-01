import FramerMotionWrapper from "@/components/FramerMotionWrapper";
import Link from "next/link";

export default function Contact() {
  return (
    <section className={"flex items-center justify-center gap-2"}>
     <span>Email me at</span> {" "} <Link href="mailto:jamesme85.me@gmail.com" className={"text-blue-600"}>jamesme85.me@gmail.com</Link>
    </section>
  );
}
