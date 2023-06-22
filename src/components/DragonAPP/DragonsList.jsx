import { selectDragons } from 'features/dragons/dragonsSlice';
import { useSelector } from 'react-redux';
import DragonItem from './DragonItems';

const DragonList = () => {
  const { dragons, isLoading, error } = useSelector(selectDragons);
  return (
    <ul className="rockets-list">
      {isLoading ? <p>is Loading...</p> : undefined}
      {error ? <p>{error}</p> : undefined}
      {dragons.map((dragon) => (
        <DragonItem key={dragon.id} dragon={dragon} />
      ))}
    </ul>
  );
};

export default DragonList;
