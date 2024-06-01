import React from 'react'
import event from '../../public/event-management-guide.jpg';
import Image from 'next/image';
import images3 from "../../public/images (3).jpg";

import image1 from "../../public/download (1).jpg";
import image2 from "../../public/download.jpg";
import image3 from "../../public/images (1).jpg";
import image4 from "../../public/images (2).jpg";

const page = () => {
  return (
    <div>
    <div className='flex justify-center items-center'>
     <Image src={images3} alt="event" className="h-[200px] w-[500px] mt-[100px]"/>
    </div>
    <div className='m-[120px] w-[80%] space-y-5'>

    <div className='flex space-x-5'>
    <Image src={image1} alt="event" className="h-[220px] w-[420px] "/>
    <p className="flex justify-center items-center text-center">Music event management involves the planning, organization, and execution of live music performances, festivals, and concerts. This includes tasks such as booking artists, securing venues, coordinating sound and lighting, managing ticket sales, and ensuring the overall success of the event. Event managers work closely with the artists, vendors, and attendees to create a seamless and enjoyable experience for everyone involved. They must possess a strong understanding of the music industry, excellent communication and problem-solving skills, and the ability to navigate the logistical complexities of hosting large-scale events. Successful music event management requires meticulous attention to detail, adaptability, and a passion for the music and entertainment industry.</p>
    </div>

    <div className='flex space-x-5'>
    <p className="flex justify-center items-center text-center">Program event management encompasses the planning, coordination, and execution of a series of related events or activities. This involves developing a comprehensive program that aligns with the overall goals and objectives of the organization. Program managers are responsible for creating a cohesive schedule, allocating resources, and ensuring the smooth integration of multiple events within the program. They must possess strong project management skills, the ability to coordinate various stakeholders, and a deep understanding of the target audience and their needs. Effective program event management requires strategic planning, budgeting, marketing, and evaluation to deliver a successful and impactful series of events that achieve the desired outcomes..</p>
    <Image src={image2} alt="event" className="h-[220px] w-[420px] "/>
    </div>

    <div className='flex space-x-5'>
    <Image src={image3} alt="event" className="h-[220px] w-[420px]"/>
    <p className="flex justify-center items-center text-center">Party event management involves the planning, organization, and coordination of social gatherings, celebrations, and special occasions. This includes tasks such as selecting a suitable venue, curating the guest list, managing invitations, overseeing the catering and entertainment, and ensuring a seamless flow of the event. Party event managers must have a keen eye for detail, excellent communication skills, and the ability to anticipate and address any potential issues that may arise. They work closely with vendors, decorators, and the host or client to create a memorable and enjoyable experience for all attendees. Successful party event management requires a blend of creativity, logistical expertise, and a deep understanding of guest expectations and preferences..</p>
    </div>

    <div className='flex space-x-5'>
    <p className="flex justify-center items-center text-center">Birthday party event management focuses on the planning and execution of a celebratory event to mark a person's birthday. This involves tasks such as selecting a venue, designing the theme and decor, coordinating catering and entertainment, managing guest invitations and RSVPs, and ensuring the smooth flow of the event. Birthday party event managers work closely with the celebrant and their family to bring their vision to life, while also considering the needs and preferences of the guests. They must possess strong organizational skills, creativity, and the ability to manage various vendors and service providers. Successful birthday party event management creates a memorable and personalized experience for the celebrant and their guests..</p>
    <Image src={image4} alt="event" className="h-[220px] w-[420px]"/>
    </div>

    </div>
   </div>
  )
}

export default page
