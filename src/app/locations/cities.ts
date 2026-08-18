// City / area dataset powering the Locations section. Each entry has a region
// (Indian state or UAE emirate) and a tier that, combined with the optional
// per-city "profile" (nickname, knownFor, universities), lets the content
// engine produce genuinely varied, city-specific copy rather than one
// boilerplate template repeated everywhere.

export type Country =
  | 'India'
  | 'UAE'
  | 'Australia'
  | 'Austria'
  | 'Germany'
  | 'UK'
  | 'USA'
  | 'Qatar'
  | 'Saudi Arabia';
export type Tier = 'metro' | 'major' | 'city' | 'area';

export interface CityProfile {
  nickname?: string;
  knownFor?: string[];
  universities?: string[];
}

export interface City {
  slug: string;
  name: string;
  country: Country;
  region: string; // Indian state or UAE emirate/area grouping
  tier: Tier;
  profile?: CityProfile;
}

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// ── Rich profiles for well-known cities (drives the most distinctive copy) ──
const PROFILES: Record<string, CityProfile> = {
  chennai: { nickname: 'the Detroit of India and a Tamil academic powerhouse', knownFor: ['IT and automobile industries', 'a dense cluster of research universities', 'Anna University and IIT Madras'], universities: ['IIT Madras', 'Anna University', 'University of Madras', 'SRM and VIT campuses'] },
  coimbatore: { nickname: 'the Manchester of South India', knownFor: ['textile and engineering industry', 'a strong base of technical colleges', 'a growing startup ecosystem'], universities: ['Bharathiar University', 'PSG College of Technology', 'Amrita Vishwa Vidyapeetham'] },
  madurai: { nickname: 'the temple city of Tamil Nadu', knownFor: ['Madurai Kamaraj University', 'a large arts-and-science student community', 'medical and management colleges'], universities: ['Madurai Kamaraj University', 'Thiagarajar College of Engineering'] },
  tiruchirappalli: { nickname: 'the education hub of central Tamil Nadu', knownFor: ['NIT Trichy', 'Bharathidasan University', 'engineering research'], universities: ['NIT Tiruchirappalli', 'Bharathidasan University'] },
  trichy: { nickname: "central Tamil Nadu's education hub", knownFor: ['NIT Trichy', 'Bharathidasan University', 'a strong engineering scholar base'], universities: ['NIT Tiruchirappalli', 'Bharathidasan University'] },
  salem: { nickname: 'the steel city of Tamil Nadu', knownFor: ['Periyar University', 'engineering and medical colleges', 'steel and textiles'], universities: ['Periyar University', 'Government College of Engineering, Salem'] },
  tirunelveli: { nickname: 'a fast-growing academic centre of southern Tamil Nadu', knownFor: ['Manonmaniam Sundaranar University', 'a broad arts and science student base'], universities: ['Manonmaniam Sundaranar University'] },
  erode: { nickname: 'the turmeric city with a strong technical college network', knownFor: ['textile research', 'engineering colleges'], universities: ['Bharathiar University affiliated colleges'] },
  vellore: { nickname: 'a globally recognised university town', knownFor: ['VIT Vellore', 'CMC Vellore medical research', 'a large research-scholar population'], universities: ['VIT Vellore', 'Christian Medical College (CMC)'] },
  thanjavur: { nickname: 'the rice bowl and cultural capital of Tamil Nadu', knownFor: ['SASTRA University', 'agricultural and Tamil-studies research'], universities: ['SASTRA Deemed University', 'Tamil University'] },
  bengaluru: { nickname: "India's Silicon Valley", knownFor: ['IISc and a deep-tech research ecosystem', 'AI, IT and biotech industries', 'countless universities and R&D labs'], universities: ['Indian Institute of Science (IISc)', 'Bangalore University', 'IIM Bangalore', 'NIMHANS'] },
  bangalore: { nickname: "India's Silicon Valley", knownFor: ['IISc and a deep-tech research ecosystem', 'IT and biotech industries', 'a very large PhD scholar community'], universities: ['Indian Institute of Science (IISc)', 'Bangalore University', 'IIM Bangalore'] },
  hyderabad: { nickname: 'the Cyberabad research and pharma hub', knownFor: ['University of Hyderabad and IIIT-H', 'pharmaceutical and IT research', 'a large PhD scholar base'], universities: ['University of Hyderabad', 'IIIT Hyderabad', 'Osmania University', 'ISB'] },
  kochi: { nickname: "the commercial capital of Kerala", knownFor: ['CUSAT', 'marine, IT and management research', 'a strong maritime economy'], universities: ['Cochin University of Science and Technology (CUSAT)'] },
  ernakulam: { nickname: "the academic heart of Kochi", knownFor: ['CUSAT and MG University colleges', 'commerce and management research'], universities: ['CUSAT', 'Mahatma Gandhi University affiliated colleges'] },
  thiruvananthapuram: { nickname: "Kerala's capital and a science research hub", knownFor: ['University of Kerala', 'IIST and space research', 'medical and IT research'], universities: ['University of Kerala', 'IIST', 'IISER Thiruvananthapuram'] },
  trivandrum: { nickname: "Kerala's capital and a science research hub", knownFor: ['University of Kerala', 'IIST and space research', 'IT and medical research'], universities: ['University of Kerala', 'IIST'] },
  kozhikode: { nickname: 'a historic Malabar academic city', knownFor: ['IIM Kozhikode', 'NIT Calicut', 'management and engineering research'], universities: ['IIM Kozhikode', 'NIT Calicut', 'University of Calicut'] },
  calicut: { nickname: 'a historic Malabar academic city', knownFor: ['NIT Calicut', 'University of Calicut', 'management research'], universities: ['NIT Calicut', 'University of Calicut', 'IIM Kozhikode'] },
  kottayam: { nickname: 'the first fully literate town in India', knownFor: ['Mahatma Gandhi University', 'a very high literacy and research culture'], universities: ['Mahatma Gandhi University'] },
  kollam: { nickname: 'the cashew capital of Kerala', knownFor: ['Kerala University campuses', 'Amrita engineering research'], universities: ['University of Kerala', 'Amrita Vishwa Vidyapeetham, Amritapuri'] },
  thrissur: { nickname: 'the cultural capital of Kerala', knownFor: ['Kerala Agricultural University', 'medical and veterinary research'], universities: ['Kerala Agricultural University', 'Kerala University of Health Sciences'] },
  mumbai: { nickname: "India's financial capital", knownFor: ['University of Mumbai and IIT Bombay', 'finance, management and biomedical research', 'a huge scholar population'], universities: ['IIT Bombay', 'University of Mumbai', 'TISS'] },
  pune: { nickname: 'the Oxford of the East', knownFor: ['Savitribai Phule Pune University', 'a massive student population', 'IT and automotive research'], universities: ['Savitribai Phule Pune University', 'COEP', 'Symbiosis'] },
  delhi: { nickname: "India's academic capital", knownFor: ['DU, JNU, IIT Delhi and AIIMS', 'the densest research-university cluster in India'], universities: ['University of Delhi', 'JNU', 'IIT Delhi', 'AIIMS'] },
  'new-delhi': { nickname: "the heart of India's university system", knownFor: ['DU, JNU and AIIMS', 'policy, science and medical research'], universities: ['University of Delhi', 'JNU', 'AIIMS'] },
  kolkata: { nickname: 'the intellectual and cultural capital of eastern India', knownFor: ['University of Calcutta and Jadavpur University', 'IIM Calcutta and ISI', 'a deep scholarly tradition'], universities: ['University of Calcutta', 'Jadavpur University', 'IIM Calcutta', 'Indian Statistical Institute'] },
  ahmedabad: { nickname: "Gujarat's academic and business hub", knownFor: ['IIM Ahmedabad', 'Gujarat University', 'management and pharma research'], universities: ['IIM Ahmedabad', 'Gujarat University', 'CEPT University'] },
  visakhapatnam: { nickname: 'the City of Destiny and a coastal research hub', knownFor: ['Andhra University', 'marine, steel and IT research'], universities: ['Andhra University', 'GITAM'] },
  varanasi: { nickname: 'one of India\'s oldest seats of learning', knownFor: ['Banaras Hindu University (BHU)', 'a vast multidisciplinary research base'], universities: ['Banaras Hindu University (BHU)', 'IIT (BHU)'] },
  lucknow: { nickname: "Uttar Pradesh's academic capital", knownFor: ['University of Lucknow', 'medical and management research'], universities: ['University of Lucknow', 'KGMU', 'IIM Lucknow'] },
  jaipur: { nickname: 'the Pink City and a growing research hub', knownFor: ['University of Rajasthan', 'MNIT and management colleges'], universities: ['University of Rajasthan', 'MNIT Jaipur'] },
  indore: { nickname: "Madhya Pradesh's education and commercial capital", knownFor: ['IIT Indore and IIM Indore', 'DAVV', 'management and engineering research'], universities: ['IIT Indore', 'IIM Indore', 'DAVV'] },
  bhopal: { nickname: 'the City of Lakes and an academic centre of MP', knownFor: ['MANIT', 'Barkatullah University', 'engineering and policy research'], universities: ['MANIT Bhopal', 'Barkatullah University'] },
  nagpur: { nickname: 'the geographic heart of India and an academic hub', knownFor: ['RTM Nagpur University', 'VNIT', 'engineering and law research'], universities: ['RTM Nagpur University', 'VNIT Nagpur'] },
  guntur: { nickname: 'a major educational centre of coastal Andhra', knownFor: ['Acharya Nagarjuna University', 'agricultural and medical research'], universities: ['Acharya Nagarjuna University'] },
  vijayawada: { nickname: 'the commercial and coaching capital of Andhra Pradesh', knownFor: ['a large student and coaching ecosystem', 'engineering colleges'], universities: ['Krishna University affiliated colleges'] },
  warangal: { nickname: 'a historic Telangana education city', knownFor: ['NIT Warangal', 'Kakatiya University', 'engineering research'], universities: ['NIT Warangal', 'Kakatiya University'] },
  amritsar: { nickname: 'a historic academic city of Punjab', knownFor: ['Guru Nanak Dev University', 'medical and humanities research'], universities: ['Guru Nanak Dev University'] },
  ludhiana: { nickname: "Punjab's industrial and agricultural research hub", knownFor: ['Punjab Agricultural University (PAU)', 'agri and engineering research'], universities: ['Punjab Agricultural University', 'PAU'] },
  chandigarh: { nickname: 'a planned city and northern research hub', knownFor: ['Panjab University', 'PGIMER medical research'], universities: ['Panjab University', 'PGIMER'] },
  mysuru: { nickname: 'the cultural capital of Karnataka', knownFor: ['University of Mysore', 'a strong humanities and science tradition'], universities: ['University of Mysore'] },
  mangaluru: { nickname: 'a coastal Karnataka education and medical hub', knownFor: ['Mangalore University', 'NITK Surathkal nearby', 'medical research'], universities: ['Mangalore University', 'NITK Surathkal'] },
  surat: { nickname: 'the diamond and textile city of Gujarat', knownFor: ['Veer Narmad South Gujarat University', 'SVNIT engineering research'], universities: ['SVNIT Surat', 'Veer Narmad South Gujarat University'] },
  vadodara: { nickname: 'the cultural and academic capital of Gujarat', knownFor: ['The Maharaja Sayajirao University', 'a broad research base'], universities: ['Maharaja Sayajirao University of Baroda'] },
  kanpur: { nickname: 'an industrial and engineering research city of UP', knownFor: ['IIT Kanpur', 'CSJM University', 'leather and engineering research'], universities: ['IIT Kanpur', 'CSJM University'] },
  prayagraj: { nickname: 'a historic seat of learning in UP', knownFor: ['University of Allahabad', 'a strong civil-services and research culture'], universities: ['University of Allahabad', 'MNNIT Allahabad'] },
  // UAE
  'abu-dhabi': { nickname: "the UAE's capital and research investment hub", knownFor: ['Khalifa University', 'NYU Abu Dhabi', 'energy and AI research'], universities: ['Khalifa University', 'NYU Abu Dhabi'] },
  dubai: { nickname: "the Middle East's academic and business gateway", knownFor: ['a large international-university cluster', 'business, engineering and health research'], universities: ['University of Dubai', 'British University in Dubai', 'international branch campuses'] },
  // Australia
  sydney: { nickname: "Australia's largest research city", knownFor: ['the University of Sydney and UNSW', 'medical, engineering and business research'], universities: ['University of Sydney', 'UNSW Sydney', 'University of Technology Sydney'] },
  melbourne: { nickname: "Australia's education capital", knownFor: ['the University of Melbourne and Monash', 'a very large international-student community'], universities: ['University of Melbourne', 'Monash University', 'RMIT'] },
  brisbane: { nickname: 'a fast-growing Queensland research hub', knownFor: ['the University of Queensland', 'life-sciences and engineering research'], universities: ['University of Queensland', 'QUT', 'Griffith University'] },
  canberra: { nickname: "Australia's academic and policy capital", knownFor: ['the Australian National University (ANU)', 'policy and science research'], universities: ['Australian National University (ANU)', 'University of Canberra'] },
  // Austria
  vienna: { nickname: "Austria's academic capital", knownFor: ['the University of Vienna and TU Wien', 'a deep European research tradition'], universities: ['University of Vienna', 'TU Wien', 'Medical University of Vienna'] },
  graz: { nickname: 'a major Styrian university city', knownFor: ['the University of Graz and TU Graz', 'engineering and life-sciences research'], universities: ['University of Graz', 'Graz University of Technology'] },
  innsbruck: { nickname: 'an alpine research city', knownFor: ['the University of Innsbruck', 'medical and environmental research'], universities: ['University of Innsbruck', 'Medical University of Innsbruck'] },
  // Germany
  berlin: { nickname: "Germany's research and startup capital", knownFor: ['Humboldt and TU Berlin', 'a huge multidisciplinary research base'], universities: ['Humboldt University', 'TU Berlin', 'Freie Universität Berlin'] },
  munich: { nickname: 'a leading German science and engineering hub', knownFor: ['LMU and TU Munich', 'top-ranked engineering and physics research'], universities: ['Technical University of Munich (TUM)', 'LMU Munich'] },
  heidelberg: { nickname: "home to Germany's oldest university", knownFor: ['Heidelberg University', 'life-sciences and medical research'], universities: ['Heidelberg University'] },
  aachen: { nickname: 'a premier German engineering city', knownFor: ['RWTH Aachen', 'mechanical and electrical engineering research'], universities: ['RWTH Aachen University'] },
  // UK
  london: { nickname: "the UK's largest research hub", knownFor: ['UCL, Imperial and KCL', 'world-leading research across every discipline'], universities: ['University College London (UCL)', 'Imperial College London', "King's College London"] },
  oxford: { nickname: 'one of the world\'s oldest university cities', knownFor: ['the University of Oxford', 'research excellence across all fields'], universities: ['University of Oxford'] },
  cambridge: { nickname: 'a historic global centre of research', knownFor: ['the University of Cambridge', 'science, engineering and medical research'], universities: ['University of Cambridge'] },
  manchester: { nickname: 'a major northern UK research city', knownFor: ['the University of Manchester', 'materials, computing and health research'], universities: ['University of Manchester'] },
  edinburgh: { nickname: "Scotland's academic capital", knownFor: ['the University of Edinburgh', 'AI, informatics and medical research'], universities: ['University of Edinburgh'] },
  // USA
  'new-york': { nickname: 'a global research and academic centre', knownFor: ['Columbia and NYU', 'medicine, finance and social-science research'], universities: ['Columbia University', 'New York University (NYU)', 'CUNY'] },
  boston: { nickname: 'the academic capital of the United States', knownFor: ['Harvard and MIT nearby', 'the densest research-university cluster in the US'], universities: ['Harvard University', 'MIT', 'Boston University'] },
  'san-francisco': { nickname: 'the heart of US tech and biotech research', knownFor: ['Stanford and UC Berkeley nearby', 'AI and life-sciences research'], universities: ['Stanford University', 'UC Berkeley', 'UCSF'] },
  chicago: { nickname: 'a major Midwestern research hub', knownFor: ['the University of Chicago', 'economics and physical-sciences research'], universities: ['University of Chicago', 'Northwestern University'] },
  // Qatar
  doha: { nickname: "Qatar's academic and research capital", knownFor: ['Qatar University and Education City', 'energy, medical and policy research'], universities: ['Qatar University', 'Hamad Bin Khalifa University', 'Education City branch campuses'] },
  // Saudi Arabia
  riyadh: { nickname: "Saudi Arabia's capital and largest research hub", knownFor: ['King Saud University', 'medical, engineering and business research'], universities: ['King Saud University', 'Princess Nourah University'] },
  jeddah: { nickname: 'a Red Sea academic and commercial hub', knownFor: ['King Abdulaziz University', 'medical and marine research'], universities: ['King Abdulaziz University (KAU)'] },
  thuwal: { nickname: 'home to a world-class graduate research university', knownFor: ['KAUST', 'science and engineering research'], universities: ['King Abdullah University of Science and Technology (KAUST)'] },
  dhahran: { nickname: 'an Eastern Province engineering research centre', knownFor: ['KFUPM', 'petroleum and engineering research'], universities: ['King Fahd University of Petroleum and Minerals (KFUPM)'] },
};

