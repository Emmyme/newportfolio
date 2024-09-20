"use client";

import Image from "next/image";
import Buddy from "@/buddy"
import { Button } from "@/components/ui/button";

import { Card } from "@/components/ui/card";

import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import Logo from "@/img/Namnlöst-1 [återskapat].png";
import MyCarousel from "@/components/other/MyCarousel";
import Typewriter from "@/components/other/Typewriter";

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
            <div className="bg-white/95 rounded-sm mt-3 sm:mt-5">
            <Button className=" text-foreground p-3 text-lg rounded-l-s rounded-r-none sm:text-2xl sm:p-6">
              <Link href={"#aboutme"}>About me</Link>
            </Button>
            <Button className="text-foreground p-3 text-lg rounded-none sm:text-2xl sm:p-6">
              <Link href={"#portfolio"}>Portfolio</Link>
            </Button>
            <Button className=" text-foreground p-3 text-lg sm:text-2xl sm:p-6 rounded-l-none rounded-r-s" >
              <Link href={"#contact"}>Contact</Link>
            </Button>
            </div>
          </nav>
          <Buddy/>
        </header>

        <section className="mt-5 lg:mx-10 lg:mt-20" id="aboutme">
          <div className="flex flex-row gap-6 justify-center flex-wrap">
            <Card className="w-full rounded-none md:w-2/3 md:rounded-xl">
              <h4 className="font-display text-4xl text-center mt-4">
                About me
              </h4>
              <p className="p-4 font-body text-lg">
                My name is Emelie Berg and I am a 23 year old fullstack developer. 
              </p>
            </Card>
            <Card className="w-full rounded-none md:w-fit md:rounded-xl">
              <h4 className="font-display text-4xl text-center mt-4">Skills</h4>
              <ul className="p-4 font-body text-xl justify-center flex flex-wrap gap-8 md:flex-col md:gap-2 md:justify-start">
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
        <MyCarousel/>
          
        </section>

        <Card id="contact" className="p-4 lg:w-1/3 mt-10">
          <ContactForm></ContactForm>
        </Card>
      <footer className="w-full bg-secondary-background mt-20 p-10">
        <div className="w-1/4">
          <Image src={Logo} alt={"logo"} layout="responsive"></Image>
        </div>
      </footer>
      </main>
    </>
  );
}
