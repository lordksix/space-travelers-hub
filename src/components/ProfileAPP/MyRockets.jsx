import { useSelector } from 'react-redux';
import { getRockets } from 'features/rockets/rocketsSlice';
import styles from 'styles/MyRockets.module.css';

const MyProfile = () => {
  const { rocketItems } = useSelector(getRockets);
  const bookedRockets = [...rocketItems.filter((rocket) => (rocket.reserved === true))];
  return (
    <div>
      <h1 className={styles.title}>My Rockets</h1>
      <ul className={styles.rocketsList}>
        {bookedRockets.length === 0 ? <p className={styles.noRocketFound}>Rockets Not Found</p>
          : bookedRockets.map((rocket) => (
            <li key={rocket.id} className={styles.rocketItem}>{rocket.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default MyProfile;
