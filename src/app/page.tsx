"use client";

import Image from "next/image";
import Clouds from "@/img/clouds.png";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import QuizApp from "@/img/quizapp.png";
import Plantz from "@/img/plantz.png";
import DailyPlanner from "@/img/dailyplanner.png";
import Portfolio from "@/img/portfolio.png";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import Logo from "@/img/Namnlöst-1 [återskapat].png";
import Autoplay from "embla-carousel-autoplay";

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
      <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
        <header className="pt-3 flex sm:pt-10">
          <nav className="fixed flex gap-8 justify-center z-10 font-display w-full md:gap-20">
            <Button className="bg-white/95 text-foreground p-3 text-lg rounded-3xl sm:text-2xl sm:p-6">
              <Link href={"#aboutme"}>About me</Link>
            </Button>
            <Button className="bg-white/95 text-foreground p-3 text-lg rounded-3xl sm:text-2xl sm:p-6">
              <Link href={"#portfolio"}>Portfolio</Link>
            </Button>
            <Button className="bg-white/95 text-foreground p-3 text-lg rounded-3xl sm:text-2xl sm:p-6">
              <Link href={"#contact"}>Contact</Link>
            </Button>
          </nav>
          <div className="bg-background flex justify-center mx-[-50px] pt-6 md:mx-0 md:pt-0">
            <Image
              src={Clouds}
              alt={"clouds"}
              layout="objectFit"
              className="animate-bounce object-cover"
            ></Image>
          </div>
        </header>
        <section className="mt-5 lg:mx-10 lg:mt-20" id="aboutme">
          <div className="flex flex-row gap-6 justify-center flex-wrap">
            <Card className="w-full rounded-none md:w-2/3 md:rounded-xl">
              <h4 className="font-display text-4xl text-center mt-4">
                About me
              </h4>
              <p className="p-4 font-body text-lg">
                My name is Emelie Berg and I'm a 23 year old web developer with
                a focus on front-end development.
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
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent>
              <CarouselItem>
                <Card className="md:p-2 flex flex-col p-0 gap-0 rounded-none md:rounded-xl md:gap-4">
                  <Image
                    src={QuizApp}
                    alt={"quiz app"}
                    layout="responsive"
                    className="md:rounded-xl"
                  ></Image>
                  <h3 className="text-center text-3xl font-display">
                    Quiz App
                  </h3>
                  <Accordion
                    type="single"
                    collapsible
                    className="w-3/4 flex flex-col self-center"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Read more</AccordionTrigger>
                      <AccordionContent>
                        A quiz app made with Vue.js (Vue Router), HTML and CSS.
                        The quiz makes API calls to get the questions and
                        answers. Local storage is used to store the players
                        name.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="md:p-2 flex flex-col p-0 gap-0 rounded-none md:rounded-xl md:gap-4">
                  <Image
                    src={Plantz}
                    alt={"plant store"}
                    layout="responsive"
                    className="md:rounded-xl"
                  ></Image>
                  <h3 className="text-center text-3xl font-display">Plantz</h3>
                  <Accordion
                    type="single"
                    collapsible
                    className="w-3/4 flex flex-col self-center"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Read more</AccordionTrigger>
                      <AccordionContent>
                        A mock e-commerce website. It's a fullstack application
                        made with Next.js. The server was made using SQLite and
                        the backend was made in Node.js using the Express.js
                        framework. For the frontend I used React with
                        TypeScript.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="md:p-2 flex flex-col p-0 gap-0 rounded-none md:rounded-xl md:gap-4">
                  <Image
                    src={Portfolio}
                    alt={"old portfolio"}
                    layout="responsive"
                    className="md:rounded-xl"
                  ></Image>
                  <h3 className="text-center text-3xl font-3xl font-display">
                    Old Portfolio
                  </h3>
                  <Accordion
                    type="single"
                    collapsible
                    className="w-3/4 flex flex-col self-center"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Read more</AccordionTrigger>
                      <AccordionContent>
                        My previous portfoliosite was made with Vue.js (Vue
                        Router), HTML and CSS. It was designed in Figma and made
                        responsive using CSS grid and flexbox.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="md:p-2 flex flex-col p-0 gap-0 rounded-none md:rounded-xl md:gap-4">
                  <Image
                    src={DailyPlanner}
                    alt={"daily planner"}
                    layout="responsive"
                    className="md:rounded-xl"
                  ></Image>
                  <h3 className="text-center text-3xl font-display">
                    Daily Planner
                  </h3>
                  <Accordion
                    type="single"
                    collapsible
                    className="w-3/4 flex flex-col self-center"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Read more</AccordionTrigger>
                      <AccordionContent>
                        A daily planner designed in Figma. It was made with
                        Native JavaScript, HTML and CSS. The planner makes API
                        calls to tell you the weather in your chosen location.
                        It also uses local storage to store the to-do list and
                        your recent moods.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <Card id="contact" className="p-4 lg:w-1/3 mt-10">
          <ContactForm></ContactForm>
        </Card>
      </main>
      <footer className="w-full bg-secondary-background mt-20 p-10">
        <div className="w-1/4">
          <Image src={Logo} alt={"logo"} layout="responsive"></Image>
        </div>
      </footer>
    </>
  );
}
