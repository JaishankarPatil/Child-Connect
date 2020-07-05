import DesignationtActionTypes from "./designation.types";

export const fetchDesignationsStart = () => ({
  type: DesignationtActionTypes.FETCH_DESIGNATIONT_START,
});

export const fetchDesignationSuccess = (designations) => ({
  type: DesignationtActionTypes.FETCH_DESIGNATIONT_SUCCESS,
  payload: designations,
});

export const fetchDesignationFailure = (errorMessage) => ({
  type: DesignationtActionTypes.FETCH_DESIGNATIONT_FAILURE,
  payload: errorMessage,
});
