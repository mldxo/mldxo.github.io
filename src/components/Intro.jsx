import React from "react";
import "../styles/rainbow.css";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-12">
        <h1 className="text-4xl md:text-5xl dark:text-white mb-1 md:mb-3 font-bold select-none">
            Miłosz Maculewicz
        </h1>
        <p className="text-base drop-shadow-dark dark:drop-shadow-light max-w-xl mb-6 font-normal">
          Software Developer, System Administrator
        </p>
        <p className="text-sm max-w-xl mb-6 font-normal">
            I&apos;m a third-year Computer Science student with a strong background in software development and system administration.
            I am proficient in multiple programming languages and have a keen interest mastering OOP and structural programming.
            Currently, I&apos;m working on a&nbsp;
            <a
              target="_blank"
              href="https://github.com/mldxo/secure-chat"
              className="text-cyan-600 hover:underline underline-offset-2 decoration-1 decoration-purple-400 dark:decoration-orange-400"
              rel="noreferrer noopener">
              Secure Chat
            </a>
            &nbsp;project.
        </p>
        <div className="flex flex-row space-x-2">
          <a href="https://wakatime.com/@54a5e85a-a806-4d39-bc8b-38523f717b15"><img src="https://wakatime.com/badge/user/54a5e85a-a806-4d39-bc8b-38523f717b15.svg" alt="Total time coded since May 27 2024" className="hue-rotate"/></a>
        </div>
    </div>
  );
}

export default Intro;
