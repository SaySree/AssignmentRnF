import fetch from 'isomorphic-fetch';

export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const UPDATE_SRC = 'UPDATE_SRC';
export const SET_AUTHENTICATION = 'SET_AUTHENTICATION';

function updateSrcString(searchStr) {
  return {
    type: UPDATE_SRC,
    searchStr,
  };
}

export function setAuth(isLoggedIn) {
  return {
    type: SET_AUTHENTICATION,
    isLoggedIn,
  };
}

export function validateLogin(isLoggedIn) {
  return {
    type: SET_AUTHENTICATION,
    login: isLoggedIn,
  };
}

function requestItems(searchStr) {
  return {
    type: REQUEST_ITEMS,
    searchStr,
  };
}

function receiveItems(searchStr, items) {
  return {
    type: RECEIVE_ITEMS,
    searchStr,
    items,
    receivedAt: Date.now(),
  };
}

function compareNames(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

function prepareItems(array) {
  let combined = [];
  array.forEach((item) => {
    combined = combined.concat(item.results);
  });

  return combined.map((item) => {
    if (Object.hasOwnProperty.call(item, 'orbital_period')) {
      return {
        type: 'planet',
        name: item.name,
        gravity: item.gravity,
        terrain: item.terrain,
        population: item.population,
      };
    }
  }).sort(compareNames);
}

function fetchAllItems(searchStr) {
  const endpoints = [
    `https://swapi.co/api/planets/?search=${searchStr}`,
  ];

  return (dispatch) => {
    /*
     * TODO Prepare responses as they come back
     * As opposed to in one go when all promises have returned as is current
     */
    dispatch(updateSrcString(searchStr));
    dispatch(requestItems(searchStr));
    return Promise.all(endpoints.map(url =>
      fetch(url).then(resp => resp.json())
    ))
    .then(array => prepareItems(array))
    .then(json => dispatch(receiveItems(searchStr, json)));
  };
}

function shouldFetchItems(state, searchStr) {
  const posts = state.itemsBySearchString[searchStr];
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  }
  return false;
}

export function fetchItemsIfNeeded(searchStr) {
  return (dispatch, getState) => {
    if (shouldFetchItems(getState(), searchStr)) {
      return dispatch(fetchAllItems(searchStr));
    }
    return dispatch(updateSrcString(searchStr));
  };
}

export function login(username, password) {
  return (dispatch) => {
    try {
      const url = `https://swapi.co/api/people/?search=${username}`;
      fetch(url)
      .then(response => response.json())
      .then((json) => {
        if (json.results.length > 0 && json.results[0].birth_year === password) {
          if (username === 'Luke Skywalker') {
            if (sessionStorage.clickcount && Number(sessionStorage.clickcount) === 15) {
              dispatch(validateLogin('max'));
              return false;
            }

            if (sessionStorage.clickcount) {
              sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
            } else {
              sessionStorage.clickcount = 1;
            }
          }
          dispatch(validateLogin(true));
        } else {
          dispatch(validateLogin(false));
        }
      });
    } catch (error) {
      console.log(error);
      dispatch(validateLogin(false));
    }
  };
}
