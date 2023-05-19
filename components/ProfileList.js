
import styled from 'styled-components'
import Profile from '../components/Profile'


export default function ProfileList({ profiles, filters }) {
    if (!profiles || profiles.length === 0) {
      return <div>No profiles available</div>;
    }
  
    const filteredProfiles = profiles.filter((profile) => {
      if (filters.length === 0) {
        return true;
      } else {
        const locationMatch = filters.includes(profile.Location);

        return locationMatch;
      }
    });
  
    return (
      <Wrapper>
        {filteredProfiles.map((profile) => (
          <Profile
            key={profile.id}
            name={profile.Name}
            gender={profile.Gender}
            location={profile.Location}
            budget={profile.Budget}
          />
        ))}
      </Wrapper>
    );
  }
  
  const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    padding: 50px 100px 50px 100px;

`
