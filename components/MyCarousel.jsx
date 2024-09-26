import { Card } from "./ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import QuizApp from "../img/quizapp.png";
import Plantz from "../img/plantz.png";
import DailyPlanner from "../img/dailyplanner.png";
import Portfolio from "../img/portfolio.png";
import NewPortfolio from "../img/newportfolio.png"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";

export function MyCarousel() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent></CarouselContent>
      </Carousel>
      <div className="py-2 text-center text-lg text-white font-body">
        Project {current} of {count}
      </div>
      <Carousel
        setApi={setApi}
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
              <h3 className="text-center text-3xl font-display">Quiz App</h3>
              <Accordion
                type="single"
                collapsible
                className="w-3/4 flex flex-col self-center"
              >
                <AccordionItem value="item-1" className="text-center">
                  <AccordionTrigger>Read more</AccordionTrigger>
                  <AccordionContent>
                    <p className="pb-6 text-base">
                      A quiz app made with Vue.js (Vue Router), HTML and CSS.
                      The quiz makes API calls to get the questions and answers.
                      Local storage is used to store the players name.
                    </p>
                    <a
                      href="https://emmyme.github.io/quiz/"
                      className="font-body p-2 text-base text-white bg-secondary-background hover:bg-background rounded-lg"
                    >
                      Visit
                    </a>
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
                <AccordionItem value="item-1" className="text-center">
                  <AccordionTrigger>Read more</AccordionTrigger>
                  <AccordionContent>
                    <p className="pb-6 text-base">
                      A mock e-commerce website. It is a fullstack application
                      made with Next.js. The server was made using SQLite and
                      the backend was made in Node.js using the Express.js
                      framework. For the frontend I used React with TypeScript.
                    </p>
                    <a
                      href="https://github.com/Emmyme/plantz-webshop"
                      className="font-body p-2 text-base text-white bg-secondary-background hover:bg-background rounded-lg"
                    >
                      View code
                    </a>
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
                <AccordionItem value="item-1" className="text-center">
                  <AccordionTrigger>Read more</AccordionTrigger>
                  <AccordionContent>
                    <p className="pb-6 text-base">
                      My previous portfoliosite was made with Vue.js (Vue
                      Router), HTML and CSS. It was designed in Figma and made
                      responsive using CSS grid and flexbox.
                    </p>
                    <a
                      href="https://emmyme.github.io/portfolio/"
                      className="font-body p-2 text-base text-white bg-secondary-background hover:bg-background rounded-lg"
                    >
                      Visit
                    </a>
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
                <AccordionItem value="item-1" className="text-center">
                  <AccordionTrigger>Read more</AccordionTrigger>
                  <AccordionContent>
                    <p className="pb-6 text-base">
                      A daily planner designed in Figma. It was made with Native
                      JavaScript, HTML and CSS. The planner makes API calls to
                      tell you the weather in your chosen location. It also uses
                      local storage to store the to-do list and your recent
                      moods.
                    </p>
                    <a
                      href="https://emmyme.github.io/daily-planner/"
                      className="font-body p-2 text-base text-white bg-secondary-background hover:bg-background rounded-lg"
                    >
                      Visit
                    </a>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card className="md:p-2 flex flex-col p-0 gap-0 rounded-none md:rounded-xl md:gap-4">
              <Image
                src={NewPortfolio}
                alt={"new portfolio"}
                layout="responsive"
                className="md:rounded-xl"
              ></Image>
              <h3 className="text-center text-3xl font-display">
                Current Portfolio
              </h3>
              <Accordion
                type="single"
                collapsible
                className="w-3/4 flex flex-col self-center"
              >
                <AccordionItem value="item-1" className="text-center">
                  <AccordionTrigger>Read more</AccordionTrigger>
                  <AccordionContent>
                    <p className="pb-6 text-base">
                      My current portfolio is made with Next.js. It's written in TypeScript and styled using TailwindCSS. The 3D animation was made using Spline.
                    </p>
                   
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

export default MyCarousel;
