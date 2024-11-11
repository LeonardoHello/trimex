import Modal from "@/components/Modal";
import Image from "next/image";

import photo1 from "public/photo-1.jpg";

export default function RadoviModalPage() {
  return (
    <Modal>
      <div className="w-[min(calc(100vw-2rem),500px)] rounded-xl border bg-background p-4 sm:p-6">
        <div>
          <h1 className="scroll-m-20 text-xl font-bold">Picture of water</h1>
          <p className="max-w-sm text-sm [&:not(:first-child)]:mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            reprehenderit cum explicabo amet esse ipsa a officiis. Sit non
            eligendi soluta fugiat, tenetur nesciunt aperiam esse dolor cum vero
            reiciendis.
          </p>
        </div>
        <div className="relative mt-6 aspect-video">
          <Image
            src={photo1}
            alt="hehe"
            fill
            sizes="100%"
            className="rounded-xl object-cover object-center"
          />
        </div>
      </div>
    </Modal>
  );
}
