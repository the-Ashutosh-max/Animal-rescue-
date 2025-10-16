import React from 'react';

// Data interfaces
interface AnimalRescueContact {
  state: string;
  ngoName: string;
  helpline: string;
  contactDetails?: string; // e.g., "Available 24/7", "Call during business hours"
  website?: string;
}

interface GeneralHelpline {
  name: string;
  number: string;
  description?: string;
}

// --- Static Data for the Component ---

const generalHelplines: GeneralHelpline[] = [
  { name: "Wildlife SOS (National)", number: "+919871963535", description: "For wildlife emergencies across India" },
  { name: "PETA India (General)", number: "+912240727382", description: "For animal cruelty and rescue advice" },
  { name: "Animal Welfare Board of India (AWBI)", number: "+911129510751", description: "Central government body for animal welfare" },
];

const whatToDoInMeantime: string[] = [
  "Ensure your own safety first. Do not approach an injured or scared animal without caution.",
  "If safe, try to keep the animal calm and warm. Use a blanket or towel.",
  "Do not attempt to feed or give water to an injured or unconscious animal unless advised by a vet.",
  "Note down the exact location and any visible injuries or distress signs.",
  "Keep children and other pets away from the distressed animal.",
  "Call a local animal rescue organization or vet immediately.",
  "Take photos or videos if it's safe and helps document the situation."
];

const howToContact: string[] = [
  "When calling, provide the exact location (address, landmarks, GPS coordinates if possible).",
  "Describe the animal's condition clearly: species, size, visible injuries, behavior.",
  "Mention if the animal is in immediate danger (e.g., on a busy road, trapped).",
  "Provide your contact information so rescuers can reach you if needed.",
  "Follow any instructions given by the helpline operator carefully.",
  "Be patient, rescue operations can take time depending on resources and location."
];

