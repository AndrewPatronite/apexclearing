import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Button, Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { getCat as getCatAction } from '../actions/getCat';
import './CatAlbum.css';

const CatAlbum = () => {
  const [catIndex, setCatIndex] = useState(0);
  const dispatch = useDispatch();
  // @ts-ignore
  const cats = useSelector((state) => state.cats);
  const cat = cats.length > 0 ? cats[catIndex] : {};

  const getCat = useCallback(() => {
    getCatAction(dispatch);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const catIndex = cats.length > 1 ? cats.length - 1 : 0;
    setCatIndex(catIndex);
  }, [cats]);

  useEffect(() => {
    getCat();
    //eslint-disable-next-line
  }, []);

  const onPreviousClick = () => {
    setCatIndex((previousCatIndex) =>
      previousCatIndex > 0 ? previousCatIndex - 1 : 0
    );
  };

  const onNextClick = () => {
    setCatIndex((previousCatIndex) =>
      previousCatIndex < cats.length - 1 ? previousCatIndex + 1 : cats.length
    );
  };

  const onFetchClick = () => {
    getCat();
  };

  return (
    <Card className="cat-album">
      <Image src={cat.url} alt="cat image" className="cat-image" />
      <Card.Content>
        <Card.Description>{`Breed: ${
          cat && cat.breeds && cat.breeds.length > 0 && cat.breeds[0].name
        }`}</Card.Description>
        <Card.Description>{`Url: ${cat.url}`}</Card.Description>
        <Button onClick={onFetchClick}>Fetch New Cat</Button>
        <div>
          <Button onClick={onPreviousClick} disabled={catIndex === 0}>
            Prev
          </Button>
          <Button onClick={onNextClick} disabled={catIndex === cats.length - 1}>
            Next
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default CatAlbum;