// ── Top cities in India (locations_1) ──
const TOP_INDIA: [string, string, Tier][] = [
  ['Chennai', 'Tamil Nadu', 'metro'],
  ['Coimbatore', 'Tamil Nadu', 'major'],
  ['Madurai', 'Tamil Nadu', 'major'],
  ['Tiruchirappalli', 'Tamil Nadu', 'major'],
  ['Trichy', 'Tamil Nadu', 'major'],
  ['Salem', 'Tamil Nadu', 'major'],
  ['Tirunelveli', 'Tamil Nadu', 'major'],
  ['Erode', 'Tamil Nadu', 'major'],
  ['Vellore', 'Tamil Nadu', 'major'],
  ['Thanjavur', 'Tamil Nadu', 'major'],
  ['Bengaluru', 'Karnataka', 'metro'],
  ['Bangalore', 'Karnataka', 'metro'],
  ['Hyderabad', 'Telangana', 'metro'],
  ['Kochi', 'Kerala', 'major'],
  ['Ernakulam', 'Kerala', 'major'],
];

// ── More cities across India (location_2), deduped, state-mapped ──
const MORE_INDIA: [string, string][] = [
  ['Abohar', 'Punjab'], ['Agra', 'Uttar Pradesh'], ['Aligarh', 'Uttar Pradesh'], ['Anantapur', 'Andhra Pradesh'],
  ['Ballari', 'Karnataka'], ['Bathinda', 'Punjab'], ['Bharuch', 'Gujarat'], ['Bidar', 'Karnataka'],
  ['Central Delhi', 'Delhi'], ['Connaught Place', 'Delhi'], ['Delhi NCR', 'Delhi'], ['Durgapur', 'West Bengal'],
  ['Fatehgarh Sahib', 'Punjab'], ['Ghaziabad', 'Uttar Pradesh'], ['Gulbarga', 'Karnataka'], ['Hassan', 'Karnataka'],
  ['Hubballi', 'Karnataka'], ['Jabalpur', 'Madhya Pradesh'], ['Jalpaiguri', 'West Bengal'], ['Junagadh', 'Gujarat'],
  ['Kamareddy', 'Telangana'], ['Kanyakumari', 'Tamil Nadu'], ['Kasargod', 'Kerala'], ['Khanna', 'Punjab'],
  ['Kolhapur', 'Maharashtra'], ['Kottayam', 'Kerala'], ['Kozhikode', 'Kerala'], ['Krishnanagar', 'West Bengal'],
  ['Lucknow', 'Uttar Pradesh'], ['Madikeri', 'Karnataka'], ['Malda', 'West Bengal'], ['Manjeri', 'Kerala'],
  ['Miryalaguda', 'Telangana'], ['Morbi', 'Gujarat'], ['Nandyal', 'Andhra Pradesh'], ['Nawanshahr', 'Punjab'],
  ['Nirmal', 'Telangana'], ['North West Delhi', 'Delhi'], ['Pathankot', 'Punjab'], ['Prayagraj', 'Uttar Pradesh'],
  ['Raiganj', 'West Bengal'], ['Ratlam', 'Madhya Pradesh'], ['Sagar', 'Madhya Pradesh'], ['Satara', 'Maharashtra'],
  ['Siddipet', 'Telangana'], ['South Delhi', 'Delhi'], ['Suryapet', 'Telangana'], ['Thiruvananthapuram', 'Kerala'],
  ['Tiruvannamalai', 'Tamil Nadu'], ['Udupi', 'Karnataka'], ['Vadodara', 'Gujarat'], ['Vijayapura', 'Karnataka'],
  ['Vizianagaram', 'Andhra Pradesh'], ['Zaheerabad', 'Telangana'],
  ['Ahmedabad', 'Gujarat'], ['Amravati', 'Maharashtra'], ['Asansol', 'West Bengal'], ['Bardhaman', 'West Bengal'],
  ['Belagavi', 'Karnataka'], ['Belgaum', 'Karnataka'], ['Bhavnagar', 'Gujarat'], ['Boduppal', 'Telangana'],
  ['Chhindwara', 'Madhya Pradesh'], ['Cuddalore', 'Tamil Nadu'], ['Dewas', 'Madhya Pradesh'], ['Dwarka', 'Delhi'],
  ['Firozpur', 'Punjab'], ['Gorakhpur', 'Uttar Pradesh'], ['Guntur', 'Andhra Pradesh'], ['Hindupur', 'Andhra Pradesh'],
  ['Idukki', 'Kerala'], ['Jagtial', 'Telangana'], ['Jamnagar', 'Gujarat'], ['Kadapa', 'Andhra Pradesh'],
  ['Kanchipuram', 'Tamil Nadu'], ['Karimnagar', 'Telangana'], ['Katni', 'Madhya Pradesh'], ['Kharagpur', 'West Bengal'],
  ['Kolkata', 'West Bengal'], ['Ludhiana', 'Punjab'], ['Malerkotla', 'Punjab'], ['Mathura', 'Uttar Pradesh'],
  ['Moga', 'Punjab'], ['Mumbai', 'Maharashtra'], ['Nagpur', 'Maharashtra'], ['Nashik', 'Maharashtra'],
  ['Nellore', 'Andhra Pradesh'], ['Nizamabad', 'Telangana'], ['Ongole', 'Andhra Pradesh'], ['Patiala', 'Punjab'],
  ['Phagwara', 'Punjab'], ['Pune', 'Maharashtra'], ['Rajahmundry', 'Andhra Pradesh'], ['Rewa', 'Madhya Pradesh'],
  ['Sangareddy', 'Telangana'], ['Satna', 'Madhya Pradesh'], ['Shahdara', 'Delhi'], ['Siliguri', 'West Bengal'],
  ['South West Delhi', 'Delhi'], ['Tarn Taran', 'Punjab'], ['Thoothukudi', 'Tamil Nadu'], ['Trivandrum', 'Kerala'],
  ['Ujjain', 'Madhya Pradesh'], ['Vapi', 'Gujarat'], ['Vijayawada', 'Andhra Pradesh'], ['Warangal', 'Telangana'],
  ['Adilabad', 'Telangana'], ['Akola', 'Maharashtra'], ['Amritsar', 'Punjab'], ['Aurangabad', 'Maharashtra'],
  ['Bareilly', 'Uttar Pradesh'], ['Bhimavaram', 'Andhra Pradesh'], ['Burhanpur', 'Madhya Pradesh'], ['Chikkamagaluru', 'Karnataka'],
  ['Darjeeling', 'West Bengal'], ['Dharwad', 'Karnataka'], ['East Delhi', 'Delhi'], ['Eluru', 'Andhra Pradesh'],
  ['Gandhidham', 'Gujarat'], ['Gandhinagar', 'Gujarat'], ['Greater Noida', 'Uttar Pradesh'], ['Haldia', 'West Bengal'],
  ['Howrah', 'West Bengal'], ['Jalandhar', 'Punjab'], ['Janakpuri', 'Delhi'], ['Kakinada', 'Andhra Pradesh'],
  ['Kannur', 'Kerala'], ['Karol Bagh', 'Delhi'], ['Khammam', 'Telangana'], ['Kodungallur', 'Kerala'],
  ['Kollam', 'Kerala'], ['Machilipatnam', 'Andhra Pradesh'], ['Mahbubnagar', 'Telangana'], ['Mancherial', 'Telangana'],
  ['Meerut', 'Uttar Pradesh'], ['Mohali', 'Punjab'], ['Mysuru', 'Karnataka'], ['Namakkal', 'Tamil Nadu'],
  ['Navi Mumbai', 'Maharashtra'], ['New Delhi', 'Delhi'], ['Noida', 'Uttar Pradesh'], ['Palakkad', 'Kerala'],
  ['Pathanamthitta', 'Kerala'], ['Ponnani', 'Kerala'], ['Purulia', 'West Bengal'], ['Rajkot', 'Gujarat'],
  ['Rohini', 'Delhi'], ['Sangli', 'Maharashtra'], ['Singrauli', 'Madhya Pradesh'], ['Srikakulam', 'Andhra Pradesh'],
  ['Tenali', 'Andhra Pradesh'], ['Thrissur', 'Kerala'], ['Tirupati', 'Andhra Pradesh'], ['Tumakuru', 'Karnataka'],
  ['Vikarabad', 'Telangana'],
  ['Adoni', 'Andhra Pradesh'], ['Alappuzha', 'Kerala'], ['Anand', 'Gujarat'], ['Bagalkot', 'Karnataka'],
  ['Barnala', 'Punjab'], ['Berhampore', 'West Bengal'], ['Bhopal', 'Madhya Pradesh'], ['Calicut', 'Kerala'],
  ['Chittoor', 'Andhra Pradesh'], ['Davangere', 'Karnataka'], ['Dindigul', 'Tamil Nadu'], ['Jalgaon', 'Maharashtra'],
  ['Jhansi', 'Uttar Pradesh'], ['Kalaburagi', 'Karnataka'], ['Kanpur', 'Uttar Pradesh'], ['Karur', 'Tamil Nadu'],
  ['Khandwa', 'Madhya Pradesh'], ['Kolar', 'Karnataka'], ['Kothagudem', 'Telangana'], ['Laxmi Nagar', 'Delhi'],
  ['Malappuram', 'Kerala'], ['Mangaluru', 'Karnataka'], ['Mehsana', 'Gujarat'], ['Moradabad', 'Uttar Pradesh'],
  ['Nagercoil', 'Tamil Nadu'], ['Nanded', 'Maharashtra'], ['Navsari', 'Gujarat'], ['Neyyattinkara', 'Kerala'],
  ['North Delhi', 'Delhi'], ['Raichur', 'Karnataka'], ['Ramagundam', 'Telangana'], ['Rupnagar', 'Punjab'],
  ['Sangrur', 'Punjab'], ['Shivamogga', 'Karnataka'], ['Solapur', 'Maharashtra'], ['Surat', 'Gujarat'],
  ['Thane', 'Maharashtra'], ['Tuticorin', 'Tamil Nadu'], ['Vadakara', 'Kerala'], ['Varkala', 'Kerala'],
  ['Visakhapatnam', 'Andhra Pradesh'], ['West Delhi', 'Delhi'],
  ['Agra', 'Uttar Pradesh'], ['Varanasi', 'Uttar Pradesh'], ['Gwalior', 'Madhya Pradesh'], ['Jaipur', 'Rajasthan'],
  ['Chandigarh', 'Chandigarh'],
];

