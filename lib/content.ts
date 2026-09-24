// Shared bilingual content consumed by all 5 themes.
// Same content, different design — that's the pitch.

export type Lang = "en" | "hi";

export const services = [
  { icon: "Stethoscope", en: { title: "General Medicine", desc: "Complete care for fever, BP, diabetes, thyroid and everyday illness — for every member of your family." }, hi: { title: "जनरल मेडिसिन", desc: "बुखार, बीपी, डायबिटीज़, थायरॉइड और रोज़मर्रा की बीमारियों का संपूर्ण इलाज — परिवार के हर सदस्य के लिए।" } },
  { icon: "HeartPulse", en: { title: "Gynecology & Maternity", desc: "Pregnancy care, safe delivery guidance, PCOD treatment and women's health checkups by senior specialists." }, hi: { title: "स्त्री रोग एवं प्रसूति", desc: "गर्भावस्था देखभाल, सुरक्षित प्रसव मार्गदर्शन, PCOD उपचार और महिला स्वास्थ्य जांच — वरिष्ठ विशेषज्ञों द्वारा।" } },
  { icon: "Baby", en: { title: "Child Care (Pediatrics)", desc: "Newborn care, growth monitoring, child nutrition and treatment of childhood illnesses with a gentle touch." }, hi: { title: "शिशु रोग (बाल चिकित्सा)", desc: "नवजात देखभाल, विकास की निगरानी, बाल पोषण और बच्चों की बीमारियों का कोमल इलाज।" } },
  { icon: "Sparkles", en: { title: "Skin & Hair (Dermatology)", desc: "Acne, pigmentation, hair fall and allergy treatment with modern, evidence-based dermatology." }, hi: { title: "त्वचा एवं बाल (डर्मेटोलॉजी)", desc: "मुंहासे, पिगमेंटेशन, बाल झड़ना और एलर्जी का आधुनिक, प्रमाण-आधारित इलाज।" } },
  { icon: "FlaskConical", en: { title: "Pathology Lab", desc: "In-house NABL-standard lab — blood tests, sugar, thyroid, full body checkup with same-day reports." }, hi: { title: "पैथोलॉजी लैब", desc: "इन-हाउस NABL-स्तर लैब — ब्लड टेस्ट, शुगर, थायरॉइड, फुल बॉडी चेकअप, उसी दिन रिपोर्ट।" } },
  { icon: "Syringe", en: { title: "Vaccination", desc: "Complete vaccination for newborns, children and adults — as per the national immunization schedule." }, hi: { title: "टीकाकरण", desc: "नवजात, बच्चों और वयस्कों के लिए संपूर्ण टीकाकरण — राष्ट्रीय टीकाकरण कार्यक्रम के अनुसार।" } },
  { icon: "Activity", en: { title: "Physiotherapy", desc: "Back pain, joint pain, post-surgery recovery and sports injury rehabilitation by certified physiotherapists." }, hi: { title: "फिजियोथेरेपी", desc: "कमर दर्द, जोड़ों का दर्द, सर्जरी के बाद रिकवरी और खेल चोटों का पुनर्वास — प्रमाणित फिजियोथेरेपिस्ट द्वारा।" } },
  { icon: "ShieldCheck", en: { title: "Health Checkup Packages", desc: "Preventive full-body packages for men, women and senior citizens — starting at ₹999." }, hi: { title: "हेल्थ चेकअप पैकेज", desc: "पुरुषों, महिलाओं और वरिष्ठ नागरिकों के लिए प्रिवेंटिव फुल-बॉडी पैकेज — ₹999 से शुरू।" } },
];

