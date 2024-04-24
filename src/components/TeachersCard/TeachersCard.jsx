import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { faker } from '@faker-js/faker';
import { useAuth } from '../../hooks/use-auth';
import { selectFavorites } from '../../redux/selectors/card.selectors';
import { addToFavorites, removeFromFavorites } from '../../redux/card/card.reducer';
import { showWarningToast } from '../ErrorMessages/errorMessages';
import { joinArrayWithComma, joinArrayWithSpace } from '../arrayProcessing'
import { PopUp } from '../PopUp/PopUp';
import { BookTrialForm } from '../Forms/BookTrialForm';
import { ReactComponent as IconHeart } from 'assets/icons/heart.svg'
import { ReactComponent as IconActiveHeart } from 'assets/icons/active-heart.svg'
import { ReactComponent as IconBook } from 'assets/icons/book-open.svg'
import { ReactComponent as IconStar } from 'assets/icons/star.svg'
import css from './TeachersCard.module.css';

export const TeachersCard = ({ card }) => {
  const { avatar_url, conditions, experience, languages, id, lesson_info, lessons_done, levels, name, price_per_hour, rating, reviews, surname } = card;
  
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  const [showReadMore, setShowReadMore] = useState(false);
  const [showBookTrialForm, setShowBookTrialForm] = useState(false);
  const favoriteCard = useSelector(selectFavorites);

  const inFavorites = favoriteCard.some((favorite) => favorite.id === id);
  
  const handleAddToFavorite = (card) => {
    if (isAuth) { 
      dispatch(addToFavorites(card));
    } else {
      showWarningToast("sorry, only for registered users");
     }
  };

  const handleDeleteFromFavorites = (cardId) => {
    dispatch(removeFromFavorites(cardId));
  };

  return (
    <>
      <div className={css.teachersImgWrp}>
        <img className={css.teachersImg} src={avatar_url} alt={`${name} ${surname}`} width={96} height={96}/>
      </div>
      <div className={css.teachersInfoWrp}>
        <div className={css.teachersInfo}>
          <p className={css.teachersLang}>Languages</p>
          <ul className={css.teachersInfoList}>
            <li className={css.teachersInfoItem}>
              <IconBook/>
              Lessons online
            </li>
            <li className={css.teachersInfoItem}>Lessons done: {lessons_done}</li>
            <li className={css.teachersInfoItem}>
              <IconStar/>
              Rating: {rating}
            </li>
            <li className={css.teachersInfoItem}>
              Price / 1 hour:
              <span className={css.teachersInfoPrice}>{price_per_hour}$</span>
            </li>
          </ul>
            {inFavorites
            ? <button className={css.teachersFavoriteBtn} type="button" onClick={() => {handleDeleteFromFavorites(id)}}><IconActiveHeart/></button>
            : <button className={css.teachersFavoriteBtn} type="button" onClick={() => {handleAddToFavorite(card)}}><IconHeart/></button>}
        </div>
        <h2>{name} {surname}</h2>
        <p>Speaks: {joinArrayWithComma(languages)}</p>
        <p>Lesson Info: {lesson_info}</p>
        <p>Conditions: {joinArrayWithSpace(conditions)}</p>
        {!showReadMore && <button type="button" onClick={() => setShowReadMore(true)}>Read more</button>}
        {showReadMore && <div>
          <p>{experience}</p>
          <ul>
            {reviews.map(({comment, reviewer_name, reviewer_rating}) => (
              <li key={nanoid()}>
                <img src={faker.image.avatar()} alt={{reviewer_name}} width={44} height={44}/>
                <h3>{reviewer_name}</h3>
                <p>{reviewer_rating}</p>
                <p>{comment}</p>
              </li>
            ))}
          </ul>
          <ul>
            {levels.map((level) => (
              <li key={nanoid()}>{level}</li>
            ))}
          </ul>
          <button type='button' onClick={() => setShowBookTrialForm(true)}>Book trial lesson</button>
        </div>}
        {!showReadMore && <ul>
          {levels.map((level) => (
            <li key={nanoid()}>{level}</li>
          ))}
        </ul>}
      </div>
      {showBookTrialForm &&
        <PopUp setIsShowModal={setShowBookTrialForm}>
          <BookTrialForm
            avatar_url={avatar_url}
            name={name}
            surname={surname}
            setShowBookTrialForm={setShowBookTrialForm}
          />
        </PopUp>}
    </>
  )
}