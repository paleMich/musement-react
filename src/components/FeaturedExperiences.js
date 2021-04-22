import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExperiences } from '../redux/experiences/experienceActions';
import Card from './Card';

function FeaturedExperiences({ translatedText }) {
  const dispatch = useDispatch();
  const experiencesState = useSelector((state) => state.experiences);
  const { experiences } = experiencesState;
  const { userLang } = useSelector((state) => state.languages);
  const { userCurrency } = useSelector((state) => state.currencies);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchExperiences());
    }, 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLang, userCurrency]);
  return (
    <>
      {experiences.length > 0
        ? experiences.map((experience, key) => (
            <Card
              key={key}
              translatedText={translatedText}
              content={experience}
            />
          ))
        : null}
    </>
  );
}

export default FeaturedExperiences;