const stateWiseRescueData: AnimalRescueContact[] = [
  // Maharashtra
  { state: "Maharashtra", ngoName: "PETA India (Mumbai)", helpline: "+912240727382", contactDetails: "Mumbai Office", website: "https://www.petaindia.com" },
  { state: "Maharashtra", ngoName: "Bombay Animal Rights", helpline: "+919920000109", contactDetails: "Mumbai" },
  { state: "Maharashtra", ngoName: "Welfare of Stray Dogs (WSD)", helpline: "+912264222838", contactDetails: "Mumbai", website: "https://wsdindia.org" },
  // Delhi
  { state: "Delhi", ngoName: "Friendicoes SECA", helpline: "+911124320707", contactDetails: "Delhi NCR", website: "https://friendicoes.org" },
  { state: "Delhi", ngoName: "People for Animals (PFA) Delhi", helpline: "+911123357088", contactDetails: "Delhi", website: "https://www.peopleforanimalsindia.org" },
  { state: "Delhi", ngoName: "Sanjay Gandhi Animal Care Centre", helpline: "+911125471000", contactDetails: "Delhi", website: "https://sganimalcare.org" },
  // Karnataka
  { state: "Karnataka", ngoName: "CUPA (Compassion Unlimited Plus Action)", helpline: "+918022947300", contactDetails: "Bengaluru", website: "https://cupabangalore.org" },
  { state: "Karnataka", ngoName: "Animal Rights Fund (ARF)", helpline: "+919845000000", contactDetails: "Bengaluru (Placeholder)" },
  // Tamil Nadu
  { state: "Tamil Nadu", ngoName: "Blue Cross of India", helpline: "+914422354959", contactDetails: "Chennai", website: "https://bluecross.org.in" },
  { state: "Tamil Nadu", ngoName: "The Madras Animal Rescue", helpline: "+919444000000", contactDetails: "Chennai (Placeholder)" },
  // West Bengal
  { state: "West Bengal", ngoName: "Love & Care for Animals (LCA)", helpline: "+919830000000", contactDetails: "Kolkata (Placeholder)" },
  { state: "West Bengal", ngoName: "People for Animals (PFA) Kolkata", helpline: "+919830000001", contactDetails: "Kolkata (Placeholder)" },
  // Uttar Pradesh
  { state: "Uttar Pradesh", ngoName: "Wildlife SOS (Agra)", helpline: "+919917109666", contactDetails: "Agra Bear Rescue Facility", website: "https://wildlifesos.org" },
  { state: "Uttar Pradesh", ngoName: "People for Animals (PFA) Lucknow", helpline: "+919415000000", contactDetails: "Lucknow (Placeholder)" },
  // Rajasthan
  { state: "Rajasthan", ngoName: "Help in Suffering", helpline: "+911412760000", contactDetails: "Jaipur", website: "https://helpinsuffering.org" },
  // Gujarat
  { state: "Gujarat", ngoName: "Jivdaya Charitable Trust", helpline: "+917926868686", contactDetails: "Ahmedabad", website: "https://jivdayatrust.org" },
  // Kerala
  { state: "Kerala", ngoName: "People for Animals (PFA) Kerala", helpline: "+919447000000", contactDetails: "Kochi (Placeholder)" },
  // Telangana
  { state: "Telangana", ngoName: "People for Animals (PFA) Hyderabad", helpline: "+919849999999", contactDetails: "Hyderabad (Placeholder)" },
  // Punjab
  { state: "Punjab", ngoName: "People for Animals (PFA) Punjab", helpline: "+919815000000", contactDetails: "Ludhiana (Placeholder)" },
  // Haryana
  { state: "Haryana", ngoName: "People for Animals (PFA) Gurgaon", helpline: "+919810000000", contactDetails: "Gurgaon (Placeholder)" },
  // Madhya Pradesh
  { state: "Madhya Pradesh", ngoName: "People for Animals (PFA) Bhopal", helpline: "+919425000000", contactDetails: "Bhopal (Placeholder)" },
  // Odisha
  { state: "Odisha", ngoName: "People for Animals (PFA) Bhubaneswar", helpline: "+919437000000", contactDetails: "Bhubaneswar (Placeholder)" },
  // Assam
  { state: "Assam", ngoName: "People for Animals (PFA) Guwahati", helpline: "+919864000000", contactDetails: "Guwahati (Placeholder)" },
  // Bihar
  { state: "Bihar", ngoName: "People for Animals (PFA) Patna", helpline: "+919334000000", contactDetails: "Patna (Placeholder)" },
  // Goa
  { state: "Goa", ngoName: "People for Animals (PFA) Goa", helpline: "+919822000000", contactDetails: "Goa (Placeholder)" },
  // Himachal Pradesh
  { state: "Himachal Pradesh", ngoName: "People for Animals (PFA) Shimla", helpline: "+919816000000", contactDetails: "Shimla (Placeholder)" },
  // Jammu and Kashmir
  { state: "Jammu and Kashmir", ngoName: "People for Animals (PFA) Srinagar", helpline: "+919419000000", contactDetails: "Srinagar (Placeholder)" },
  // Jharkhand
  { state: "Jharkhand", ngoName: "People for Animals (PFA) Ranchi", helpline: "+919431000000", contactDetails: "Ranchi (Placeholder)" },
  // Chhattisgarh
  { state: "Chhattisgarh", ngoName: "People for Animals (PFA) Raipur", helpline: "+919425000000", contactDetails: "Raipur (Placeholder)" },
  // Uttarakhand
  { state: "Uttarakhand", ngoName: "People for Animals (PFA) Dehradun", helpline: "+919412000000", contactDetails: "Dehradun (Placeholder)" },
  // Andhra Pradesh
  { state: "Andhra Pradesh", ngoName: "People for Animals (PFA) Vijayawada", helpline: "+919440000000", contactDetails: "Vijayawada (Placeholder)" },
  // Arunachal Pradesh
  { state: "Arunachal Pradesh", ngoName: "People for Animals (PFA) Itanagar", helpline: "+919436000000", contactDetails: "Itanagar (Placeholder)" },
  // Manipur
  { state: "Manipur", ngoName: "People for Animals (PFA) Imphal", helpline: "+919436000000", contactDetails: "Imphal (Placeholder)" },
  // Meghalaya
  { state: "Meghalaya", ngoName: "People for Animals (PFA) Shillong", helpline: "+919436000000", contactDetails: "Shillong (Placeholder)" },
  // Mizoram
  { state: "Mizoram", ngoName: "People for Animals (PFA) Aizawl", helpline: "+919436000000", contactDetails: "Aizawl (Placeholder)" },
  // Nagaland
  { state: "Nagaland", ngoName: "People for Animals (PFA) Kohima", helpline: "+919436000000", contactDetails: "Kohima (Placeholder)" },
  // Sikkim
  { state: "Sikkim", ngoName: "People for Animals (PFA) Gangtok", helpline: "+919434000000", contactDetails: "Gangtok (Placeholder)" },
  // Tripura
  { state: "Tripura", ngoName: "People for Animals (PFA) Agartala", helpline: "+919436000000", contactDetails: "Agartala (Placeholder)" },
];

