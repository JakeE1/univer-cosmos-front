import {
    mobile,
    backend,
    creator,
    web,
    apollo,
    gemini,
    mercury,
    shuttle,
    carrent,
    jobit,
    tripguide,
    earth,
    jupiter,
    mercury_png,
    neptun,
    saturn,
    uranus,
    mars,
    venus
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
      name: "Mercury",
      icon: mercury_png,
    },
    {
      name: "Venus",
      icon: venus,
    },
    {
      name: "Earth",
      icon: earth,
    },
    {
      name: "Mars",
      icon: mars,
    },
    {
      name: "Jupiter",
      icon: jupiter,
    },
    {
      name: "Saturn",
      icon: saturn,
    },
    {
      name: "Uranus",
      icon: uranus,
    },
    {
      name: "Neptune",
      icon: neptun,
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
        "FIX YOUR LITTLE PROBLEM AND LIGHT THIS CANDLE.",
      name: "Alan Shepard",
      designation: "NASA",
      company: "Freedom 7 Mercury",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "THAT’S ONE SMALL STEP FOR MAN, ONE GIANT LEAP FOR MANKIND.",
      name: "Neil Armstrong",
      designation: "NASA",
      company: "Apollo 11",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "HOUSTON, WE’VE HAD A PROBLEM HERE.",
      name: "John “Jack” Swigert & James “Jim” Lovell",
      designation: "NASA",
      company: "Apollo 13 mission",
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