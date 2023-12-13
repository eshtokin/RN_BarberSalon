import React from 'react';
import {Button, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {Dispatch, RootState} from '../store/store';

const mapState = (state: RootState) => ({
  count: state.count,
});
const mapDispatch = (dispatch: Dispatch) => ({
  inc: () => dispatch.count.inc(1),
  dec: () => dispatch.count.dec(1),
});

type CountProps = {
  count: number;
  inc: () => void;
  dec: () => void;
};
const Count: React.FC<CountProps> = props => {
  return (
    <>
      <Text>{props.count}</Text>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Button title="dec" onPress={props.dec} />
        <Button title="inc" onPress={props.inc} />
      </View>
    </>
  );
};

const CountContainer = connect(mapState, mapDispatch)(Count);

export default CountContainer;
