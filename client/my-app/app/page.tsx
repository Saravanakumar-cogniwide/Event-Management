import React from "react";
import event from '../public/11122305.jpg';
import Image from "next/image";
import image1 from "../public/download (1).jpg";
import image2 from "../public/download.jpg";
import image3 from "../public/images (1).jpg";
import image4 from "../public/images (2).jpg";
import event1 from "../public/event-management-guide.jpg";
export default function Home() {
  return (
    <>
  <div className="hero min-h-screen">
    <Image src={event} alt="event" className="h-full w-full"/>
</div>

<div>
  <p className="mt-5 ml-[100px] text-black text-xl">Trending</p>
<div className="flex m-[50px] gap-[20px] ml-[150px]">
  <Image src={image1} alt="event1" className="rounded-lg"/>
  <Image src={image2} alt="event2" className="rounded-lg"/>
  <Image src={image3} alt="event3" className="rounded-lg"/>
  <Image src={image4} alt="event4" className="rounded-lg"/>
</div>
</div>

<div className="hero min-h-screen">
<Image src={event1} alt="event" className="h-full w-full"/>
</div>
</>
  );
}
