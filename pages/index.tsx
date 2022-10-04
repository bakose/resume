import type { NextPage } from "next";
import { Profile } from "../data/profile";
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
  AiFillPhone,
  AiOutlineFilePdf,
} from "react-icons/ai";

function getLevelBarClass(level: number) {
  if (level === 1) {
    return "cs-skills-level-1";
  } else if (level === 2) {
    return "cs-skills-level-2";
  } else if (level === 3) {
    return "cs-skills-level-3";
  } else if (level === 4) {
    return "cs-skills-level-4";
  } else if (level === 5) {
    return "cs-skills-level-5";
  }
}

function getLevelBarBgClass(level: number) {
  if (level === 1) {
    return "cs-skills-level-bg-1";
  } else if (level === 2) {
    return "cs-skills-level-bg-2";
  } else if (level === 3) {
    return "cs-skills-level-bg-3";
  } else if (level === 4) {
    return "cs-skills-level-bg-4";
  } else if (level === 5) {
    return "cs-skills-level-bg-5";
  }
}

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen h-full">
      <div className="flex flex-col w-80 shrink-0 bg-slate-800 text-white pl-5 py-10">
        <div className="pb-6">
          <p className="text-3xl pb-3">{Profile.name}</p>
          <p className="text-gray-400 text-xl">{Profile.description}</p>
        </div>

        <div className="flex flex-col space-y-2 pl-3">
          {Profile.contact.mobile && (
            <div className="cs-profile-item-box">
              <AiFillPhone className="cs-icon" />
              <p className="cs-profile-item">{Profile.contact.mobile}</p>
            </div>
          )}
          {Profile.contact.email && (
            <div className="cs-profile-item-box">
              <AiOutlineMail className="cs-icon" />
              <p className="cs-profile-item">{Profile.contact.email}</p>
            </div>
          )}

          {Profile.contact.linkedin && (
            <div className="cs-profile-item-box">
              <AiFillLinkedin className="cs-icon" />
              <p className="cs-profile-item">{Profile.contact.linkedin}</p>
            </div>
          )}

          {Profile.contact.github && (
            <div className="cs-profile-item-box">
              <AiFillGithub className="cs-icon" />
              <p className="cs-profile-item">{Profile.contact.github}</p>
            </div>
          )}
        </div>

        <div className="pt-12 pr-8">
          <div className="flex items-center text-center">
            <p className="text-xl pb-3">Skills</p>
            <div className="w-full ml-5 bg-white h-px" />
          </div>

          <div className="pl-3 space-y-2">
            {Profile.skills.map(({ item, level }) => (
              <div key={item} className="cs-skills-item-box">
                <p>{item}</p>
                <div className="flex h-2 ">
                  <div className={getLevelBarClass(level)} />
                  <div className={getLevelBarBgClass(level)} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-12">
          <div className="flex items-center text-center pr-8">
            <p className="text-xl pb-3">Knowledge</p>
            <div className="w-full ml-5 bg-white h-px" />
          </div>

          <div className="pl-3">
            <div className="flex flex-col space-y-5">
              {Profile.knowledge.map(({ item, child }) => (
                <div key={item}>
                  <p>{item}</p>
                  <ul className="pl-6 list-disc text-gray-200">
                    {child.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-10">
        <p className="text-3xl pb-5">Profile</p>
        <p className="whitespace-pre-line">{Profile.summary}</p>
        <p className="text-3xl pt-12 pb-5">Work History</p>
        <div className="space-y-5">
          {Profile.history.map(({ from, to, title, subjects }) => (
            <div key={title} className="flex space-x-10">
              <p className="cs-history-date-box">
                {from} - {to}
              </p>
              <div className="flex-1">
                <p className="text-lg font-semibold">{title}</p>
                {subjects.map(({ item, details }) => (
                  <div key={item} className="pb-3">
                    <p>{item}</p>
                    <ul className="pl-6 list-disc">
                      {details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
