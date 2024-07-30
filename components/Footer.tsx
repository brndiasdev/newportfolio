import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 pt-20" id="contact">
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Está pronto para levar <span className="text-purple">sua</span>{" "}
          presença digital para o proximo nivel?
        </h1>
        <p className="my-5 text-center text-white-200 md:mt-10">
          Entre em contato comigo hoje e vamos discutir como posso ajudá-lo a
          atingir seus objetivos.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Entrar em contato"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright © 2024 Bruno
        </p>

        <div className="flex gap-6 md:gap-3">
          {socialMedia.map((profile, idx) => (
            <div
              key={profile.id}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
            >
              <img src={profile.img} alt={idx} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