export const doctors = [
  { id: "dr-anil", photo: 0, en: { name: "Dr. Anil Sharma", spec: "General Physician", qual: "MBBS, MD (Internal Medicine)", exp: "18+ years experience", bio: "Senior physician and clinic director. Known across Indore for accurate diagnosis and honest, minimal-medicine treatment. Special interest in diabetes and hypertension management." }, hi: { name: "डॉ. अनिल शर्मा", spec: "जनरल फिजिशियन", qual: "MBBS, MD (इंटरनल मेडिसिन)", exp: "18+ वर्ष का अनुभव", bio: "वरिष्ठ चिकित्सक एवं क्लिनिक निदेशक। सटीक निदान और ईमानदार, कम-दवा इलाज के लिए पूरे इंदौर में प्रसिद्ध। डायबिटीज़ और बीपी प्रबंधन में विशेष रुचि।" }, slots: "Mon–Sat · 9 AM – 2 PM" },
  { id: "dr-priya", photo: 1, en: { name: "Dr. Priya Verma", spec: "Gynecologist & Obstetrician", qual: "MBBS, MS (Obs & Gyn)", exp: "14+ years experience", bio: "Trusted by thousands of families for pregnancy care and women's health. Former consultant at a leading Indore maternity hospital." }, hi: { name: "डॉ. प्रिया वर्मा", spec: "स्त्री रोग विशेषज्ञ", qual: "MBBS, MS (स्त्री एवं प्रसूति रोग)", exp: "14+ वर्ष का अनुभव", bio: "गर्भावस्था देखभाल और महिला स्वास्थ्य के लिए हज़ारों परिवारों की भरोसेमंद डॉक्टर। इंदौर के प्रमुख मैटरनिटी हॉस्पिटल की पूर्व कंसल्टेंट।" }, slots: "Mon–Sat · 11 AM – 2 PM, 6 – 9 PM" },
  { id: "dr-rohan", photo: 2, en: { name: "Dr. Rohan Gupta", spec: "Pediatrician", qual: "MBBS, DCH", exp: "11+ years experience", bio: "Child specialist loved by kids and parents alike. Expert in newborn care, nutrition and childhood asthma & allergy." }, hi: { name: "डॉ. रोहन गुप्ता", spec: "शिशु रोग विशेषज्ञ", qual: "MBBS, DCH", exp: "11+ वर्ष का अनुभव", bio: "बच्चों और माता-पिता दोनों के प्रिय बाल रोग विशेषज्ञ। नवजात देखभाल, पोषण और बच्चों की अस्थमा-एलर्जी के विशेषज्ञ।" }, slots: "Mon–Sat · 10 AM – 1 PM, 5 – 8 PM" },
  { id: "dr-sneha", photo: 3, en: { name: "Dr. Sneha Jain", spec: "Dermatologist", qual: "MBBS, MD (Dermatology)", exp: "9+ years experience", bio: "Skin, hair and cosmetic dermatology specialist. Practical treatment plans without unnecessary procedures." }, hi: { name: "डॉ. स्नेहा जैन", spec: "त्वचा रोग विशेषज्ञ", qual: "MBBS, MD (डर्मेटोलॉजी)", exp: "9+ वर्ष का अनुभव", bio: "त्वचा, बाल एवं कॉस्मेटिक डर्मेटोलॉजी विशेषज्ञ। बिना अनावश्यक प्रोसीजर के व्यावहारिक इलाज।" }, slots: "Tue, Thu, Sat · 5 – 9 PM" },
];

