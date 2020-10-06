import { getCat as getCatRemote } from '../api/getCat';

export const CAT = 'cat';

export const getCat = (dispatch: any) => {
  getCatRemote().then((response: { data: any[] }) => {
    dispatch({ type: CAT, value: response.data[0] });
  });
};
