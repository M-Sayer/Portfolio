import React from 'react';
import './About.css'

const About = () => {
  const smImg = './images/bio300.jpg';
  const lgImg = './images/bio700.jpg';

  return (
    <div className='about'>
      <img src={smImg} srcSet={`${smImg} 300w, ${lgImg} 768w`} alt='bio-pic' />
      <p className='caption'>rock-climbing in New Mexico</p>
      <p>
        greetings and salutations! my name is muhajir, and i'm so glad you're here. i really enjoy meeting new folks. people always have such interesting stories to tell. here is mine...
      </p>
      <p>
        i have always loved to create and build new things. one of my earliest creative outlets was photography. i used to borrow my mother's little film camera (remember those?) and i loved taking pictures, and then seeing what came out after we got them developed. as i got older, i got a digital camera and used to make and edit home movies. i've always been fascinated by technology and computers. i used to read about them, and in middle school i used to regularly take apart my macbook and put it back together, or get new parts to modify it (remember when Apple used to let you do that?).
      </p>
      <p>
        after high school, i started working at a dojo. i had been doing jiu-jitsu and various martial arts since i was very young. i love grappling. it is nothing but live problem solving against an opponent, and you'd be surprised at how creative those solutions can get. here i discovered i also loved engaging with people, and making our students feel welcome. i thoroughly enjoyed being in a service role, and my attention to detail became something i was known for amongst the students (i knew the first and last name of every student i had...and there were several hundred) and i had a real knack for anticipating the needs not just of our members, but also of my fellow instructors and co-workers. 
      </p>
      <p>
        after i (sadly) left that role, i moved into the online/ecommerce space. i worked at a great company in cali and started to remember my passion for technology. i was working with photographers, designers, and developers. my creativity was being piqued, as the brand was based around fashion. and i was still in a role where i was able to engage with people, both our customers through customer service, and our sponsored athletes, for whom i served as the point person. i joined during a period of tremendous growth, and was able to help transition the company into using a distribution and fulfillment service, as well as intregrating our ecommerce solution with the new WMS (warehouse management system).
      </p>
      <p>
        it was around this time that i knew i wanted to somehow combine these aspects that i found i was enjoying. i wanted be in a role where i was fulfilled creatively and artistically, engaging my love for building and solving problems, while still working with my passions for technology and being of service to customers. 
      </p>
      <p>
        i began experimenting with the types of roles that checked all those boxes, to see what i would enjoy. i started learning the basics of product photography and web development from our in-house team, freelancing photography/video, and learned SEO and digital/social media marketing. i also learned how to use Shopify and Squarespace more, and even made a few websites for clients using those platforms. 
      </p>
      <p>
        continuing this period of experimentation, growth, and learning, i moved back to NYC from cali, and began working in another e-commerce role. i was making digital content, managing a website, planning events, and was the point person for all the attendees of our events. it was a great role, and i learned a lot, and met amazing people from all over the country. and then covid happened....
      </p>
      <p>
        no more events. so looking at all my experiences from the past few years, and speaking with my godfather - a 25 year industry veteran - i decided that software development was the role i wanted to transition into, specifically working with the full-stack. the frontend of the stack would allow for my creativity, andi'd be able create user experiences that were simple and not frustrating to use, yet still engaging. This would fulfill my passion for service, customers, and end users. working with the backend of the stack would enable me to constantly be building. and in general, i would be in a profession that allowed me to constantly learn and solve problems.
      </p>
      <p>
        covid-19 gave me the free time to really dedicate myself to learning the skills necessary to start me on my path to software development. i enrolled in a 6 month full time immersive program. where we worked 8-10 hours a day, learning all about web development from people who worked in the industry. i really enjoyed the hands on approach, and the fact that we were building and implementing what we learned. working with fellow students to build projects was an amazing experience, and i had wonderful teachers who would answer my endless questions of "why do we do this?"
      </p>
      <p>
        i was paired with a really great mentor, Vincent, whom i met with twice a week. my favorite thing to do was ask him conceptual questions about what we were learning that week, so i could get a more in-depth understanding of the topics. i really need to know how or why something works, what makes it tick - that is just how my brain works. i will keep digging at something until i know the reason. my friends call me relentless, determined, or insane, with regards to that trait. i'm unsure which is the most accurate. 
      </p>
      <p>
        i spent just as much time outside of class reading, learning and building. on our break weeks, i would learn things which weren't covered in the course and build projects. my email filled up with software related medium articles and subscriptions. cutting cucumbers became a recursive algorithm. every conversation turned into an app idea. i'm really glad i decided to get into this, because it is amazing!
      </p>
      <p>
        i'm looking forward to working more in this area, contributing to software and services, and to seeing how i can bring my own unique experiences to my future roles. and of course, as always, i'm excited to keep learning.
      </p>
      <p>
        with a smile,
  
      <p>- muhajir</p>
      </p>
    </div>
  )
}

export default About;