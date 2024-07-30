import { projects } from "@data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div id="projetos" className="py-20">
      <h1 className="heading">
        Uma pequena amostra de meus{" "}
        <span className="text-purple">Trabalhos Recentes</span>
      </h1>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {projects.map(({ title, id, des, img, iconLists, link }) => (
          <div
            key={id}
            className="flex h-[32rem] w-[80vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px] lg:h-[30vh]">
                <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="absolute bottom-0 z-10 object-fill"
                />
              </div>
              <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                {title}
              </h1>
              <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                {des}
              </p>
              <div className="mb-3 mt-7 flex items-center justify-between">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2"></img>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <p className="md:text--xs flex text-sm text-purple lg:text-xl">
                    Check live site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
