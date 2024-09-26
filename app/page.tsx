"use client";

import Image from "next/image";
import Buddy from "../components/buddy";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

import Link from "next/link";
import { ContactForm } from "../components/contact-form";
import Logo from "../img/Namnlöst-1 [återskapat].png";
import MyCarousel from "../components/MyCarousel";
import Instagram from "../img/instagram.svg";
import Github from "../img/github.svg";
import LinkedIn from "../img/linkedin.svg";

const skills: String[] = [
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "Python",
  "React.js",
  "Vue.js",
  "Node.js/Express.js",
  "Tailwind CSS",
  "Bootstrap",
  "Agile Development",
  "Figma",
  "Git",
  "Responsive Design",
  "Accessibility",
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center overflow-x-hidden bg-gradient-to-b from-background to-secondary-background">
        <header className=" flex justify-center">
          <nav className="fixed z-10 font-display">
            <div className="rounded-lg mt-3 sm:mt-5">
              <Button className=" text-gray-800 p-3 text-lg rounded-l-2xl rounded-r-none sm:text-2xl sm:p-6">
                <Link href={"#aboutme"}>About me</Link>
              </Button>
              <Button className="text-gray-800 p-3 text-lg rounded-none sm:text-2xl sm:p-6">
                <Link href={"#portfolio"}>Portfolio</Link>
              </Button>
              <Button className="text-gray-800 p-3 text-lg sm:text-2xl sm:p-6 rounded-l-none rounded-r-2xl">
                <Link href={"#contact"}>Contact</Link>
              </Button>
            </div>
          </nav>
          <Buddy />
        </header>


        <section className="mt-0 lg:mx-10 lg:mt-5" id="aboutme">
          <div className="flex flex-row gap-16 justify-center flex-wrap">
            <Card className="w-full rounded-none lg:w-1/3 lg:rounded-xl flex flex-col pb-2">
              <h4 className="font-display text-4xl text-center mt-4">
                About me
              </h4>
              <p className="p-4 font-body text-xl md:px-6 md:pb-2">
                My name is Emelie Berg and I'm a junior fullstack developer. I'm
                currently a student studying frontend development, my skills
                however are in backend as well and I'm proficient in
                technologies covering both.
                </p>
                
                <p className="p-4 font-body text-xl md:px-6 md:pb-4">
                 As you can see in my portfolio, the
                websites I design myself tend to be a bit more playful, but I'm
                of course happy to work on different kinds of projects as well.
              </p>

              <Image src={Logo} alt={"my logo"} layout="objectFit" className=" w-2/5 self-center"></Image>
            </Card>
            <Card className="w-full rounded-none lg:w-fit lg:rounded-xl">
              <h4 className="font-display text-4xl text-center mt-4">Skills</h4>
              <ul className="p-4 font-body text-xl justify-center flex flex-wrap gap-8 lg:flex-col lg:gap-1 lg:justify-start lg:px-6 lg:pb-6">
                {skills.map((skill) => (
                  <>
                    <li>{skill}</li>
                  </>
                ))}
              </ul>
            </Card>
          </div>
        </section>
        <section className="md:w-3/4 mt-20" id="portfolio">
          <MyCarousel />
        </section>

        <Card id="contact" className="p-8 lg:w-2/5 mt-20">
          <ContactForm></ContactForm>
        </Card>
        <footer className="footer bg-card/70 text-gray-800 p-10 mt-20">
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <a href="linkedin.com/in/emelie-berg-3794b8258">
                <Image src={LinkedIn} alt="Visit my LinkedIn" width={30} />
              </a>
              <a href="https://github.com/emmyme">
                <Image src={Github} alt="Visit my Github" width={30} />
              </a>
              <a href="https://www.instagram.com/devwitheb/">
                <Image src={Instagram} alt="Visit my instagram" width={30} />
              </a>
            </div>
          </nav>
        </footer>
      </main>
    </>
  );
}
