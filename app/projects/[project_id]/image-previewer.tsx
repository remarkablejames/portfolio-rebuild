import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export function ImagePreviewer({
                                   image,
                               }: {
    image: { src: string; aspect_ratio: number };
}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className=" bg-blue-600 text-white/70 border-none">
                    Preview
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[80rem] max-h-[60rem] bg-neutral-700 border-none rounded-lg p-0">
                <div className="relative w-full max-h-[70vh] flex items-center justify-center">
                    <div className="relative w-full h-[50vh]">
                        <Image
                            src={image.src}
                            alt="image"
                            fill
                            className="object-contain rounded-lg"
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}