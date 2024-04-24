import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFavorites } from '../../redux/selectors/card.selectors';
import { TeachersCard } from '../../components/TeachersCard/TeachersCard';
import { nanoid } from 'nanoid';

const FavoritesPage = () => {
  const favoriteCard = useSelector(selectFavorites);

  return (
    <main>
      <h2>Favorite</h2>
      {favoriteCard.length > 0 ? (
        <ul>
          {favoriteCard.map((card) => (
            <TeachersCard key={nanoid()} card={card} />
          ))}
        </ul>
      ) : (
        <p>
          Oops! It looks like you haven&apos;t added any teachers to your favorites
          yet, so we can&apos;t display what isn&apos;t there. Add some favorites and
          come <Link to="/teachers">back!</Link>
        </p>
      )}
    </main>
  );
};

export default FavoritesPage;
