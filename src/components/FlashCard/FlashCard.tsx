import React from 'react';
import { Rune } from '../../classes/Rune';
import { FlashCardFront } from './FlashCardFront';
import { FlashCardBack } from './FlashCardBack';
import {
  Card,
  CardActionArea,
  createStyles,
  makeStyles,
  CardContent,
} from '@material-ui/core';

export interface IFlashCard {
  rune: Rune;
}

const useStyles = makeStyles(() =>
  createStyles({
    actionArea: {
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      minHeight: '100%',
    },
  }),
);

export const FlashCard = (props: IFlashCard) => {
  const { rune } = props;
  const [flipped, setFlipped] = React.useState(false);
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea onClick={() => setFlipped(!flipped)}>
        <CardContent
          className={classes.actionArea}
          style={{ minHeight: '300px' }}
        >
          <FlashCardFront rune={rune} flipped={flipped} />
          <FlashCardBack rune={rune} flipped={flipped} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
