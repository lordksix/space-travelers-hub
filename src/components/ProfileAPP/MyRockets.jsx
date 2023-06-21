import { useSelector } from 'react-redux';
import { getRockets } from 'features/rockets/rocketsSlice';

const MyProfile = () => {
  const { rocketItems } = useSelector(getRockets);
  const bookedRockets = rocketItems.filter((rocket) => (rocket.reserved === true));
  return (
    <div>
      <h1>My Rockets</h1>
      <ul>
        {bookedRockets.length === 0 ? <li>Rockets Not Found</li>
          : bookedRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default MyProfile;