// ── UAE areas (location_3) ──
const UAE_AREAS: [string, string][] = [
  ['Abu Dhabi', 'Abu Dhabi'], ['Abu Dhabi Island', 'Abu Dhabi'], ['Al Bahia', 'Abu Dhabi'], ['Al Barsha', 'Dubai'],
  ['Al Bateen', 'Abu Dhabi'], ['Al Fahidi Historical Neighborhood', 'Dubai'], ['Al Falah', 'Abu Dhabi'], ['Al Hudayriat Island', 'Abu Dhabi'],
  ['Al Khalidiyah', 'Abu Dhabi'], ['Al Maqtaa', 'Abu Dhabi'], ['Al Maryah Island', 'Abu Dhabi'], ['Al Muroor', 'Abu Dhabi'],
  ['Al Mushrif', 'Abu Dhabi'], ['Al Nahda', 'Dubai'], ['Al Nahyan', 'Abu Dhabi'], ['Al Quoz', 'Dubai'],
  ['Al Qusais', 'Dubai'], ['Al Raha Beach', 'Abu Dhabi'], ['Al Reef', 'Abu Dhabi'], ['Al Reem Island', 'Abu Dhabi'],
  ['Al Shamkha', 'Abu Dhabi'], ['Al Shawamekh', 'Abu Dhabi'], ['Al Wathba', 'Abu Dhabi'], ['Al Zahiyah', 'Abu Dhabi'],
  ['Baniyas', 'Abu Dhabi'], ['Bluewaters Island', 'Dubai'], ['Bur Dubai', 'Dubai'], ['Business Bay', 'Dubai'],
  ['City Walk', 'Dubai'], ['Corniche Area', 'Abu Dhabi'], ['Deira', 'Dubai'], ['Discovery Gardens', 'Dubai'],
  ['Downtown Dubai', 'Dubai'], ['Dubai', 'Dubai'], ['Dubai Creek Harbour', 'Dubai'], ['Dubai Estate', 'Dubai'],
  ['Dubai International Financial Centre', 'Dubai'], ['Dubai Investment Park', 'Dubai'], ['Dubai Mall', 'Dubai'], ['Dubai Marina', 'Dubai'],
  ['Dubai Silicon Oasis', 'Dubai'], ['Dubai South', 'Dubai'], ['Dubai World Trade Centre', 'Dubai'], ['Electra Street', 'Abu Dhabi'],
  ['Emirates Hills', 'Dubai'], ['Hamdan Street', 'Abu Dhabi'], ['International City', 'Dubai'], ['Jebel Ali', 'Dubai'],
  ['Jumeirah', 'Dubai'], ['Jumeirah Beach Residence', 'Dubai'], ['Khalifa City', 'Abu Dhabi'], ['La Mer', 'Dubai'],
  ['Mall of the Emirates', 'Dubai'], ['Masdar City', 'Abu Dhabi'], ['Mirdif', 'Dubai'], ['Mohammed Bin Zayed City', 'Abu Dhabi'],
  ['Mussafah', 'Abu Dhabi'], ['Palm Jumeirah', 'Dubai'], ['Saadiyat Island', 'Abu Dhabi'], ['Tourist Club Area', 'Abu Dhabi'],
  ['Yas Island', 'Abu Dhabi'], ['Zayed City', 'Abu Dhabi'],
];

