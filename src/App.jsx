import Card from './components/Card'
import User from './components/User'


const App = () => {

  const jobOpenings = [
    {
      img: "https://cdnb.artstation.com/p/assets/images/images/035/721/723/large/daniela-matsuura-marvel-iron-man-02.jpg?1615733493",
      company: "Stark Industries",
      tag: "Top Secret",
      department: "Jarvis & Friday AI Lead",
      role: "Senior Software Engineer",
      perk1: "Genius Level Only",
      perk2: "24/7 Crisis Mode",
      payBase: "$180/hr (Base)",
      payMax: "$300/hr (Max)",
      bonus: "+ Shawarma Allowance",
      location: "Stark Tower, NYC",
      buttonText: "Prove You're A Genius"
    },
    {
      img: "https://img.freepik.com/premium-vector/iron-man-mascot-esports-gaming-logo-design-brimming-with-magic-marvel-comic-world_196854-1822.jpg?w=2000",
      company: "Avengers Initiative",
      tag: "World Security",
      department: "Threat Analysis & Orbital Defense",
      role: "Principal Quantum Architect",
      perk1: "Time Travel Perks",
      perk2: "No Room for Error",
      payBase: "$210/hr (Base)",
      payMax: "$350/hr (Max)",
      bonus: "+ Infinite Stones Access",
      location: "Avengers Compound, Upstate NY",
      buttonText: "Save The Universe"
    },
    {
      img: "https://i.pinimg.com/originals/a0/bb/36/a0bb36ac4aeae38c4279874870d7e3b1.jpg",
      company: "Stark Industries",
      tag: "Defense Tech",
      department: "Kinetic & Repulsor Weapons",
      role: "Lead Propulsion Engineer",
      perk1: "Supersonic Flight Test",
      perk2: "Explosive Deadlines",
      payBase: "$175/hr (Base)",
      payMax: "$290/hr (Max)",
      bonus: "+ Free Titanium Suits",
      location: "Malibu Lab, California",
      buttonText: "Build Better Armor"
    },
    {
img: "https://i.pinimg.com/originals/8d/da/03/8dda03e02b9393e3a56acbe73309270f.png",
      company: "S.H.I.E.L.D.",
      tag: "Classified",
      department: "Helicarrier Propulsion & Stealth",
      role: "Senior Systems Overlord",
      perk1: "Flying Fortress HQ",
      perk2: "Fury Will Yell At You",
      payBase: "$160/hr (Base)",
      payMax: "$250/hr (Max)",
      bonus: "+ Bulletproof Vest Included",
      location: "The Triskelion, DC",
      buttonText: "Accept The Mission"
    },
    {
      img: "https://i.pinimg.com/originals/36/99/71/369971fd7c200a1a183df34d244de56e.jpg",
      company: "Stark Industries",
      tag: "Clean Energy",
      department: "Arc Reactor Core Integration",
      role: "Chief Palladium Specialist",
      perk1: "Unlimited Clean Power",
      perk2: "Watch Out For Toxicity",
      payBase: "$190/hr (Base)",
      payMax: "$320/hr (Max)",
      bonus: "+ Private Jet Commute",
      location: "Stark Tower, NYC",
      buttonText: "Power The World"
    },
    {
      img: "https://i.pinimg.com/736x/b1/39/40/b1394091c6121851bfc34bde51a40496.jpg",
      company: "Pym Technologies",
      tag: "Experimental",
      department: "Sub-Atomic Scale Dynamics",
      role: "Quantum Entanglement Lead",
      perk1: "Shrink to Sub-Microscopic",
      perk2: "Don't Break The Regulator",
      payBase: "$165/hr (Base)",
      payMax: "$280/hr (Max)",
      bonus: "+ Giant Ant Pet Included",
      location: "San Francisco, CA",
      buttonText: "Go Sub-Atomic"
    },
    {
      img: "https://toppng.com/uploads/preview/avengers-marvel-legends-captain-america-shield-11563265264wyv0ulbzbc.png",
      company: "Stark Industries",
      tag: "Aerospace",
      department: "Deep Space Recon & Satellites",
      role: "Interstellar Communications Dev",
      perk1: "Talk To Aliens",
      perk2: "Zero Gravity Bugs",
      payBase: "$200/hr (Base)",
      payMax: "$340/hr (Max)",
      bonus: "+ Mars Vacation Voucher",
      location: "Orbital Station Alpha",
      buttonText: "Launch To Space"
    },
    {
      img : "https://1000logos.net/wp-content/uploads/2021/05/Deadpool-logo.png",
      company: "Wakanda Design Group",
      tag: "Vibranium Tier",
      department: "Advanced Kinetic Absorption",
      role: "Vibranium Code Sorcerer",
      perk1: "Best Tech On Earth",
      perk2: "Keep It Secret from CIA",
      payBase: "$220/hr (Base)",
      payMax: "$380/hr (Max)",
      bonus: "+ Unlimited Kimoyo Beads",
      location: "Birnin Zana, Wakanda",
      buttonText: "Wakanda Forever"
    },
    {
      img : "https://www.pngall.com/wp-content/uploads/13/Spiderman-Logo-PNG-Clipart.png",
      company: "Stark Industries",
      tag: "Medical Tech",
      department: "Nanotech Biology Interface",
      role: "Nano-Bot Architect",
      perk1: "Self-Healing Code",
      perk2: "Must Think in Liquid Metal",
      payBase: "$185/hr (Base)",
      payMax: "$310/hr (Max)",
      bonus: "+ Personal DUM-E Robot",
      location: "Stark Tower, NYC",
      buttonText: "Deploy Nanites"
    },
    {
      img : "https://i.pinimg.com/736x/9c/dd/70/9cdd7088a7c02b1bed1e60cf6b6bf29b.jpg",
      company: "Oscorp Industries",
      tag: "Rival Corp",
      department: "Bio-Genetics & Glider Ops",
      role: "Lead Software Provocateur",
      perk1: "Pumpkin Bomb Allowance",
      perk2: "High Employee Turnover",
      payBase: "$150/hr (Base)",
      payMax: "$240/hr (Max)",
      bonus: "+ Green Serum Samples",
      location: "New York City, NY",
      buttonText: "Work For Norman"
    }
  ];
  // export default jobOpenings;

  // console.log(jobOpenings);


  return (
    <div className="parent">

      {jobOpenings.map(function (element, idx) {
        // console.log(idx);
        
        return <div key={idx}>
        <Card logo={element.img}  company={element.company} tag={element.tag} department={element.department} role={element.role} perk1={element.perk1} perk2={element.perk2} payBase={element.payBase} payMax={element.payMax} bonus={element.bonus} location={element.location} buttonText={element.buttonText}/>
        </div>
      })}

    </div>
  );
};

export default App;