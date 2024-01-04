"use client";
import React from "react";
import HeroSection from "./(components)/HeroSection";
import { useState } from "react";
import ImageDesc from "./(components)/ImageDesc";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Modal from "./(components)/Modal"
const Blog = () => {
  const data = [
    {
      image: "blg1",
      position: "right",
      id: "details",
      title: "Srimad Bhagavatam is Life Saviour",
      description:
        "Every man should act like this: when he meets a person more qualified than himself, he should be very pleased; when he meets someone less qualified than himself, he should be compassionate toward him; and when he meets someone equal to himself, he should make friendship with him. In this way one is never affected by…  ",
    },
    {
      image: "blg2",
      position: "left",
      id: "biography",
      title: "Understanding the Tenth Canto Chronology",
      description:
        "Lord Kṛṣṇa, who appeared with Baladeva in the Yadu dynasty, performed His activities within this world. Kṛṣṇa is transcendental, and therefore to understand His activities is the occupation of liberated persons. Hearing of kṛṣṇa-līlā is the boat by which to achieve the ultimate goal of life. Except for an animal killer or one who is…   ",
    },
    {
      image: "blg3",
      position: "right",
      id: "education",
      title: "Diksa or Initiation, what it actually means",
      description:
        "Dīkṣā or initiation actually means to take a vow to chant the holy names of the Lord. This is the main rule; because by dint of His holy name alone can one attain the Supreme Lord. There is no other process prescribed in the scriptures. By chanting His holy names alone can one obtain Kṛṣṇa.…   ",
    },
    {
      image: "blg4",
      position: "left",
      id: "childhood",
      title: "Life of Bhaktivinoda Thakur",
      description:
        "Śrīla Bhaktivinoda Ṭhākura envisioned the global spread of Lord Caitanya’s teachings, believing that the congregational chanting of the Supreme Lord’s divine names could unify diverse theories and religions…   ",
    },
    
  ];

  // const modalData = 
  //   {
  //     title: "Srimad Bhagavatam is Life Saviour",
  //     description:
  //       "Every man should act like this: when he meets a person more qualified than himself, he should be very pleased; when he meets someone less qualified than himself, he should be compassionate toward him; and when he meets someone equal to himself, he should make friendship with him. In this way one is never affected by Generally when we find someone more qualified than ourselves, we become envious of him; when we find someone less qualified, we deride him; and when we find someone equal we become very proud of our activities. These are the causes of all material tribulations. The great sage Nārada therefore advised that a devotee should act perfectly. We are representing Krishna. We should also behave like Krishna wants. By Becoming a friend of everyone. Instead of being envious of a more qualified man, one should be jolly to receive him. Instead of being oppressive to a less qualified man, one should be compassionate toward him just to raise him to the proper standard. And when one meets an equal, instead of being proud of one & own activities before him, one should treat him as a friend. One should also have compassion for the people in general, who are suffering due to forgetfulness of Kṛṣṇa. These important functions will make one happy within this material world. SB 4.8.34 In this verse Narada Muni says, “Every man should act like this.” By such behavior there will be no miseries at all. This world will be urned into vaikuṇṭha, a place with no anxiety. There should be no enviousness. Kāma, krodha, lobha, moha, mada, mātsarya. This enviousness, mātsarya, is one of our six enemies Srimad Bhagavatam is Krishna himself Caitanya-caritāmṛta (madhya 24.318) states that ŚrīmadBhāgavatam is unlimited: kṛṣṇa-tulya bhāgavata — vibhu, sarvāśraya prati-śloke prati-akṣare nānā artha kaya Śrīmad-Bhāgavatam is as great as Krishna, the Supreme Lord and shelter of everything. In each and every verse of Śrīmad- Bhāgavatam and in each and every syllable, there are various meanings. Śrīmad-Bhāgavatam is as good as Krishna. It is not different from Krishna. This is described by Thakur Vrindavan Das in Caitanya-bhāgavata (antya 3.516): premamaya bhāgavata śrī-kṛṣṇera aṅga tahate kahena yata gopya kṛṣṇa-raṅga bhāgavata śrī-kṛṣṇera aṇga — Śrīmad-Bhāgavatam is the body of Krishna. tahate kahena yata gopya kṛṣṇa-raṅga — All confidential, sweet pastimes are described here. Krishna is vibhu, the Supreme Lord, and He is ananta, unlimited. Similarly, Śrīmad-Bhāgavatam is also vibhu and ananta, the unlimited Supreme Lord. If we simply follow that verse by Narada muni The second verse of Bhāgavatam says,dharmaḥ projjhita-kaitavo ‘tra paramo nirmatsarāṇāṁ satāṁ vedyam.Who can understand?what is said in Śrīmad-Bhāgavatam — bhāgavata-dharma-tattva? Transcedental religious principles. Bhāgavata-dharma, Sanatana Dharma, bhakti-dharma, and bhāgavata-sevā-dharma are different names for the proper religious principle.To serve Kṛṣṇa and His devotees is a proper religious principle. Apart from this, everything else is temporary or conditioned dharma, or even an improper religious principle.Devotional service to the Lord is the soul’s eternal occupational duty, and that is why it is called a “proper religious principle.” Bhāgavata-dharma has no contradictions. Conceptions of &quot;your religion&quot; and &quot;my religion&quot; are completely absent from bhāgavata- dharma. Bhāgavata-dharma means following the orders given by the Supreme Lord, Bhagavān, as stated in Bhagavad-gītā: sarva- dharmān parityajya mām ekaṁ śaraṇaṁ vraja [Bg. 18.66]. God is one, and God is for everyone. Therefore everyone must surrender to God. That is the pure conception of religion. Whatever God orders constitutes religion (dharmaṁ tu sākṣād bhagavat-praṇītam [SB 6.3.19]). In bhāgavata-dharma there is no question of & quot; what you believe & quot; and & quot ;what I believe .& quot; Everyone must believe in the Supreme Lord and carry out His orders. Ānukūlyena kṛṣṇānuśīlanam: [Cc. Madhya 19.167]whatever Kṛṣṇa says—whatever God says—should be directly carried out. That isdharma, religion. If one is actually Kṛṣṇa conscious, he cannot have any enemies. Since his only engagement is to induce others to surrender to Kṛṣṇa, or God, how can he have enemies?Ajamila heard the principles of Bhagavata Dharma from the Vishnu Dutas on the death bed. And perfected his life.Only devotees who are not envious at all — paramo nirmatsarāṇām — can understand. Otherwise the Bhāgavata will never manifest at all. This most important point is the purpose for which Srila Prabhupada formed the International Society for Krishna Consciousness. “The Krishna consciousness movement aims at creating an atmosphere of non-envy. Of course, it is not possible for everyone to become Krishna conscious, but the Krishna movement can create an exemplary society wherein there is no envy.” Prabhupada wanted all members to be pure vaiṣṇavas, in the true sense. A vaiṣṇava is nirmatsara, non-envious.What is my situation?In Śaraṇāgati (1.4), Bhaktivinode Thakur, who is considered the Seventh Goswami, has explained our situation very well he said: Sadhus help us understand our situation.I am such a rascal, such an envious person. I always give pain to others and put them in anxiety. I am very selfish. My only concern is for my own happiness, name, fame, adoration and prestige. I am not afraid of committing any sinful activity. dayā-hīna — I am a merciless person. When I see someone becoming more advanced than me, it is very painful. I become envious. sadā-mithya — I speak only lies. Para-duḥkha sukha-kara When I see someone suffering, I become jolly.There are unlimited material desires in my heart. I get angry on the slightest pretext. dambha-parāyaṇa, I am an extremely proud, puffed-up fellow. “I am great! Is there anyone greater than I?” In Kali-yuga, the most degraded age, pride is the measuring rod between people. One man thinks, “I am great!” When another man hears that he will say, “What? You are great? I am great!” Then fighting begins. Two people quarrel, two groups quarrel, two states, two nations. This is due to dambha — pride. I am always puffed-up and proud, intoxicated with the desire for material enjoyment. I am a great materialist who is hiṁsā-garva, always envious and proud. These qualities are my ornaments, vibhūṣaṇa.I am a lazy fellow who sleeps too much and never does any good work. I am always enthusiastic to perform evil, abominable acts for my own prestige. Sāṭhya-ācaraṇa, I am duplicitous. Lobha-hata sadā kāmī, there is so much lust in my heart. e hena durjana I am a most wicked person, saj-jana- varjita,rejected by elevated souls. My dealings are crooked and duplicitous. I am always a great offender. I have rejected auspicious behavior and am covered with so many unwanted things. Thus, I am always afflicted by the threefold miseries of the material world. This is the statement of Narada Muni, “Every man should act like this: when he meets a person more qualified than himself, he should be very pleased; when he meets someone less qualified than himself, he should be compassionate toward him; and when he meets someone equal to himself, he should make friendshipwith him.”Otherwise, he’ll suffer. “In this way one is never affected by the threefold miseries of this world.” This is the statement of sādhu- śāstra-mahājanas.  ",
  //   }
  
  
  const [modalOpen, setModalOpen] = useState(false);


  const openModal = (item) => {
    
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <main className="w-full">
      <section className="min-h-[100vh] bg-gradient-to-r from-[#e9e6d9] to-[#ceecf5] w-full ">
        <HeroSection />
        <section className="bg-gradient-to-r from-[#e9e6d9] to-[#ceecf5] w-full">
          <section className="max-w-6xl mx-auto mt-20 flex justify-center items-center p-6 md:p-10 flex-col">
            {data.map((item, index) => {
              return (
                <ImageDesc
                  key={index}
                  id={item.id}
                  position={item.position}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                
                />
              );
            })}
          </section>
        </section>
       </section>
       {modalOpen && selectedItem && (
      <Modal
    title={modalData.title}
    description={modalData.description}
    closeModal={closeModal}
  />
)}
    </main>
  );
};

export default Blog;
