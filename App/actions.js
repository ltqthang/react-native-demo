/**
 * Created by letqt on 12/3/17.
 */

export const types = {
  FETCH_ALL: 'FETCH_ALL',
  EDIT: 'EDIT',
}

export function fetchAll() {
  const girls = require('./mockdata.json');
  return {type: types.FETCH_ALL, payload: {girls}};
}

export function edit(girl) {
  return {type: types.EDIT, payload: {girl}};
}