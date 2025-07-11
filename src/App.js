import React, { useRef } from 'react';
import './App.css';
import { Header, Footer } from './containers';
import { Navbar, Timeline } from './components';
import * as assets from './assets';

const App = () => {
  const timelineRef = useRef(null);
  const navbarRef = useRef(null);

  const scrollToTimeline = () => {
    timelineRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNavbar = () => {
    navbarRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const timelineData = [
    { year: "2008", 
      title: "Gründung", 
      text: "Unsere Gründerinnen Helena Weber und Sabrina Hoffmann lernten sich in ihrer Studienzeit kennen und wurden besonders durch ihre Liebe zur Live-Musik zusammengebracht. Nachdem beide ihr Studium im Bereich Business Management abgeschlossen hatten, dauerte es nicht lange bis ihnen die Idee zur Gründung einer eigenen Managementfirma kam. Nach vielen Gesprächen und der Entscheidung sich besonders auf die Live-Musik-Branche zu fokussieren war es dann offiziell: Baseline Events war gegründet!",
      images: [assets.woman1, assets.woman2]
    },
    { year: "2009", 
      title: "Das erste Event", 
      text: "Das erste Event unter dem Management von Baseline Events war ein kleines Konzert mit ca. 500 Personen im Kölner Musikclub „Luxor“. Dieser erfolgreiche Abend legte den Grundstein für die weitere Entwicklung von Baseline Events.",
      images: [assets.crowdStageView, assets.concertHands]
    },
    { year: "2011", 
      title: "Unser Team vergrößert sich", 
      text: "Durch ihr ständiges Engagement sprach sich der Name Baseline Events in der Branche herum, und es dauerte nicht lange bis es mehrere Stammkunden gab. Was zuvor von Helena Weber und Sabrina Hoffmann allein gestemmt werden konnte, wurde mit einem wachsenden Kundenstamm zunehmend schwieriger. Unser Team vergrößerte sich also zum ersten Mal. Lernen Sie <a href='#ueberUns'>hier</a> unser Team kennen.",
      images: [assets.group1, assets.group2, assets.group3]
    },
    { year: "2012", 
      title: "Internationale Aufträge", 
      text: "Im Jahr 2012 erreichte Baseline Events einen bedeutenden Meilenstein, da wir erstmals auch international tätig werden konnten. Im Rahmen einer Tour durften wir Konzerte in Österreich, der Schweiz und auch Deutschland organisieren."
    },
    { year: "2014", 
      title: "Unsere Kampagne für umweltfreundlichere Events", 
      text: "2014 fingen wir an, unsere Kampagne für umweltfreundlichere Events zu starten. Wir wissen, dass Konzerte und Festivals sehr große Mengen and Emissionen ausstoßen und arbeiten aktiv daran dies bei unseren Events zu minimieren. In diesem kurzen Video können sie mehr über unsere Initiative erfahren.",
      video: [assets.videoInterview]
    },
    { year: "2017", 
      title: "Unser bis jetzt größtes Event", 
      text: "Das bis jetzt größte Event, welches unter dem Management von Baseline Events stand, war ein Arena-Konzert mit über 20.000 Zuschauern. Ein beeindruckendes Bühnenbild und drei verschiedene Live-Auftritte sorgten für einen unvergesslichen Abend und lachende Gesichter bei allen Zuschauern.",
      images: [assets.arenaView, assets.onStage, assets.coupleInCrowd]
    },
    { year: "2020", 
      title: "Veränderung der Live-Industrie durch die COVID-19-Pandemie", 
      text: "Durch die Corona-Pandemie kam die Live-Industrie plötzlich zum Stillstand. Um den Menschen auch in diesen Zeiten weiterhin besondere Erlebnisse bieten zu können, mussten wir uns an die Umstände anpassen. In dieser Zeit fokussierten wir uns besonders auf das Organisieren von Live-Stream-Veranstaltungen."
    },
    { year: "2025", 
      title: "Schreiben Sie mit uns Geschichte", 
      text: "Wir würden uns sehr darüber freuen, wenn auch Sie mit ihrem Event ein Teil unserer Geschichte werden möchten. Dafür können sie uns ganz einfach <a href='#kontakt'>hier</a> kontaktieren.",
      images: [assets.team]
    }
  ];

  return (
    <div className='App'>
      <div className='baseline__gradient--bg' ref={navbarRef}>
        <Navbar />
        <Header scrollToTimeline={scrollToTimeline} />
      </div>
      <div ref={timelineRef}>
        <Timeline timelineData={timelineData} scrollToNavbar={scrollToNavbar}/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
