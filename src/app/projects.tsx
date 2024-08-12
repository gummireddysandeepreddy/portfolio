import Image from "next/image";


export default function Projects() {
    return (
    <div>
        <div className="flex flex-col space-y-3">
            <Image src="/public/next.svg" alt="Next.js" width={250} height={125} />
            {/* <div className="h-[125px] w-[250px] rounded-xl"> </div> */}
            <div className="space-y-2">
                <p className="h-4 w-[250px]">nebdjn </p>
                <p className="h-4 w-[200px]">dfmdfm </p>
            </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="h-[125px] w-[250px] rounded-xl"> </div>
          <div className="space-y-2">
            <p className="h-4 w-[250px]">nebdjn </p>
            <p className="h-4 w-[200px]">dfmdfm </p>
          </div>
        </div>
    </div>
    )
}