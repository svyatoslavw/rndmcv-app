import Image from "next/image"

const job_companies = [
  {
    id: "1",
    name: "Djinni",
    image: "/logos/djinni.png"
  },
  {
    id: "2",
    name: "DOU",
    image: "/logos/dou.png"
  },
  {
    id: "3",
    name: "WorkUA",
    image: "/logos/workua.png"
  },
  {
    id: "4",
    name: "Indeed",
    image: "/logos/indeed.png"
  },
  {
    id: "5",
    name: "Glassdoor",
    image: "/logos/glassdoor.png"
  },
  {
    id: "6",
    name: "Just Join It",
    image: "/logos/justjoin.png"
  }
]

const JobsTicker = () => {
  return (
    <div className="relative my-10 flex w-full flex-col items-center md:my-12">
      <h5 className="border-primary border-b-4 text-xl font-medium">
        Resume is supported on platforms:
      </h5>
      <div className="flex flex-wrap whitespace-nowrap py-8">
        {job_companies.map((company) => (
          <div
            key={company.id}
            className="mx-auto flex h-12 items-center gap-1 rounded-lg p-2 font-semibold transition-all dark:invert"
          >
            <Image
              alt={company.name}
              className="select-none rounded-lg"
              draggable={false}
              height={25}
              loading="lazy"
              src={company.image}
              width={100}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export { JobsTicker }