// Additional UAE emirate cities (beyond the Abu Dhabi / Dubai areas above).
const UAE_CITIES: [string, string][] = [
  ['Sharjah', 'Sharjah'], ['Ajman', 'Ajman'], ['Ras Al Khaimah', 'Ras Al Khaimah'],
  ['Fujairah', 'Fujairah'], ['Umm Al Quwain', 'Umm Al Quwain'], ['Al Ain', 'Abu Dhabi'],
];

// ── International research cities ([name, region/state]) ──
const AUSTRALIA: [string, string][] = [
  ['Sydney', 'New South Wales'], ['Melbourne', 'Victoria'], ['Brisbane', 'Queensland'],
  ['Perth', 'Western Australia'], ['Adelaide', 'South Australia'], ['Canberra', 'Australian Capital Territory'],
  ['Gold Coast', 'Queensland'], ['Newcastle', 'New South Wales'], ['Wollongong', 'New South Wales'],
  ['Hobart', 'Tasmania'], ['Darwin', 'Northern Territory'], ['Geelong', 'Victoria'],
  ['Cairns', 'Queensland'], ['Townsville', 'Queensland'],
];

const AUSTRIA: [string, string][] = [
  ['Vienna', 'Vienna'], ['Graz', 'Styria'], ['Linz', 'Upper Austria'], ['Salzburg', 'Salzburg'],
  ['Innsbruck', 'Tyrol'], ['Klagenfurt', 'Carinthia'], ['Villach', 'Carinthia'],
  ['Wels', 'Upper Austria'], ['Leoben', 'Styria'], ['Krems', 'Lower Austria'],
];

