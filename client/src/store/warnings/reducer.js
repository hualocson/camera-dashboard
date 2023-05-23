import {
  GET_ALL_WARNINGS,
  GET_ALL_WARNINGS_SUCCESS,
  GET_ALL_WARNINGS_FAILED,
  ADD_WARNING,
  ADD_WARNING_SUCCESS,
  ADD_WARNING_FAILED,
  MARK_AS_READED_WARNINGS,
  MARK_AS_READED_WARNINGS_SUCCESS,
  MARK_AS_READED_WARNINGS_FAILED,
  REMOVE_WARNINGS,
  REMOVE_WARNINGS_SUCCESS,
  REMOVE_WARNINGS_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  warnings: [],
};

const warnings = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_WARNINGS:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_WARNINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        warnings: action.payload,
      };

    case GET_ALL_WARNINGS_FAILED:
      return {
        ...state,
        loading: false,
        warnings: initialState.warnings,
      };

    case ADD_WARNING:
      return {
        ...state,
        loading: true,
      };

    case ADD_WARNING_SUCCESS:
      return {
        ...state,
        loading: false,
        warnings: [...state.warnings, action.payload],
      };

    case ADD_WARNING_FAILED:
      return {
        ...state,
        loading: false,
      };

    case MARK_AS_READED_WARNINGS:
      return {
        ...state,
        loading: true,
      };

    case MARK_AS_READED_WARNINGS_SUCCESS:
    {
      const { warningIds } = action.payload;
      const updatedWarnings = state.warnings.map((warning) => {
        if (warningIds.includes(warning._id)) {
          return { ...warning, isReaded: true };
        }
        return warning;
      });
      return {
        ...state,
        loading: false,
        warnings: updatedWarnings,
      };
    }

    case MARK_AS_READED_WARNINGS_FAILED:
      return {
        ...state,
        loading: false,
      };

    case REMOVE_WARNINGS:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_WARNINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        warnings: state.warnings
          .filter((warning) => !action.payload.warningIds.includes(warning._id)),
      };

    case REMOVE_WARNINGS_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default warnings;