export const reviews = [
  { name: "Ramesh Patidar", area: "Vijay Nagar, Indore", stars: 5, en: "Dr. Anil Sharma is the most honest doctor I have met. No unnecessary tests, no extra medicines. My diabetes is fully under control now.", hi: "डॉ. अनिल शर्मा सबसे ईमानदार डॉक्टर हैं। कोई फालतू टेस्ट नहीं, कोई ज़्यादा दवा नहीं। मेरी डायबिटीज़ अब पूरी तरह कंट्रोल में है।" },
  { name: "Pooja Malviya", area: "Sudama Nagar, Indore", stars: 5, en: "My complete pregnancy was handled by Dr. Priya ma'am. She explains everything so patiently. Blessed with a healthy baby girl!", hi: "मेरी पूरी प्रेगनेंसी डॉ. प्रिया मैम ने संभाली। वे हर बात इतने धैर्य से समझाती हैं। स्वस्थ बेटी का जन्म हुआ!" },
  { name: "Amit Choudhary", area: "Palasia, Indore", stars: 5, en: "Booked appointment on WhatsApp, reached, and was seen within 10 minutes. No long waiting like big hospitals. Very clean clinic.", hi: "WhatsApp पर अपॉइंटमेंट बुक किया, पहुँचा, और 10 मिनट में नंबर आ गया। बड़े हॉस्पिटल जैसी लंबी लाइन नहीं। बहुत साफ क्लिनिक।" },
  { name: "Sunita Rathore", area: "Bhawarkua, Indore", stars: 4, en: "Dr. Rohan sir is wonderful with kids. My son actually asks to visit the doctor now! Lab reports came the same evening.", hi: "डॉ. रोहन सर बच्चों के साथ कमाल हैं। मेरा बेटा अब खुद डॉक्टर के पास जाने को कहता है! लैब रिपोर्ट उसी शाम मिल गई।" },
  { name: "Farhan Khan", area: "Khajrana, Indore", stars: 5, en: "Skin treatment by Dr. Sneha worked when 3 other clinics failed. Reasonable fees, real results.", hi: "जहाँ 3 क्लिनिक फेल हुए, वहाँ डॉ. स्नेहा का इलाज काम कर गया। फीस वाजिब, रिज़ल्ट असली।" },
  { name: "Kavita Sharma", area: "Rau, Indore", stars: 5, en: "Full body checkup package at ₹999 was excellent value. The staff is polite and reports were explained properly.", hi: "₹999 का फुल बॉडी चेकअप पैकेज बहुत बढ़िया था। स्टाफ विनम्र है और रिपोर्ट अच्छे से समझाई गई।" },
];

export const faqs = [
  { en: { q: "Do I need an appointment or can I walk in?", a: "Walk-ins are welcome, but patients with appointments are seen first. Book free on WhatsApp in 30 seconds to avoid waiting." }, hi: { q: "क्या अपॉइंटमेंट ज़रूरी है या सीधे आ सकते हैं?", a: "आप सीधे भी आ सकते हैं, लेकिन अपॉइंटमेंट वाले मरीज़ों को पहले देखा जाता है। इंतज़ार से बचने के लिए WhatsApp पर 30 सेकंड में मुफ़्त बुक करें।" } },
  { en: { q: "What are the consultation fees?", a: "General consultation starts at ₹300. Specialist consultation is ₹500. Follow-up within 7 days is free." }, hi: { q: "कंसल्टेशन फीस कितनी है?", a: "जनरल कंसल्टेशन ₹300 से शुरू। स्पेशलिस्ट कंसल्टेशन ₹500। 7 दिन के अंदर फॉलो-अप मुफ़्त।" } },
  { en: { q: "Is the lab inside the clinic?", a: "Yes — our in-house pathology lab does blood tests, sugar, thyroid and full-body panels. Most reports are ready the same day on WhatsApp." }, hi: { q: "क्या लैब क्लिनिक के अंदर ही है?", a: "हाँ — हमारी इन-हाउस पैथोलॉजी लैब में ब्लड टेस्ट, शुगर, थायरॉइड और फुल-बॉडी जांच होती है। ज़्यादातर रिपोर्ट उसी दिन WhatsApp पर मिल जाती हैं।" } },
  { en: { q: "Do you accept insurance / Ayushman card?", a: "We assist with insurance reimbursement paperwork for consultations and diagnostics. Please carry your policy details or card." }, hi: { q: "क्या इंश्योरेंस / आयुष्मान कार्ड चलता है?", a: "कंसल्टेशन और जांच के लिए हम इंश्योरेंस रीइम्बर्समेंट के कागज़ात में मदद करते हैं। कृपया अपनी पॉलिसी या कार्ड साथ लाएँ।" } },
  { en: { q: "Is parking available?", a: "Yes, free two-wheeler and car parking is available right in front of the clinic." }, hi: { q: "क्या पार्किंग उपलब्ध है?", a: "हाँ, क्लिनिक के ठीक सामने दोपहिया और कार की मुफ़्त पार्किंग उपलब्ध है।" } },
  { en: { q: "What about emergencies at night?", a: "For emergencies, call our 24×7 helpline. Dr. Sharma's team guides you immediately and refers to partner hospitals when needed." }, hi: { q: "रात में इमरजेंसी हो तो?", a: "इमरजेंसी में हमारी 24×7 हेल्पलाइन पर कॉल करें। डॉ. शर्मा की टीम तुरंत मार्गदर्शन देती है और ज़रूरत पर पार्टनर हॉस्पिटल रेफर करती है।" } },
];