const GERMANY: [string, string][] = [
  ['Berlin', 'Berlin'], ['Munich', 'Bavaria'], ['Hamburg', 'Hamburg'], ['Frankfurt', 'Hesse'],
  ['Cologne', 'North Rhine-Westphalia'], ['Stuttgart', 'Baden-Württemberg'], ['Düsseldorf', 'North Rhine-Westphalia'],
  ['Heidelberg', 'Baden-Württemberg'], ['Aachen', 'North Rhine-Westphalia'], ['Dresden', 'Saxony'],
  ['Leipzig', 'Saxony'], ['Bonn', 'North Rhine-Westphalia'], ['Freiburg', 'Baden-Württemberg'],
  ['Göttingen', 'Lower Saxony'], ['Karlsruhe', 'Baden-Württemberg'], ['Darmstadt', 'Hesse'],
  ['Tübingen', 'Baden-Württemberg'], ['Münster', 'North Rhine-Westphalia'], ['Nuremberg', 'Bavaria'],
  ['Bremen', 'Bremen'],
];

const UK: [string, string][] = [
  ['London', 'England'], ['Manchester', 'England'], ['Birmingham', 'England'], ['Edinburgh', 'Scotland'],
  ['Glasgow', 'Scotland'], ['Oxford', 'England'], ['Cambridge', 'England'], ['Leeds', 'England'],
  ['Bristol', 'England'], ['Sheffield', 'England'], ['Liverpool', 'England'], ['Nottingham', 'England'],
  ['Newcastle upon Tyne', 'England'], ['Cardiff', 'Wales'], ['Coventry', 'England'], ['Southampton', 'England'],
  ['Leicester', 'England'], ['Aberdeen', 'Scotland'], ['Durham', 'England'], ['Belfast', 'Northern Ireland'],
];

