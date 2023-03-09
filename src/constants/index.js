import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    apollo,
    gemini,
    mercury,
    shuttle,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Spaceflight",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Mercury",
      icon: web,
    },
    {
      title: "Venus",
      icon: mobile,
    },
    {
      title: "Earth",
      icon: backend,
    },
    {
      title: "Mars",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Mercury",
      company_name: "Project Mercury",
      icon: mercury,
      iconBg: "#383E56",
      date: "1958 – 1963",
      points: [
        "In 1958, NASA formed an engineering group, the Space Task Group, to manage their human spaceflight programs under the direction of Robert Gilruth.",
        "Their earliest programs were conducted under the pressure of the Cold War competition between the US and the Soviet Union.",
        "NASA inherited the US Air Force's Man in Space Soonest program, which considered many crewed spacecraft designs ranging from rocket planes like the X-15, to small ballistic space capsules.",
        "On May 5, 1961, astronaut Alan Shepard became the first American in space aboard a capsule he named Freedom 7, launched on a Redstone booster on a 15-minute ballistic (suborbital) flight.",
      ],
    },
    {
      title: "Gemini",
      company_name: "Project Gemini",
      icon: gemini,
      iconBg: "#E6DEDD",
      date: "1961 – 1966",
      points: [
        "Based on studies to grow the Mercury spacecraft capabilities to long-duration flights",
        "Project Gemini was started as a two-man program in 1961 to overcome the Soviets' lead and to support the planned Apollo crewed lunar landing program, adding extravehicular activity (EVA) and rendezvous and docking to its objectives.",
        "Nine missions followed in 1965 and 1966, demonstrating an endurance mission of nearly fourteen days, rendezvous, docking, and practical EVA, and gathering medical data on the effects of weightlessness on humans",
        "They succeeded in launching two crewed flights before Gemini's first flight, achieving a three-cosmonaut flight in 1964 and the first EVA in 1965.",
      ],
    },
    {
      title: "Apollo",
      company_name: "Apollo program",
      icon: apollo,
      iconBg: "#383E56",
      date: "1960 – 1972",
      points: [
        "Apollo was one of the most expensive American scientific programs ever. It cost more than $20 billion in 1960s dollars[93] or an estimated $236 billion in present-day US dollars.",
        "The Apollo program used the newly developed Saturn I and Saturn V rockets, which were far larger than the repurposed ICBMs of the previous Mercury and Gemini programs.",
        "The planned first crew of 3 astronauts were killed due to a fire during a 1967 preflight test for the Apollo 204 mission (later renamed Apollo 1).",
        "The Apollo 11 mission, launched in July 1969, landed the first humans on the Moon. Astronauts Neil Armstrong and Buzz Aldrin walked on the lunar surface, conducting experiments and sample collection, while Michael Collins orbited above in the CSM.",
      ],
    },
    {
      title: "Space Shuttle",
      company_name: "Space Shuttle program",
      icon: shuttle,
      iconBg: "#E6DEDD",
      date: "1972 – 2011",
      points: [
        "The Space Shuttle was the only vehicle in the Space Transportation System to be developed, and became the major focus of NASA in the late 1970s and the 1980s.",
        "The Shuttle flew 135 missions and carried 355 astronauts from 16 countries, many on multiple trips. Its major components were a spaceplane orbiter with an external fuel tank and two solid-fuel launch rockets at its side.",
        "On 20 missions (1983–1998) the Space Shuttle carried Spacelab, designed in cooperation with the European Space Agency (ESA).",
        "In 1995, Russian-American interaction resumed with the Shuttle–Mir missions (1995–1998). Once more an American vehicle docked with a Russian craft, this time a full-fledged space station.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };