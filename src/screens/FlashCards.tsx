import React from 'react';
import { RuneSystemContext } from '../RuneSystemContext';
import { Select } from '../components/Select';
import { RuneSystem } from '../classes/RuneSystem';
import { AettOfFreya } from '../classes/aettir/Freya';
import { AettOfHeimdall } from '../classes/aettir/Heimdall';
import { AettOfTiwaz } from '../classes/aettir/Tiwaz';
import { shuffleArray } from '../functions/shuffleArray';
import { Rune } from '../classes/Rune';
import { FlashCardController } from '../components/FlashCardController';
import { getRunesForAett } from '../functions/getRunesForAett';
import { Gear } from '../components/Gear';
import { Expando } from '../components/Expando';
import { useCookie } from '../hooks/useCookie';
import {
  Grid,
  makeStyles,
  createStyles,
  Typography,
  Theme,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(3),
      backgroundColor: '#edf2f7',
      height: '100%',
    },
    expando: {
      backgroundColor: '#fff',
      padding: theme.spacing(5),
      marginBottom: theme.spacing(3),
    },
    my3: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
  }),
);

export const FlashCards = () => {
  const classes = useStyles();

  const aettOfFreya = new AettOfFreya();
  const aettOfHeimdall = new AettOfHeimdall();
  const aettOfTiwaz = new AettOfTiwaz();

  const [aett, setAett] = useCookie('aett', 'all');

  const runeSystems = React.useContext(RuneSystemContext);
  // const [aett, setAett] = React.useState<Aettir | 'all'>('all');
  const [system] = React.useState<RuneSystem>(
    runeSystems.find(system => system.name === 'Elder Futhark') as RuneSystem,
  );
  const [runes, setRunes] = React.useState<Rune[]>(() =>
    shuffleArray(system.runes),
  );
  const [settingsExpanded, setSettingsExpanded] = React.useState(false);

  React.useEffect(() => {
    switch (aett) {
      case aettOfFreya.name:
      case aettOfHeimdall.name:
      case aettOfTiwaz.name:
        return setRunes(shuffleArray(getRunesForAett(system, aett)));
      case 'all':
      default:
        return setRunes(shuffleArray(system.runes));
    }
  }, [
    system,
    system.runes,
    aett,
    aettOfFreya.name,
    aettOfHeimdall.name,
    aettOfTiwaz.name,
  ]);

  const handleAettirChange = (event: React.ChangeEvent<any>) => {
    switch (event.target.value) {
      case aettOfFreya.name:
        return setAett(aettOfFreya.name);
      case aettOfHeimdall.name:
        return setAett(aettOfHeimdall.name);
      case aettOfTiwaz.name:
        return setAett(aettOfTiwaz.name);
      default:
        return setAett('all');
    }
  };

  return (
    <div className={classes.container}>
      <Grid container direction="row">
        <Grid item xs={10}>
          <Typography variant="h4" component="h1">
            Flash Cards
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Gear onClick={() => setSettingsExpanded(!settingsExpanded)} />
        </Grid>
      </Grid>
      <Expando expanded={settingsExpanded}>
        <div className={classes.expando}>
          <div className={classes.my3}>
            <Select
              label="Aett"
              options={['all', 'Freya', 'Heimdall', 'Tiwaz'].map(v => ({
                name: v,
                value: v,
              }))}
              value={aett}
              onChange={handleAettirChange}
            ></Select>
          </div>
        </div>
      </Expando>

      <FlashCardController runes={runes} />
    </div>
  );
};