const USA: [string, string][] = [
  ['New York', 'New York'], ['Boston', 'Massachusetts'], ['Los Angeles', 'California'], ['Chicago', 'Illinois'],
  ['San Francisco', 'California'], ['Houston', 'Texas'], ['Philadelphia', 'Pennsylvania'], ['Washington', 'District of Columbia'],
  ['Seattle', 'Washington'], ['Atlanta', 'Georgia'], ['Austin', 'Texas'], ['San Diego', 'California'],
  ['Ann Arbor', 'Michigan'], ['Pittsburgh', 'Pennsylvania'], ['Baltimore', 'Maryland'], ['Berkeley', 'California'],
  ['Dallas', 'Texas'], ['Denver', 'Colorado'], ['Minneapolis', 'Minnesota'], ['Phoenix', 'Arizona'],
];

const QATAR: [string, string][] = [
  ['Doha', 'Doha'], ['Al Rayyan', 'Al Rayyan'], ['Al Wakrah', 'Al Wakrah'], ['Lusail', 'Lusail'],
  ['Al Khor', 'Al Khor'], ['Education City', 'Doha'], ['West Bay', 'Doha'], ['The Pearl', 'Doha'],
  ['Umm Salal', 'Umm Salal'], ['Mesaieed', 'Al Wakrah'], ['Dukhan', 'Al Shahaniya'],
];

