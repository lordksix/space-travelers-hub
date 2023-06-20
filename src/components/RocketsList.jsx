import { useSelector } from 'react-redux';
import RocketItem from 'components/RocketItems';

const RocketsList = () => {
  const { rocketItems, isLoading, error } = useSelector((state) => state.rockets);
  return (
    <ul>
      {isLoading ? <p>is Loading...</p> : undefined}
      {error ? <p>{error}</p> : undefined}
      {rocketItems.map((rocket) => (
        <RocketItem key={rocket.id} rocket={rocket} />
      ))}
    </ul>
  );
};

export default RocketsList;