// Group state-wise data for easier rendering
const groupedByState = stateWiseRescueData.reduce((acc, curr) => {
  if (!acc[curr.state]) {
    acc[curr.state] = [];
  }
  acc[curr.state].push(curr);
  return acc;
}, {} as Record<string, AnimalRescueContact[]>);

// Sort states alphabetically for consistent display
const sortedStates = Object.keys(groupedByState).sort();

const AnimalRescueIndia: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-6 sm:p-8 font-sans text-gray-800">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-green-700 mb-4 leading-tight">
          Animal Rescue India
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your comprehensive guide to animal rescue helplines and immediate actions across India.
        </p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* General Information Section */}
        <section className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-lg border border-gray-200 h-fit">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-3">
            Immediate Help & Guidance
          </h2>

          {/* Major Helplines */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Major Helplines</h3>
            <ul className="space-y-3">
              {generalHelplines.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">📞</span>
                  <div>
                    <p className="font-medium text-lg">{item.name}: <a href={`tel:${item.number}`} className="text-blue-600 hover:underline">{item.number}</a></p>
                    {item.description && <p className="text-sm text-gray-600">{item.description}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* How to Contact */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">How to Contact & Whom</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {howToContact.map((item, index) => (
                <li key={index} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>

          {/* What to Do in Meantime */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">What You Can Do in Meantime</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {whatToDoInMeantime.map((item, index) => (
                <li key={index} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* State-wise Helplines Section */}
        <section className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-3">
            State-wise Animal Rescue Helplines
          </h2>

          <div className="space-y-8">
            {sortedStates.map((state) => (
              <div key={state} className="bg-blue-50 p-5 rounded-xl shadow-sm border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">{state}</h3>
                <ul className="space-y-4">
                  {groupedByState[state].map((contact, index) => (
                    <li key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between">
                      <div>
                        <p className="font-semibold text-lg text-gray-900">{contact.ngoName}</p>
                        <p className="text-gray-700">Helpline: <a href={`tel:${contact.helpline}`} className="text-green-600 hover:underline font-medium">{contact.helpline}</a></p>
                        {contact.contactDetails && <p className="text-sm text-gray-600">({contact.contactDetails})</p>}
                      </div>
                      {contact.website && (
                        <a
                          href={contact.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 sm:mt-0 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm self-start sm:self-auto"
                        >
                          Visit Website
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center mt-16 text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Animal Rescue India. All rights reserved.</p>
        <p className="mt-2">Disclaimer: Information provided is for general guidance. Always verify details with the respective organizations.</p>
      </footer>
    </div>
  );
};

export default AnimalRescueIndia;
