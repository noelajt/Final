
import styled, { css } from 'styled-components';


function getRandomProfilePic() {
  const PROFILE_PICS = [
    "https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
    "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=67773a9d419786091c958b2ad08eae5e",
    "https://www.thesprucepets.com/thmb/YBO6dLNaRUrr34ra0W4KGim00q4=/6411x0/filters:no_upscale():strip_icc()/puppies-three-to-six-months-4570930-hero-bf2f59d75dcb4294991d6bd8cd51ec7c.jpg",
    "https://www.thefarmersdog.com/digest/wp-content/uploads/2023/03/shutterstock_1735724201.jpg",
    "https://d.newsweek.com/en/full/2074004/puppy.webp"
  ];
  const index = Math.floor(Math.random() * PROFILE_PICS.length);
  const pic = PROFILE_PICS[index];

  return pic;
}

function getRandomDescription(descriptions, usedDescriptions) {
    const availableDescriptions = descriptions.filter(
      (description) => !usedDescriptions.includes(description)
    );
    const index = Math.floor(Math.random() * availableDescriptions.length);
    const description = availableDescriptions[index];
  
    return description;
  }
  

export default function Profile({ name, gender, location, budget }) {

    const DESCRIPTIONS = [
        "Friendly",
        "Respectful",
        "Chill",
        "Party Animal",
        "Outgoing",
        "Introverted",
        "Neat",
        "Clean",
        "Quiet",
        "Creative",
        "Lively",
        "Night Owl",
        "Early Bird"
      ];
    
      const usedDescriptions = [];
    
      const getRandomDescriptions = () => {
        const descriptions = [];
        for (let i = 0; i < 4; i++) {
          const description = getRandomDescription(DESCRIPTIONS, usedDescriptions);
          descriptions.push(description);
          usedDescriptions.push(description);
        }
        return descriptions;
      };
        
  const descriptions = getRandomDescriptions();
  const getDecoColor = () => {
    if (gender === 'Female') {
      return '#faa4bd';
    } else if (gender === 'Male') {
      return '#a2e0f5';
    }
    return '#FAA4BD'; // Default color if gender is not specified
  };

  return (
    <Wrapper color={getDecoColor()}>
      <Deco color={getDecoColor()}>
        <ImageWrapper src={getRandomProfilePic()} />
      </Deco>
      <Spacer height={10} />
      <Name>{name}</Name>
      <Info>
        {location}, ${budget}
      </Info>
      <Spacer height={10} />
      <Heading>About Me</Heading>
      <DescriptorWrapper>
      {descriptions && descriptions.map((d) => (<Descriptor>{d}</Descriptor>))}
      </DescriptorWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border:  4px solid;
  display: flex;
  flex-direction: column;
  gap: none;
  justify-content: center;
  border-radius: 10px;
  position: relative;
  max-width: 300px;
  min-width: 190px;
  padding-bottom: 20px;
  background-color: white;
  ${({ color }) =>
  css`
    border-color: ${color};
  `}
`;

const Spacer = styled.div`
  height: ${(p) => p.height}px;
`;

const Name = styled.h2`
  padding: 10px 10px 0px 10px; 
  margin: 0;
  font-size: clamp(14px, 4vw, 20px);
  white-space: nowrap;
`;

const Heading = styled.h3`
  padding: 10px 10px 0px 10px; 
  margin: 0;
`;

const Info = styled.div`
  padding: 0px 10px 0px 10px;
  margin: 0;
`;

const ImageWrapper = styled.img`
  height: 85px;
  width: 85px;
  border-radius: 50%;
  object-fit: cover;
`;

const Deco = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 40px 0px 15px 0px;
  border-radius: 5px 5px 0px 0px;
  ${({ color }) =>
    css`
      background-color: ${color};
    `}
`;

const DescriptorWrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap: 4px;
padding: 10px 10px 0px 10px; 
`

const Descriptor = styled.div`
border-radius: 3px;
border: solid;
padding: 4px;
font-size: clamp(10px, 4vw, 14px);
`
