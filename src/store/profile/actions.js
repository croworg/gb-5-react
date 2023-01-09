export const CHANGE_NAME = 'CHANGE_NAME';
export const TOGGLE_PROFILE = 'TOGGLE_PROFILE';

// export const changeName = (data) => {
//   return {
//     type: types.CHANGE_NAME, 
//     payload: data
//   }
// }

export const changeName = (data) => ({
  type: CHANGE_NAME,
  payload: data
});

export const toggleProfile = () => ({
  type: TOGGLE_PROFILE,
});