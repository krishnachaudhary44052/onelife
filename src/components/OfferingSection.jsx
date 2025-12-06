import React from 'react';
import '../Styles/OfferingsSection.css'; 
const offeringsData = [
  {
    icon: '🧘', 
    title: 'Wellness Memberships ',
    description: 'Structured monthly wellness plans designed to improve your physical, mental, and emotional health. Each membership includes personalized guidance, assessments, and continuous support based on your individual goals',
  },
  {
    icon: '🏞️', 
    title: 'Lifestyle Transformation Plans',
    description: `Set in a tranquil, natural environment ideal for rejuvenation and outdoor activities like hiking or trekking. The lush greenery and serene scenery enhance healing and relaxation.

Step-by-step plans to help individuals adopt healthier habits through:

• Diet & nutrition guidance
• Yoga & movement therapies
• Detox routines
• Stress and sleep management`,
  },
  {
    icon: ' 🧘',
    title: 'Community Circles ',
    description: `
Join a supportive group of people who share similar goals and challenges. Activities may include: 

• Group wellness sessions 
• Sharing circles 
• Expert talks 
• Monthly meetups `,
  },
];

const OfferingsSection = () => {
  return (
    <section className="offerings-section">
      <div className="offerings-container">
        
        <div className="offerings-images">
          <div className="image-card image-1">

            <img src="/Images/IMG_9045.JPG" alt="Retreat View 1" />
          </div>
          <div className="image-card image-2">
            
            <img src="/Images/IMG_9045.JPG" alt="Retreat View 2" />
          </div>
        </div>

        <div className="offerings-content">
          <h2 className="offerings-heading">Explore Our Offerings</h2>
          <p className="offerings-subheading">
            Customized Wellness Experiences Discover the Benefits of Our Holistic Approach
          </p>

          <div className="offerings-list">
            {offeringsData.map((offering, index) => (
              <div key={index} className="offering-item">
                <div className="offering-icon">{offering.icon}</div> 
                <div className="offering-text">
                  <h3 className="offering-title">{offering.title}</h3>
                  <p className="offering-description">{offering.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;