export const stats = [
  { value: "50,000+", en: "Happy Patients", hi: "संतुष्ट मरीज़" },
  { value: "15+", en: "Years of Trust", hi: "वर्षों का भरोसा" },
  { value: "4", en: "Senior Specialists", hi: "वरिष्ठ विशेषज्ञ" },
  { value: "4.9★", en: "Google Rating", hi: "गूगल रेटिंग" },
];

export const whyUs = [
  { icon: "BadgeCheck", en: { title: "Experienced Specialists", desc: "MD/MS qualified doctors with 9–18 years of experience — not fresh trainees." }, hi: { title: "अनुभवी विशेषज्ञ", desc: "9–18 वर्ष के अनुभव वाले MD/MS डॉक्टर — कोई नए ट्रेनी नहीं।" } },
  { icon: "Clock", en: { title: "No Long Waiting", desc: "Appointment patients are seen within 15 minutes. Your time is respected." }, hi: { title: "लंबा इंतज़ार नहीं", desc: "अपॉइंटमेंट वाले मरीज़ 15 मिनट में देखे जाते हैं। आपके समय की कद्र।" } },
  { icon: "IndianRupee", en: { title: "Honest, Affordable Care", desc: "Transparent fees, no unnecessary tests or medicines. Free follow-up within 7 days." }, hi: { title: "ईमानदार, किफ़ायती इलाज", desc: "पारदर्शी फीस, कोई फालतू टेस्ट या दवा नहीं। 7 दिन में फॉलो-अप मुफ़्त।" } },
  { icon: "FlaskConical", en: { title: "Everything Under One Roof", desc: "Consultation, lab tests, vaccination and physiotherapy — all in one visit." }, hi: { title: "सब कुछ एक ही छत के नीचे", desc: "कंसल्टेशन, लैब टेस्ट, टीकाकरण और फिजियोथेरेपी — एक ही विज़िट में।" } },
];

