import React from 'react';
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import { useState , useEffect } from 'react';
const modalData =[
    {
      title: "Srimad Bhagavatam is Life Saviour",
      image:"modalimg1",
      description:"Every man should act like this: when he meets a person more qualified than himself, he should be very pleased; when he meets someone less qualified than himself, he should be compassionate toward him; and when he meets someone equal to himself, he should make friendship with him. In this way one is never affected by Generally when we find someone more qualified than ourselves, we become envious of him; when we find someone less qualified, we deride him; and when we find someone equal we become very proud of our activities. These are the causes of all material tribulations. The great sage Nārada therefore advised that a devotee should act perfectly. We are representing Krishna. We should also behave like Krishna wants. By Becoming a friend of everyone. Instead of being envious of a more qualified man, one should be jolly to receive him. Instead of being oppressive to a less qualified man, one should be compassionate toward him just to raise him to the proper standard. And when one meets an equal, instead of being proud of one & own activities before him, one should treat him as a friend. One should also have compassion for the people in general, who are suffering due to forgetfulness of Kṛṣṇa. These important functions will make one happy within this material world. SB 4.8.34 In this verse Narada Muni says, “Every man should act like this.” By such behavior there will be no miseries at all. This world will be urned into vaikuṇṭha, a place with no anxiety. There should be no enviousness. Kāma, krodha, lobha, moha, mada, mātsarya. This enviousness, mātsarya, is one of our six enemies Srimad Bhagavatam is Krishna himself Caitanya-caritāmṛta (madhya 24.318) states that ŚrīmadBhāgavatam is unlimited: kṛṣṇa-tulya bhāgavata — vibhu, sarvāśraya prati-śloke prati-akṣare nānā artha kaya Śrīmad-Bhāgavatam is as great as Krishna, the Supreme Lord and shelter of everything. In each and every verse of Śrīmad- Bhāgavatam and in each and every syllable, there are various meanings. Śrīmad-Bhāgavatam is as good as Krishna. It is not different from Krishna. This is described by Thakur Vrindavan Das in Caitanya-bhāgavata (antya 3.516): premamaya bhāgavata śrī-kṛṣṇera aṅga tahate kahena yata gopya kṛṣṇa-raṅga bhāgavata śrī-kṛṣṇera aṇga — Śrīmad-Bhāgavatam is the body of Krishna. tahate kahena yata gopya kṛṣṇa-raṅga — All confidential, sweet pastimes are described here. Krishna is vibhu, the Supreme Lord, and He is ananta, unlimited. Similarly, Śrīmad-Bhāgavatam is also vibhu and ananta, the unlimited Supreme Lord. If we simply follow that verse by Narada muni The second verse of Bhāgavatam says,dharmaḥ projjhita-kaitavo ‘tra paramo nirmatsarāṇāṁ satāṁ vedyam.Who can understand?what is said in Śrīmad-Bhāgavatam — bhāgavata-dharma-tattva? Transcedental religious principles. Bhāgavata-dharma, Sanatana Dharma, bhakti-dharma, and bhāgavata-sevā-dharma are different names for the proper religious principle.To serve Kṛṣṇa and His devotees is a proper religious principle. Apart from this, everything else is temporary or conditioned dharma, or even an improper religious principle.Devotional service to the Lord is the soul’s eternal occupational duty, and that is why it is called a “proper religious principle.” Bhāgavata-dharma has no contradictions. Conceptions of &quot;your religion&quot; and &quot;my religion&quot; are completely absent from bhāgavata- dharma. Bhāgavata-dharma means following the orders given by the Supreme Lord, Bhagavān, as stated in Bhagavad-gītā: sarva- dharmān parityajya mām ekaṁ śaraṇaṁ vraja [Bg. 18.66]. God is one, and God is for everyone. Therefore everyone must surrender to God. That is the pure conception of religion. Whatever God orders constitutes religion (dharmaṁ tu sākṣād bhagavat-praṇītam [SB 6.3.19]). In bhāgavata-dharma there is no question of & quot; what you believe & quot; and & quot ;what I believe .& quot; Everyone must believe in the Supreme Lord and carry out His orders. Ānukūlyena kṛṣṇānuśīlanam: [Cc. Madhya 19.167]whatever Kṛṣṇa says—whatever God says—should be directly carried out. That isdharma, religion. If one is actually Kṛṣṇa conscious, he cannot have any enemies. Since his only engagement is to induce others to surrender to Kṛṣṇa, or God, how can he have enemies?Ajamila heard the principles of Bhagavata Dharma from the Vishnu Dutas on the death bed. And perfected his life.Only devotees who are not envious at all — paramo nirmatsarāṇām — can understand. Otherwise the Bhāgavata will never manifest at all. This most important point is the purpose for which Srila Prabhupada formed the International Society for Krishna Consciousness. “The Krishna consciousness movement aims at creating an atmosphere of non-envy. Of course, it is not possible for everyone to become Krishna conscious, but the Krishna movement can create an exemplary society wherein there is no envy.” Prabhupada wanted all members to be pure vaiṣṇavas, in the true sense. A vaiṣṇava is nirmatsara, non-envious.What is my situation?In Śaraṇāgati (1.4), Bhaktivinode Thakur, who is considered the Seventh Goswami, has explained our situation very well he said: Sadhus help us understand our situation.I am such a rascal, such an envious person. I always give pain to others and put them in anxiety. I am very selfish. My only concern is for my own happiness, name, fame, adoration and prestige. I am not afraid of committing any sinful activity. dayā-hīna — I am a merciless person. When I see someone becoming more advanced than me, it is very painful. I become envious. sadā-mithya — I speak only lies. Para-duḥkha sukha-kara When I see someone suffering, I become jolly.There are unlimited material desires in my heart. I get angry on the slightest pretext. dambha-parāyaṇa, I am an extremely proud, puffed-up fellow. “I am great! Is there anyone greater than I?” In Kali-yuga, the most degraded age, pride is the measuring rod between people. One man thinks, “I am great!” When another man hears that he will say, “What? You are great? I am great!” Then fighting begins. Two people quarrel, two groups quarrel, two states, two nations. This is due to dambha — pride. I am always puffed-up and proud, intoxicated with the desire for material enjoyment. I am a great materialist who is hiṁsā-garva, always envious and proud. These qualities are my ornaments, vibhūṣaṇa.I am a lazy fellow who sleeps too much and never does any good work. I am always enthusiastic to perform evil, abominable acts for my own prestige. Sāṭhya-ācaraṇa, I am duplicitous. Lobha-hata sadā kāmī, there is so much lust in my heart. e hena durjana I am a most wicked person, saj-jana- varjita,rejected by elevated souls. My dealings are crooked and duplicitous. I am always a great offender. I have rejected auspicious behavior and am covered with so many unwanted things. Thus, I am always afflicted by the threefold miseries of the material world. This is the statement of Narada Muni, “Every man should act like this: when he meets a person more qualified than himself, he should be very pleased; when he meets someone less qualified than himself, he should be compassionate toward him; and when he meets someone equal to himself, he should make friendshipwith him.”Otherwise, he’ll suffer. “In this way one is never affected by the threefold miseries of this world.” This is the statement of sādhu- śāstra-mahājanas.  ",
    },
    {
      title: "Understanding the Tenth Canto Chronology",
      image:"modalimg2",
      description:"When Śukadeva Gosvāmī finished describing the dynasty of Yadu, as well as the dynasties of the moon-god and sun-god, Mahārāja Parīkṣit requested him to describe Lord Kṛṣṇa, who appeared with Baladeva in the Yadu dynasty, and how Kṛṣṇa performed His activities within this world. Kṛṣṇa is transcendental, the King said, and therefore to understand His activities is the occupation of liberated persons. Hearing of kṛṣṇa-līlā is the boat by which to achieve the ultimate goal of life. Except for an animal killer or one who is following a policy of suicide, every intelligent person must strive to understand Kṛṣṇa and His activities. Kṛṣṇa was the only worshipable Deity for the Pāṇḍavas. When Mahārāja Parīkṣit was in the womb of his mother, Uttarā, Kṛṣṇa saved him from the attack of the brahma-śastra. Now Mahārāja Parīkṣit asked Śukadeva Gosvāmī how His Lordship Baladeva, the son of Rohiṇī, could have appeared in the womb of Devakī. Why did Kṛṣṇa transfer Himself from Mathurā to Vṛndāvana, King Parīkṣit asked, and how did He live there with His family members? What did Kṛṣṇa do in Mathurā and Vṛndāvana, and why did He kill His maternal uncle Kaṁsa? For how many years did Kṛṣṇa reside in Dvārakā, and how many queens did He have? Mahārāja Parīkṣit asked Śukadeva Gosvāmī all these questions. He also requested Śukadeva Gosvāmī to describe other activities of Kṛṣṇa about which he could not inquire. When Śukadeva Gosvāmī began to speak about Kṛṣṇa consciousness, Mahārāja Parīkṣit forgot the fatigue brought about by his fasting. Enthusiastic to describe Kṛṣṇa, Śukadeva Gosvāmī said, “Like the waters of the Ganges, descriptions of the activities of Kṛṣṇa can purify the entire universe. The speaker, the inquirer and the audience all become purified. Mother earth assumed the shape of a cow and approached Lord Brahma for relief. Brahma, accompanied by Lord Shiva and other demigods, offered prayers to please Lord Vishnu, who informed Brahma that He would appear on the surface of the earth to mitigate the burden created by the demons. After marrying Devaki, Vasudeva was returning home with her on a chariot driven by Kamsa, her brother. When Kamsa heard an ominous voice, he was ready to kill Devaki, but Vasudeva diplomatically began to instruct him not to. Because Kamsa was not satisfied with Vasudeva’s instructions, Vasudeva devised a plan. He offered to bring Kasa all of Devak’s children so that Kamsa could kill them, but Kasa refused and instead arrested and imprisoned both Devak and Vasudeva and killed six of their sons, one after another. Krsna has threefold pastimes – the Vraja-lll, Mthura-lll and Dvrak-lll. In the Tenth Canto of rmad-Bhgavatam there are ninety chapters which describe all these lilas, including Krsna’s dancing with the gops, known as the rasa-lila. Kamsa, under the protection of his father-in-law Jarasandha, oppressed the members of the Yadu dynasty. Some of them sought shelter with Kamsa, as nominal friends.After Kamsa killed the six sons of Devaki, Anantadeva entered Devaki’s womb and was transferred to the womb of Rohini by the manipulation of Yoga-maya. Baladeva, Sankarsana, was transferred from the womb of Devaki to the womb of Rohini following the orders of the Supreme Personality of Godhead. After Yoga-maya transferred the seventh child of Devaki to Rohini’s womb, the Supreme Personality of Godhead appeared within Vasudeva’s heart and transferred Himself into Devaki’s heart. The demigods came to offer prayers to the Lord, and they explained that the Supreme Personality of Godhead descends because the spiritual soul is more important than the gross body, and the Supersoul, Paramatma, is still more important than the soul. the Supreme Personality of Godhead, Kṛṣṇa, Hari in His original form, appeared as Viṣṇu so that His father and mother could understand that their son was the Supreme Personality of Godhead. Because they were afraid of Kaṁsa, when the Lord appeared as an ordinary child they took Him to Gokula, the home of Nanda Mahārāja.",
    },
    {
      title: "Diksa or Initiation, what it actually means",
      image:"modalimg3",
      description:"Dīkṣā or initiation actually means to take a vow to chant the holy names of the Lord. This is the main rule; because by dint of His holy name alone can one attain the Supreme Lord. There is no other process prescribed in the scriptures. By chanting His holy names alone can one obtain Kṛṣṇa. Therefore this initiation ceremony is known as Harināma-initiation.Harināma-initiation means, a devotee takes a vow to chant the holy names of the Supreme Lord. Devotees to be initiated are alarmed that when they render devotional service unto the Supreme Lord especially by chanting His holy names, all their sins in the past are destroyed. But due to being unaware of proper knowledge about the offenses to be avoided while chanting, they commit offenses. One should know what is the nature of these offenses and avoid them. The word offense which in Sanskrit is known as ‘aparādha’ can be split into two parts viz. ‘apa’ and ‘rādha’. ‘apa’ means negation of ‘to please or worship someone’ and ‘rādha’ means to ‘to please or worship’. Therefore the word ‘aparādha’ means that which creates hindrance in getting benefitted. For example, electric current flows through a metal wire. If that metal wire is insulated with plastic, then that plastic insulation is said to be creating ‘aparādha’ of the electric current flowing through the metal wire. If someone touches such plastic insulated metal wire, he won’t feel any electric shock. Scriptures instruct us that there is a possibility to commit ten offenses while chanting the holy names of the Lord. One should carefully try to avoid them. If one chants holy names offenselesely, he can surely obtain Kṛṣṇa-Prema (love of Godhead). bahu janma kare yadi śravaṇa, kīrtana tabu ta’ nā pāya kṛṣṇa-pade prema-dhana (Śrī Caitanya Caritāmṛta, Ādi 8.16) If one is infested with the ten offenses in the chanting of the Hare Kṛṣṇa mahā-mantra, despite his endeavor to chant the holy name for many births, he will not get the love of Godhead that is the ultimate goal of this chanting.",
    },
    {
      title: "Life of Bhaktivinoda Thakur",
      image:"modalimg4",
      description:"Lalitā Prasad Ṭhākura, the son of Śrīla Bhaktivinoda Ṭhākura, shared a significant incident involving Sir William Duke in his biographical notes. In 1908, just three months before Śrīla Bhaktivinoda Ṭhākura embraced the life of a paramahaṁsa, one of his sons, who worked at the Writers’ Building in Calcutta, informed his father that Sir William Duke, the Chief Secretary of Bengal, was in town. Śrīla Bhaktivinoda Ṭhākura had previously worked alongside Sir William when he was a magistrate. The following day, Śrīla Bhaktivinoda Ṭhākura arranged a meeting with Sir William and went to the Writers’ Building.Upon meeting, Sir William greeted him with great respect and acknowledged, “My dear Kedaranātha, when you served as District Magistrate, I had considered removing you from your post. I believed that if there were more individuals as capable as you in Bengal, the British rule might be challenged.” Sir William had been deeply impressed by the wisdom displayed in Śrīla Bhaktivinoda Ṭhākura’s court judgments. He had even visited Śrīla Bhaktivinoda Ṭhākura’s home on several occasions and observed his intense dedication to writing “Śrī Caitanya-Śikṣāmṛta.” During these visits, Śrīla Bhaktivinoda Ṭhākura’s wife would serve him a meal consisting of purī, lucī, and sweets. Sir William was amazed by Śrīla Bhaktivinoda Ṭhākura’s unwavering commitment to his work.Sir William Duke confessed that he had once perceived Śrīla Bhaktivinoda Ṭhākura’s remarkable abilities as a potential threat to British authority. However, he now sought forgiveness, as per English custom, where individuals seek forgiveness from those they have wronged in their old age to find peace. In response, Śrīla Bhaktivinoda Ṭhākura graciously accepted Sir William’s apology, expressing, “I have always considered you a good friend and well-wisher.”This encounter highlighted the profound impact of Śrīla Bhaktivinoda Ṭhākura’s wisdom and character on even those who had once viewed him as a potential adversary.Acceptance of Bābājī-veṣa: In another significant episode, Śrīla Bhaktivinoda Ṭhākura transitioned from household life to the renounced order under the guidance of Śrīla Gaura Kiśora dāsa Bābājī Mahārāja. In 1908, Śrīla Bhaktivinoda Ṭhākura followed Bābājī Mahārāja from his home in Godruma-dvīpa to the boat ghāṭa, where Bābājī would cross the Ganges to reach Navadvīpa. During this journey, Śrīla Bhaktivinoda Ṭhākura persistently requested initiation into the bābājī order from Bābājī Mahārāja.However, Gaura Kiśora dāsa Bābājī humbly considered Śrīla Bhaktivinoda Ṭhākura his spiritual master and believed himself to be unworthy to initiate him into the bābājī order. Consequently, he initially declined Śrīla Bhaktivinoda Ṭhākura’s request. But realizing Śrīla Bhaktivinoda Ṭhākura’s determination, Bābājī Mahārāja went into hiding by sitting on the veranda of a prostitute’s house in Navadvīpa, a place he believed Śrīla Bhaktivinoda Ṭhākura would not visit.Śrīla Bhaktivinoda Ṭhākura, unable to find Bābājī Mahārāja, sensed his discomfort and returned home to Godruma. When Bābājī Mahārāja felt it was safe, he emerged from hiding and laughed heartily in the Rādhā-ramaṇa Gardens. When asked why he was laughing, he explained that he had successfully eluded Śrīla Bhaktivinoda Ṭhākura by hiding in the prostitute’s house.A few days later, Śrīla Bhaktivinoda Ṭhākura sent one of his sons to Navadvīpa to invite Bābājī Mahārāja to Svānanda-sukhada-kuñja. Bābājī Mahārāja agreed to come, and after a brief stay, he consented to initiate Śrīla Bhaktivinoda Ṭhākura into the bābājī order. In the presence of Bābājī Mahārāja, Śrīla Bhaktivinoda Ṭhākura donned the traditional attire of a bābājī, including the old loin cloth and begging apron of Śrīla Jagannātha dāsa Bābājī, his śikṣā-guru who had departed from the world earlier. With Bābājī Mahārāja as the witness and guide, Śrīla Bhaktivinoda Ṭhākura formally became a bābājī, following the example set by Śrīla Sanātana Gosvāmī, who had taken renunciation in the presence of Lord Caitanya by adopting the attire of Tapan Miśra. This initiation and transformation marked a significant milestone in Śrīla Bhaktivinoda Ṭhākura’s spiritual journey. He continued his devotional activities, splitting his time between Godruma-dvīpa and Calcutta’s Bhakti Bhavan. After embracing the renounced order of life, Śrīla Bhaktivinoda Ṭhākura accepted disciples, among them Kṛṣṇa dāsa Bābājī, who continued to serve him as he had done in Jagannātha Purī. Driven by a profound longing to be completely immersed in the spiritual realm, in the year 1910, Śrīla Bhaktivinoda Ṭhākura secluded himself within Bhakti Bhavan, where he could uninterruptedly engage in the divine service of Śrī Śrī Rādhā and Kṛṣṇa. He feigned paralysis before the common people, entering a state of deep samādhi (spiritual trance). On June 23, 1914, as the sun began its southern course, the Ṭhākura departed from this world. Interestingly, this date coincided with the day when Gadādhara Paṇḍita, the incarnation of Śrīmātī Rādhārāṇī, had left this world approximately 450 years earlier. At precisely noon, Śrīla Bhaktivinoda Ṭhākura transcended to the eternal pastimes of the Lord, far beyond the perception of ordinary conditioned souls. The samādhi ceremony for Śrīla Bhaktivinoda Ṭhākura was postponed until the sun commenced its northern course. During this time, his final remains, in the form of ashes, were respectfully taken from Bhakti Bhavan to his residence in Godruma-dvīpa. There, they were placed in a silver urn and interred amidst a grand kīrtana and festival organized by his disciples and well-wishers in his honor. Hundreds of people participated, and everyone felt the direct presence of Śrīla Bhaktivinoda Ṭhākura. Truly, the great stanza composed by Śrīla Bhaktivinoda Ṭhākura in praise of Śrīla Haridāsa Ṭhākura can aptly be applied to him.",
    }
  ]
    const Modal = ({ title, closeModal }) => {
      const [modalHeight, setModalHeight] = useState(0);
      useEffect(() => {
        const windowHeight = window.innerHeight;
        const modalMaxHeight = windowHeight - 100; 
        setModalHeight(modalMaxHeight);
      }, []);
    
      const filteredData = modalData.find(dataItem => dataItem.title === title);

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
      {filteredData && (
        <div className="bg-white p-8 rounded-lg max-w-sm mt-5 relative" style={{ maxHeight: 600 }}>
          <button onClick={closeModal} className="absolute top-0 left-0 bg-white text-[#22668D] px-4 py-2 rounded">
            <FaArrowLeft />
          </button>
          <Image
            src={require(`../../../public/assets/${filteredData.image}.jpg`)}
            alt="My Photo"
            className="w-full md:w-[400px] h-[180px] relative z-20 rounded-md mb-3"
          />
          <h2 className="text-2xl font-semibold text-[#22668D] mb-4">{filteredData.title}</h2>
          <div className="overflow-y-scroll max-h-[50px]" style={{ maxHeight: 200 }}>
            <p className="text-[#000000] text-justify">{filteredData.description}</p>
          </div>
        </div>
      )}
    </div>
  );
    };
    
    export default Modal;