const KSA: [string, string][] = [
  ['Riyadh', 'Riyadh Province'], ['Jeddah', 'Makkah Province'], ['Mecca', 'Makkah Province'], ['Medina', 'Al Madinah Province'],
  ['Dammam', 'Eastern Province'], ['Khobar', 'Eastern Province'], ['Dhahran', 'Eastern Province'], ['Thuwal', 'Makkah Province'],
  ['Tabuk', 'Tabuk Province'], ['Abha', 'Asir Province'], ['Buraidah', 'Al-Qassim Province'], ['Hail', "Ha'il Province"],
  ['Jubail', 'Eastern Province'], ['Taif', 'Makkah Province'], ['Al Ahsa', 'Eastern Province'], ['NEOM', 'Tabuk Province'],
];

// Short codes used to disambiguate slugs that collide with an already-added city.
const COUNTRY_CODE: Record<Country, string> = {
  India: 'in', UAE: 'ae', Australia: 'au', Austria: 'at', Germany: 'de',
  UK: 'uk', USA: 'us', Qatar: 'qa', 'Saudi Arabia': 'sa',
};

function build(): City[] {
  const seen = new Set<string>();
  const out: City[] = [];
  const add = (name: string, country: Country, region: string, tier: Tier) => {
    let slug = slugify(name);
    // Keep earlier (India/UAE) slugs clean; disambiguate later collisions
    // (e.g. a second "Newcastle") with a country suffix so URLs stay unique.
    if (seen.has(slug)) {
      slug = `${slug}-${COUNTRY_CODE[country]}`;
      if (seen.has(slug)) return;
    }
    seen.add(slug);
    out.push({ slug, name, country, region, tier, profile: PROFILES[slug] ?? PROFILES[slugify(name)] });
  };
  TOP_INDIA.forEach(([name, region, tier]) => add(name, 'India', region, tier));
  MORE_INDIA.forEach(([name, region]) => add(name, 'India', region, 'city'));
  UAE_AREAS.forEach(([name, region]) => add(name, 'UAE', region, 'area'));
  UAE_CITIES.forEach(([name, region]) => add(name, 'UAE', region, 'city'));
  AUSTRALIA.forEach(([name, region]) => add(name, 'Australia', region, 'city'));
  AUSTRIA.forEach(([name, region]) => add(name, 'Austria', region, 'city'));
  GERMANY.forEach(([name, region]) => add(name, 'Germany', region, 'city'));
  UK.forEach(([name, region]) => add(name, 'UK', region, 'city'));
  USA.forEach(([name, region]) => add(name, 'USA', region, 'city'));
  QATAR.forEach(([name, region]) => add(name, 'Qatar', region, 'city'));
  KSA.forEach(([name, region]) => add(name, 'Saudi Arabia', region, 'city'));
  return out;
}

// Countries shown as their own sections on the Locations hub (in order).
export const INTERNATIONAL_COUNTRIES: Country[] = [
  'Australia', 'Austria', 'Germany', 'UK', 'USA', 'Qatar', 'Saudi Arabia',
];

export const cities: City[] = build();

export const topIndiaSlugs = TOP_INDIA.map(([n]) => slugify(n));

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

// Related cities for internal linking / backlinks: same region first, then the
// rest of the same country. Deterministic so each page's links are stable.
export function getRelatedCities(city: City, count = 12): City[] {
  const sameRegion = cities.filter((c) => c.slug !== city.slug && c.country === city.country && c.region === city.region);
  const sameCountry = cities.filter((c) => c.slug !== city.slug && c.country === city.country && c.region !== city.region);
  return [...sameRegion, ...sameCountry].slice(0, count);
}

export const citySlugs = cities.map((c) => c.slug);
