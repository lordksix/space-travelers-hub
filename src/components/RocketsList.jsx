import { useSelector } from 'react-redux';
import RocketItem from 'components/RocketItems';
import { getRockets } from 'features/rockets/rocketsSlice';

const RocketsList = () => {
  const { rocketItems, isLoading, error } = useSelector(getRockets);
  return (
    <ul className="rockets-list">
      {isLoading ? <p>is Loading...</p> : undefined}
      {error ? <p>{error}</p> : undefined}
      {rocketItems.map((rocket) => (
        <RocketItem key={rocket.id} rocket={rocket} />
      ))}
    </ul>
  );
};

export default RocketsList;
