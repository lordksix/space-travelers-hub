import MyDragons from 'components/ProfileAPP/MyDragons';
import MyMissions from 'components/ProfileAPP/MyMissions';
import MyRockets from 'components/ProfileAPP/MyRockets';

const ProfileApp = () => {
  const myProfileStyle = {
    borderTop: 'solid 1px rgba(0, 0, 0, 0.1)',
    width: '90%',
    margin: '0 auto',
    paddingTop: '30px',
  };
  return (
    <main style={myProfileStyle} className="profilePage">
      <MyMissions />
      <MyRockets />
      <MyDragons />
    </main>
  );
};
export default ProfileApp;