export const ui = {
  en: {
    nav: { home: "Home", about: "About Us", services: "Services", doctors: "Our Doctors", contact: "Contact & Booking", book: "Book Appointment" },
    hero: {
      badge: "Trusted in Indore since 2010",
      title: "Your Family's Health,",
      titleAccent: "In Caring Hands",
      sub: "Experienced specialists, honest treatment and same-day lab reports — right here in Vijay Nagar, Indore. Book your appointment on WhatsApp in 30 seconds.",
      cta1: "Book Appointment",
      cta2: "Call Now",
      open: "Open Now · 9 AM – 9 PM",
    },
    sections: {
      servicesTitle: "Our Services",
      servicesSub: "Complete healthcare for your whole family, under one roof.",
      doctorsTitle: "Meet Our Doctors",
      doctorsSub: "Senior specialists you can trust with your family's health.",
      whyTitle: "Why Families Choose Us",
      whySub: "15 years, 50,000+ patients, one promise — honest care.",
      reviewsTitle: "What Patients Say",
      reviewsSub: "Real reviews from families across Indore.",
      faqTitle: "Frequently Asked Questions",
      faqSub: "Everything you need to know before your visit.",
      galleryTitle: "Inside Our Clinic",
      gallerySub: "A clean, modern and comfortable space for your care.",
      visitTitle: "Visit Us",
      visitSub: "Easy to find, easy to park — in the heart of Vijay Nagar.",
      ctaTitle: "Feeling unwell? Don't wait.",
      ctaSub: "Book your appointment now — it takes 30 seconds on WhatsApp.",
    },
    booking: {
      title: "Book Your Appointment",
      sub: "Fill this form — your appointment request goes directly to our WhatsApp. We confirm within 15 minutes.",
      name: "Your Name", namePh: "e.g. Ramesh Patidar",
      phone: "Mobile Number", phonePh: "e.g. 98260 12345",
      doctor: "Select Doctor", anyDoctor: "Any available doctor",
      date: "Select Date", slot: "Select Time Slot",
      note: "Health Concern (optional)", notePh: "e.g. fever since 2 days",
      submit: "Book on WhatsApp",
      or: "or",
      call: "Call the clinic",
      success: "Opening WhatsApp… your appointment request is ready to send!",
      morning: "Morning", evening: "Evening",
    },
    footer: { rights: "All rights reserved.", quick: "Quick Links", contact: "Contact", hours: "Opening Hours", tagline: "Honest healthcare for every family in Indore." },
    misc: { viewAll: "View All Services", bookWith: "Book with", experience: "Experience", readMore: "Know More", getDirections: "Get Directions", emergency: "24×7 Emergency Helpline" },
    about: {
      title: "About Our Clinic",
      sub: "15 years of honest healthcare in Indore.",
      story1: "Arogyam Multispeciality Clinic was started in 2010 by Dr. Anil Sharma with a simple belief — every family deserves a doctor they can trust completely.",
      story2: "What began as a single-room practice in Vijay Nagar is today a full multispeciality clinic with four senior specialists, an in-house pathology lab, physiotherapy unit and vaccination center — serving over 50,000 patients from across Indore and nearby towns.",
      story3: "Our promise has never changed: honest diagnosis, minimal medicines, transparent fees and treatment we would give to our own family.",
      missionTitle: "Our Mission",
      mission: "To make specialist healthcare accessible, affordable and honest for every family in Madhya Pradesh.",
      values: [
        { title: "Honesty First", desc: "No unnecessary tests, procedures or medicines — ever." },
        { title: "Respect for Time", desc: "Appointments run on time. Your day matters." },
        { title: "Affordable Care", desc: "Transparent fees displayed at reception. Free follow-ups." },
        { title: "Continuous Learning", desc: "Our doctors attend national conferences every year." },
      ],
    },
  },
  hi: {
    nav: { home: "होम", about: "हमारे बारे में", services: "सेवाएँ", doctors: "हमारे डॉक्टर", contact: "संपर्क व बुकिंग", book: "अपॉइंटमेंट बुक करें" },
    hero: {
      badge: "2010 से इंदौर का भरोसा",
      title: "आपके परिवार का स्वास्थ्य,",
      titleAccent: "भरोसेमंद हाथों में",
      sub: "अनुभवी विशेषज्ञ, ईमानदार इलाज और उसी दिन लैब रिपोर्ट — विजय नगर, इंदौर में। WhatsApp पर 30 सेकंड में अपॉइंटमेंट बुक करें।",
      cta1: "अपॉइंटमेंट बुक करें",
      cta2: "अभी कॉल करें",
      open: "अभी खुला है · सुबह 9 – रात 9",
    },
    sections: {
      servicesTitle: "हमारी सेवाएँ",
      servicesSub: "पूरे परिवार का संपूर्ण इलाज, एक ही छत के नीचे।",
      doctorsTitle: "हमारे डॉक्टरों से मिलिए",
      doctorsSub: "वरिष्ठ विशेषज्ञ जिन पर आप आँख बंद करके भरोसा कर सकते हैं।",
      whyTitle: "परिवार हमें क्यों चुनते हैं",
      whySub: "15 साल, 50,000+ मरीज़, एक वादा — ईमानदार इलाज।",
      reviewsTitle: "मरीज़ क्या कहते हैं",
      reviewsSub: "इंदौर भर के परिवारों की सच्ची राय।",
      faqTitle: "अक्सर पूछे जाने वाले सवाल",
      faqSub: "विज़िट से पहले जो भी जानना ज़रूरी है।",
      galleryTitle: "क्लिनिक की एक झलक",
      gallerySub: "साफ, आधुनिक और आरामदायक माहौल।",
      visitTitle: "हम तक पहुँचें",
      visitSub: "विजय नगर के बीच में — ढूँढना आसान, पार्किंग मुफ़्त।",
      ctaTitle: "तबीयत ठीक नहीं? इंतज़ार मत कीजिए।",
      ctaSub: "अभी अपॉइंटमेंट बुक करें — WhatsApp पर सिर्फ 30 सेकंड लगते हैं।",
    },
    booking: {
      title: "अपॉइंटमेंट बुक करें",
      sub: "यह फॉर्म भरें — आपकी रिक्वेस्ट सीधे हमारे WhatsApp पर पहुँचेगी। 15 मिनट में कन्फर्मेशन।",
      name: "आपका नाम", namePh: "जैसे: रमेश पाटीदार",
      phone: "मोबाइल नंबर", phonePh: "जैसे: 98260 12345",
      doctor: "डॉक्टर चुनें", anyDoctor: "कोई भी उपलब्ध डॉक्टर",
      date: "तारीख चुनें", slot: "समय चुनें",
      note: "स्वास्थ्य समस्या (वैकल्पिक)", notePh: "जैसे: 2 दिन से बुखार",
      submit: "WhatsApp पर बुक करें",
      or: "या",
      call: "क्लिनिक को कॉल करें",
      success: "WhatsApp खुल रहा है… आपकी अपॉइंटमेंट रिक्वेस्ट भेजने के लिए तैयार है!",
      morning: "सुबह", evening: "शाम",
    },
    footer: { rights: "सर्वाधिकार सुरक्षित।", quick: "क्विक लिंक्स", contact: "संपर्क", hours: "समय", tagline: "इंदौर के हर परिवार के लिए ईमानदार इलाज।" },
    misc: { viewAll: "सभी सेवाएँ देखें", bookWith: "बुक करें", experience: "अनुभव", readMore: "और जानें", getDirections: "रास्ता देखें", emergency: "24×7 इमरजेंसी हेल्पलाइन" },
    about: {
      title: "हमारे क्लिनिक के बारे में",
      sub: "इंदौर में 15 साल का ईमानदार इलाज।",
      story1: "आरोग्यम मल्टीस्पेशलिटी क्लिनिक की शुरुआत 2010 में डॉ. अनिल शर्मा ने एक सीधे विश्वास के साथ की — हर परिवार को एक ऐसा डॉक्टर मिलना चाहिए जिस पर वह पूरा भरोसा कर सके।",
      story2: "विजय नगर के एक कमरे की प्रैक्टिस से शुरू होकर आज यह चार वरिष्ठ विशेषज्ञों, इन-हाउस पैथोलॉजी लैब, फिजियोथेरेपी यूनिट और टीकाकरण केंद्र वाला पूर्ण मल्टीस्पेशलिटी क्लिनिक है — जो इंदौर और आसपास के शहरों के 50,000+ मरीज़ों की सेवा कर चुका है।",
      story3: "हमारा वादा कभी नहीं बदला: ईमानदार निदान, कम से कम दवाएँ, पारदर्शी फीस और वैसा इलाज जो हम अपने परिवार को देते।",
      missionTitle: "हमारा मिशन",
      mission: "मध्य प्रदेश के हर परिवार के लिए विशेषज्ञ इलाज को सुलभ, किफ़ायती और ईमानदार बनाना।",
      values: [
        { title: "ईमानदारी सबसे पहले", desc: "कोई फालतू टेस्ट, प्रोसीजर या दवा नहीं — कभी नहीं।" },
        { title: "समय की कद्र", desc: "अपॉइंटमेंट समय पर चलते हैं। आपका दिन कीमती है।" },
        { title: "किफ़ायती इलाज", desc: "रिसेप्शन पर पारदर्शी फीस। फॉलो-अप मुफ़्त।" },
        { title: "निरंतर सीखना", desc: "हमारे डॉक्टर हर साल राष्ट्रीय सम्मेलनों में जाते हैं।" },
      ],
    },
  },
};
