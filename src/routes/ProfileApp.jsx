import MyMissions from 'components/ProfileAPP/MyMissions';
import MyRockets from 'components/ProfileAPP/MyRockets';

const ProfileApp = () => {
  const myProfileStyle = {
    borderTop: 'solid 1px rgba(0, 0, 0, 0.1)',
    width: '90%',
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    margin: '0 5% 0 5%',
    paddingTop: '10px',
  };
  return (
    <main style={myProfileStyle}>
      <MyMissions />
      <MyRockets />
    </main>
  );
};
export default ProfileApp;
