import React from "react";
import HeaderSection from "./HeaderSection";
import { datas } from "@/utils/datas";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import Link from "next/link";

const Entertainment = () => {
  return (
    <div className="space-y-3.5">
      <HeaderSection
        title={"កម្សាន្ត"}
        textColor={"text-red-600"}
        bgColor={"bg-red-600"}
        label={"/entertainment"}
      />
      <div className="overflow-hidden grid grid-cols-2 md:grid-cols-3 gap-2.5">
        {datas.map(
          (data, index) =>
            index < 6 && (
              <Link
                href={`/article/${data.id}`}
                key={index}
                className="relative rounded-md overflow-hidden shadow-md"
              >
                <Image
                  width={400}
                  height={400}
                  alt="Image"
                  className="h-[140px] md:h-[200px] w-full object-cover object-center"
                  src={data.imageUrl}
                />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-45">
                  <h3 className="px-4 py-2 text-white text-[0.6rem] md:text-sm">
                    {truncateText(`${data.title}`)}
                  </h3>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default Entertainment;
