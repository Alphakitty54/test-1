import React, { useEffect, useState } from 'react';

const Loading = () => <div>Loading...</div>;

export default function App() {
  const [loading, setloading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  const [overlayData, setOverlayData] = useState(null);
  const cards = [
    {
      job_id: 1,
      name: 'Software Developer',
      budget_name: 'Google',
      place: 'India (Remote)',
      status: 'active',
      Exp: '1 year',
      Description: "WHO ARE WE? \n\n We are a bunch of super enthusiastic, passionate, and highly driven people, working to achieve a common goal! We believe that work and the workplace should be joyful and always buzzing with energy! \n\n CloudSEK, one of India’s most trusted cybersecurity product companies, is on a mission to build the world’s fastest and most reliable AI technology that identifies and resolves digital threats in real time. The central proposition is leveraging Artificial Intelligence and Machine Learning to create a quick and reliable analysis and alert system that provides rapid detection across multiple internet sources, precise threat analysis, and prompt resolution with minimal human intervention.\n\nFounded in 2015, and headquartered in Singapore, we are proud to say that we’ve grown at a frenetic pace and have been able to achieve some accolades along the way, including: \n\n  Launch of our first product in 2016 \n\nEarning our pre-series A funding in 2018.\n\nReceiving multiple awards including the prestigious Excellence Award for being the Security Product Company of the Year in 2020.\n\nReceiving the Series A funding from MassMutual Ventures in 2021 with a total investment of $10million.\n CloudSEK’s Product Suite:\n\n  CloudSEK XVigil constantly maps a customer’s digital assets, identifies threats enriches them with cyber intelligence, and then provides workflows to manage and remediate all identified threats including takedown support. A powerful Attack Surface Monitoring tool that gives visibility and intelligence on customers’ attack surfaces. CloudSEK's BVigil uses a combination of Mobile, Web, Network, and Encryption Scanners to map and protect known and unknown assets.\n\n CloudSEK’s Contextual AI SVigil identifies software supply chain risks by monitoring Software, Cloud Services, and third-party dependencies.\n\n About the role:\n\n We are seeking a highly skilled and passionate Software Development Engineer 1/2 to join our team\n\nRoles & Responsibilities\nBe responsible for the design, development, testing, and deployment of our cyber security products.\n\n  Work closely with product managers, security analysts, and other stakeholders to understand requirements and design scalable solutions.\nOwn the design process, implementation, and verification of framework components leveraging standard software engineering methodologies\n Build and maintain a culture of excellence, collaboration, and innovation within the development team.\nEnsure adherence to best practices in software development, security, and compliance.\n\nRequirements:\n\n Strong programming skills in languages such as Python, Go, Rust or Javascript and experience with modern frameworks and tools.\nStrong understanding of cyber security concepts and best practices.\n Have the ability to independently design and architect complex systems and platforms for wider usage across the organization.\n Prior experience working on and scaling SQL + NoSQL databases.\nExperience with distributed systems and cloud computing platforms such as AWS or GCP.\nExcellent communication skills and the ability to work effectively with stakeholders across different teams and functions.\n If you are passionate about building innovative cybersecurity products and have a proven track record of working with successful software development teams, we encourage you to apply for this position.\nBenefits of Joining CloudSEK\n\  We provide an environment where you can develop and enhance your skills while delivering meaningful work that matters. You’ll be rewarded a competitive salary as well as a full spectrum of generous perks and incentives which include: \n\nGenerous medical insurance cover for yourself and your family/dependents.\nFood, unlimited snacks, and drinks are all available while at the office.\nLocated in the heart of Bangalore City, Indiranagar, which serves as a hub for all of the city's exciting outlets and our campus is totally pet-friendly! :) \n And, the finest part is yet to come! Every now and then we ensure to unwind and have a good time together, which involves games, fun, and soulful music. Feel free to show off your artistic side here!\n Benefits found in job post\n Medical insurance"
    },
    {
      job_id: 2,
      name: 'UX/UI Designer',
      budget_name: 'PCV',
      place: 'Bangalore (Onsite)',
      status: 'active',
      Exp: '2 year',
      Description: "WHO ARE WE? \n\n We are a bunch of super enthusiastic, passionate, and highly driven people, working to achieve a common goal! We believe that work and the workplace should be joyful and always buzzing with energy! \n\n CloudSEK, one of India’s most trusted cybersecurity product companies, is on a mission to build the world’s fastest and most reliable AI technology that identifies and resolves digital threats in real time. The central proposition is leveraging Artificial Intelligence and Machine Learning to create a quick and reliable analysis and alert system that provides rapid detection across multiple internet sources, precise threat analysis, and prompt resolution with minimal human intervention.\n\nFounded in 2015, and headquartered in Singapore, we are proud to say that we’ve grown at a frenetic pace and have been able to achieve some accolades along the way, including: \n\n  Launch of our first product in 2016 \n\nEarning our pre-series A funding in 2018.\n\nReceiving multiple awards including the prestigious Excellence Award for being the Security Product Company of the Year in 2020.\n\nReceiving the Series A funding from MassMutual Ventures in 2021 with a total investment of $10million.\n CloudSEK’s Product Suite:\n\n  CloudSEK XVigil constantly maps a customer’s digital assets, identifies threats enriches them with cyber intelligence, and then provides workflows to manage and remediate all identified threats including takedown support. A powerful Attack Surface Monitoring tool that gives visibility and intelligence on customers’ attack surfaces. CloudSEK's BVigil uses a combination of Mobile, Web, Network, and Encryption Scanners to map and protect known and unknown assets.\n\n CloudSEK’s Contextual AI SVigil identifies software supply chain risks by monitoring Software, Cloud Services, and third-party dependencies.\n\n About the role:\n\n We are seeking a highly skilled and passionate Software Development Engineer 1/2 to join our team\n\nRoles & Responsibilities\nBe responsible for the design, development, testing, and deployment of our cyber security products.\n\n  Work closely with product managers, security analysts, and other stakeholders to understand requirements and design scalable solutions.\nOwn the design process, implementation, and verification of framework components leveraging standard software engineering methodologies\n Build and maintain a culture of excellence, collaboration, and innovation within the development team.\nEnsure adherence to best practices in software development, security, and compliance.\n\nRequirements:\n\n Strong programming skills in languages such as Python, Go, Rust or Javascript and experience with modern frameworks and tools.\nStrong understanding of cyber security concepts and best practices.\n Have the ability to independently design and architect complex systems and platforms for wider usage across the organization.\n Prior experience working on and scaling SQL + NoSQL databases.\nExperience with distributed systems and cloud computing platforms such as AWS or GCP.\nExcellent communication skills and the ability to work effectively with stakeholders across different teams and functions.\n If you are passionate about building innovative cybersecurity products and have a proven track record of working with successful software development teams, we encourage you to apply for this position.\nBenefits of Joining CloudSEK\n\  We provide an environment where you can develop and enhance your skills while delivering meaningful work that matters. You’ll be rewarded a competitive salary as well as a full spectrum of generous perks and incentives which include: \n\nGenerous medical insurance cover for yourself and your family/dependents.\nFood, unlimited snacks, and drinks are all available while at the office.\nLocated in the heart of Bangalore City, Indiranagar, which serves as a hub for all of the city's exciting outlets and our campus is totally pet-friendly! :) \n And, the finest part is yet to come! Every now and then we ensure to unwind and have a good time together, which involves games, fun, and soulful music. Feel free to show off your artistic side here!\n Benefits found in job post\n Medical insurance",
    },
    {
      job_id: 3,
      name: 'Full Stack Developer',
      budget_name: 'Silicon Sphere',
      place: 'Bangalore (Onsite)',
      status: 'inactive',
      Exp: '3 year',
      Description: "WHO ARE WE? \n\n We are a bunch of super enthusiastic, passionate, and highly driven people, working to achieve a common goal! We believe that work and the workplace should be joyful and always buzzing with energy! \n\n CloudSEK, one of India’s most trusted cybersecurity product companies, is on a mission to build the world’s fastest and most reliable AI technology that identifies and resolves digital threats in real time. The central proposition is leveraging Artificial Intelligence and Machine Learning to create a quick and reliable analysis and alert system that provides rapid detection across multiple internet sources, precise threat analysis, and prompt resolution with minimal human intervention.\n\nFounded in 2015, and headquartered in Singapore, we are proud to say that we’ve grown at a frenetic pace and have been able to achieve some accolades along the way, including: \n\n  Launch of our first product in 2016 \n\nEarning our pre-series A funding in 2018.\n\nReceiving multiple awards including the prestigious Excellence Award for being the Security Product Company of the Year in 2020.\n\nReceiving the Series A funding from MassMutual Ventures in 2021 with a total investment of $10million.\n CloudSEK’s Product Suite:\n\n  CloudSEK XVigil constantly maps a customer’s digital assets, identifies threats enriches them with cyber intelligence, and then provides workflows to manage and remediate all identified threats including takedown support. A powerful Attack Surface Monitoring tool that gives visibility and intelligence on customers’ attack surfaces. CloudSEK's BVigil uses a combination of Mobile, Web, Network, and Encryption Scanners to map and protect known and unknown assets.\n\n CloudSEK’s Contextual AI SVigil identifies software supply chain risks by monitoring Software, Cloud Services, and third-party dependencies.\n\n About the role:\n\n We are seeking a highly skilled and passionate Software Development Engineer 1/2 to join our team\n\nRoles & Responsibilities\nBe responsible for the design, development, testing, and deployment of our cyber security products.\n\n  Work closely with product managers, security analysts, and other stakeholders to understand requirements and design scalable solutions.\nOwn the design process, implementation, and verification of framework components leveraging standard software engineering methodologies\n Build and maintain a culture of excellence, collaboration, and innovation within the development team.\nEnsure adherence to best practices in software development, security, and compliance.\n\nRequirements:\n\n Strong programming skills in languages such as Python, Go, Rust or Javascript and experience with modern frameworks and tools.\nStrong understanding of cyber security concepts and best practices.\n Have the ability to independently design and architect complex systems and platforms for wider usage across the organization.\n Prior experience working on and scaling SQL + NoSQL databases.\nExperience with distributed systems and cloud computing platforms such as AWS or GCP.\nExcellent communication skills and the ability to work effectively with stakeholders across different teams and functions.\n If you are passionate about building innovative cybersecurity products and have a proven track record of working with successful software development teams, we encourage you to apply for this position.\nBenefits of Joining CloudSEK\n\  We provide an environment where you can develop and enhance your skills while delivering meaningful work that matters. You’ll be rewarded a competitive salary as well as a full spectrum of generous perks and incentives which include: \n\nGenerous medical insurance cover for yourself and your family/dependents.\nFood, unlimited snacks, and drinks are all available while at the office.\nLocated in the heart of Bangalore City, Indiranagar, which serves as a hub for all of the city's exciting outlets and our campus is totally pet-friendly! :) \n And, the finest part is yet to come! Every now and then we ensure to unwind and have a good time together, which involves games, fun, and soulful music. Feel free to show off your artistic side here!\n Benefits found in job post\n Medical insurance",
    },
    {
      job_id: 4,
      name: 'Full Stack Developer',
      budget_name: 'Linkedln',
      place: 'Bangalore (Onsite)',
      status: 'inactive',
      Exp: '3-4 years',
      Description: "WHO ARE WE? \n\n We are a bunch of super enthusiastic, passionate, and highly driven people, working to achieve a common goal! We believe that work and the workplace should be joyful and always buzzing with energy! \n\n CloudSEK, one of India’s most trusted cybersecurity product companies, is on a mission to build the world’s fastest and most reliable AI technology that identifies and resolves digital threats in real time. The central proposition is leveraging Artificial Intelligence and Machine Learning to create a quick and reliable analysis and alert system that provides rapid detection across multiple internet sources, precise threat analysis, and prompt resolution with minimal human intervention.\n\nFounded in 2015, and headquartered in Singapore, we are proud to say that we’ve grown at a frenetic pace and have been able to achieve some accolades along the way, including: \n\n  Launch of our first product in 2016 \n\nEarning our pre-series A funding in 2018.\n\nReceiving multiple awards including the prestigious Excellence Award for being the Security Product Company of the Year in 2020.\n\nReceiving the Series A funding from MassMutual Ventures in 2021 with a total investment of $10million.\n CloudSEK’s Product Suite:\n\n  CloudSEK XVigil constantly maps a customer’s digital assets, identifies threats enriches them with cyber intelligence, and then provides workflows to manage and remediate all identified threats including takedown support. A powerful Attack Surface Monitoring tool that gives visibility and intelligence on customers’ attack surfaces. CloudSEK's BVigil uses a combination of Mobile, Web, Network, and Encryption Scanners to map and protect known and unknown assets.\n\n CloudSEK’s Contextual AI SVigil identifies software supply chain risks by monitoring Software, Cloud Services, and third-party dependencies.\n\n About the role:\n\n We are seeking a highly skilled and passionate Software Development Engineer 1/2 to join our team\n\nRoles & Responsibilities\nBe responsible for the design, development, testing, and deployment of our cyber security products.\n\n  Work closely with product managers, security analysts, and other stakeholders to understand requirements and design scalable solutions.\nOwn the design process, implementation, and verification of framework components leveraging standard software engineering methodologies\n Build and maintain a culture of excellence, collaboration, and innovation within the development team.\nEnsure adherence to best practices in software development, security, and compliance.\n\nRequirements:\n\n Strong programming skills in languages such as Python, Go, Rust or Javascript and experience with modern frameworks and tools.\nStrong understanding of cyber security concepts and best practices.\n Have the ability to independently design and architect complex systems and platforms for wider usage across the organization.\n Prior experience working on and scaling SQL + NoSQL databases.\nExperience with distributed systems and cloud computing platforms such as AWS or GCP.\nExcellent communication skills and the ability to work effectively with stakeholders across different teams and functions.\n If you are passionate about building innovative cybersecurity products and have a proven track record of working with successful software development teams, we encourage you to apply for this position.\nBenefits of Joining CloudSEK\n\  We provide an environment where you can develop and enhance your skills while delivering meaningful work that matters. You’ll be rewarded a competitive salary as well as a full spectrum of generous perks and incentives which include: \n\nGenerous medical insurance cover for yourself and your family/dependents.\nFood, unlimited snacks, and drinks are all available while at the office.\nLocated in the heart of Bangalore City, Indiranagar, which serves as a hub for all of the city's exciting outlets and our campus is totally pet-friendly! :) \n And, the finest part is yet to come! Every now and then we ensure to unwind and have a good time together, which involves games, fun, and soulful music. Feel free to show off your artistic side here!\n Benefits found in job post\n Medical insurance",
    },
    {
      job_id: 5,
      name: 'Frontend Developer',
      budget_name: 'Xerox',
      place: 'India (Remote)',
      status: 'active',
      Exp: '1 year',
     Description: "This role involves developing software applications...",
    }
    ,
    {
      job_id: 6,
      name: 'Software Engineering Intern',
      budget_name: 'Linkedln',
      place: 'Gurugram (Hybrid)',
      status: 'inactive',
      Exp: 'Fresher',
      Description: "This role involves developing software applications...",
    },
    {
      job_id: 7,
      name: 'Software Engineering Intern',
      budget_name: 'Adobe',
      place: 'Gurugram (Hybrid)',
      status: 'active',
      Exp: 'Fresher',
       Description: "This role involves developing software applications...",
    },
    {
      job_id: 8,
      name: 'Engineering Intern',
      budget_name: 'Revolve',
      place: 'Gurugram (Hybrid)',
      status: 'inactive',
      Exp: 'Fresher',
       Description: "This role involves developing software applications...",
    },
    {
      job_id: 9,
      name: 'Backend Developer Intern',
      budget_name: 'JexeryLV',
      place: 'Gurugram (Hybrid)',
      status: 'active',
      Exp: 'Fresher',
       Description: "This role involves developing software applications...",
    },
    {
      job_id: 10,
      name: 'Frontend Developer Intern',
      budget_name: 'BoredAV',
      place: 'Gurugram (Hybrid)',
      status: 'active',
      Exp: 'Fresher',
       Description: "This role involves developing software applications...",
    }
    ,
    {
      job_id: 11,
      name: 'Full Developer ',
      budget_name: 'Beggin',
      place: 'Bangalore (Hybrid)',
      status: 'active',
      Exp: '2-3 year',
       Description: "This role involves developing software applications...",
    },
    {
      job_id: 12,
      name: 'Backend Developer',
      budget_name: 'Swiggy',
      place: 'Gurugram (Hybrid)',
      status: 'inactive',
      Exp: '1-2 year',
       Description: "This role involves developing software applications...",
    }

  ];


const openCardDetails = (cardIndex) => {
    const selectedCard = cards[cardIndex];

    setSelectedCard(selectedCard);

    setOverlayData({
      title: selectedCard.name,
      description: selectedCard.Description,
      budget_name: selectedCard.budget_name,
      place: selectedCard.place,
    });
  };

  const closeCardDetails = () => {
    setSelectedCard(null);
    setOverlayData(null);
  }

  const infiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollHeight >=
      document.documentElement.scrollTop
    ) {
      setloading(true);
      // Ensure you have the 'setPage' function or remove this line if not needed.
      // setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, []);

  return (
    <div>
      <section>
        <div className="container">
          <h1></h1>
          <div className="cards">
            {cards.map((card, i) => (
              <div key={i} className="card">
                <h2>{card.name}</h2>
                <p>{card.budget_name}</p>
                <p>{card.place}</p>
                <p>Experience: {card.Exp}</p>
                <div className="info-row">
                  <p className={`status ${card.status}`}>{card.status}</p>
                  <button className="button" onClick={() => openCardDetails(i)}>Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {loading && <Loading />}

      {selectedCard && (
        <div className="overlay">
          <div className="card-details">
            <div className="scroll-container">
              <h2>{overlayData.title}</h2>
              <div className="second">
                <p>{overlayData.budget_name}</p>
                <p>{overlayData.place}</p>
              </div>
              <h3>About the job:</h3>
              <p>{overlayData.description}</p>
              <div className='third'>
              <button className="button" onClick={closeCardDetails}>
                Close
              </button>
              <button className="button">Apply</button>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}