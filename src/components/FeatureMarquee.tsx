import React from "react";
import Marquee from "react-fast-marquee";

const techs = [
  {
    id: 1,
    name: 'C#',
    logo: '#',
    url: ''
  }
]

const featureList = [
  "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white",
  "Works on Mobile Devices",
  "Highly Customizable",
  "Light-weight",
  "No dependencies",
  "Feature Rich",
  "MIT Licensed",
  "Written in TypeScript",
  "Vanilla JavaScript",
  "Easy to use",
  "Accessible",
  "Frameworks Ready",
];

export function FeatureMarquee() {
  return (
    <Marquee autoFill speed={50}>
      {/* <p className="py-2.5 md:py-3.5 lg:py-4 text-lg md:text-xl lg:text-2xl whitespace-nowrap"> */}
      {featureList.map((featureItem, index) => (
        <React.Fragment key={index}>
          {/* <div>
            <img className="h-80 max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
          </div> */}
          <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="#">
              <img className="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
            </a>
            <figcaption className="absolute px-4 text-lg text-white bottom-6">
              <p>Do you want to get notified when a new component is added to Flowbite?</p>
            </figcaption>
          </figure>
        </React.Fragment>
      ))}
      {/* </p> */}
    </Marquee>
  );
}