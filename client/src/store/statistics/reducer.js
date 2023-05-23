import {
  GET_ALL_STATISTICS,
  GET_ALL_STATISTICS_SUCCESS,
  GET_ALL_STATISTICS_FAILED,
  MARK_AS_READED_STATISTICS,
  MARK_AS_READED_STATISTICS_SUCCESS,
  MARK_AS_READED_STATISTICS_FAILED,
  REMOVE_STATISTICS,
  REMOVE_STATISTICS_SUCCESS,
  REMOVE_STATISTICS_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  statistics: [],
};

const getAllStatistics = (state = initialState, action) => {
  switch (action.type) {
    // GET USER INFO
    case GET_ALL_STATISTICS:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_STATISTICS_SUCCESS:
      return {
        ...state,
        loading: false,
        statistics: action.payload,
      };

    case GET_ALL_STATISTICS_FAILED:
      return {
        ...state,
        loading: false,
        statistics: initialState.statistics,
      };

    case MARK_AS_READED_STATISTICS:
      return {
        ...state,
        loading: true,
      };

    case MARK_AS_READED_STATISTICS_SUCCESS:
    {
      const { statisticIds } = action.payload;
      const updatedStatistics = state.statistics.map((statistic) => {
        if (statisticIds.includes(statistic._id)) {
          return { ...statistic, isReaded: true };
        }
        return statistic;
      });
      return {
        ...state,
        loading: false,
        statistics: updatedStatistics,
      };
    }

    case MARK_AS_READED_STATISTICS_FAILED:
      return {
        ...state,
        loading: false,
      };

    case REMOVE_STATISTICS:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_STATISTICS_SUCCESS:
      return {
        ...state,
        loading: false,
        statistics: state.statistics
          .filter((statistic) => !action.payload.statisticIds.includes(statistic._id)),
      };

    case REMOVE_STATISTICS_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default getAllStatistics;
