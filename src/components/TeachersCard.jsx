export const TeachersCard = ({ card }) => {
  const { avatar_url, conditions, experience, languages, lesson_info, lessons_done, levels, name, price_per_hour, rating, reviews, surname } = card;
  
  return (
    <div>
      <img src={avatar_url} alt={`${name} ${surname}`} />
      <p>{experience}</p>
      <p>{lesson_info}</p>
      <p>{lessons_done}</p>
      <p>{name}</p>
      <p>{price_per_hour}</p>
      <p>{rating}</p>
      <p>{surname}</p>
    </div>
  )
}
