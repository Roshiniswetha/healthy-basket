import React, { connect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FruitsList from './fruitsList';
import {fetchFruits} from "components/store/fruits/actionCreators"


// const Container = ({ state, dispatch }) => {
//     // Render the UI
//   };

// const mapStateToProps = state => ({
//     fruits: state?.fruits
// });

// const mapDispatchToProps = function(dispatch) {
//     fetchFruits: () => dispatch({
//         type: 'GET_ALL_FRUITS',
//       }),
//   };

// dispatch => ({
//     // useEffect(() => {
//     //     dispatch(fetchFruits());
//     //   }, []);
//     // bindActionCreators({ fetchFruits }, dispatch);
//     fetchFruits: () => dispatch({
//         type: 'GET_ALL_FRUITS',
//       }),

// });

// export const FruitsContainer = connect(mapStateToProps, {fetchFruits})(FruitsList);