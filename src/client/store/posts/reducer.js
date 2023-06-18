const initAddModalState = {
  event: [],
  type: 'event',
  title: '',
  date_year: -1,
  date_month: -1,
  date_day: -1,
  week: -1,
  timeStart: -1,
  timeEnd: -1,
  tags: '',
  location: '',
}

export const addModalReducer = (state = initAddModalState, action) => {
  switch (action.type) {
      case 'SET_INPUT':
        return {
          ...state,
          type: action.input.type,
          title: action.input.title,
          date_year: action.input.date_year,
          date_month: action.input.date_month,
          date_day: action.input.date_day,
          week: action.input.week,
          timeStart: action.input.timeStart,
          timeEnd: action.input.timeEnd,
          tags: action.input.tags,
          location: action.input.location,
        }
      case 'END_LIST_POSTS':
        return {
          ...state,
          event: action.event,
        }
    // case 'SET_TITLE':
    //   return {
    //     ...state,
    //     title: action.title,
    //   }
    // case 'SET_DATE_YEAR':
    //   return {
    //     ...state,
    //     date_year: action.date_year,
    //   }
    // case 'SET_DATE_MONTH':
    //   return {
    //     ...state,
    //     date_month: action.date_month,
    //   }
    // case 'SET_DATE_DAY':
    //   return {
    //     ...state,
    //     date_day: action.date_day,
    //   }
    // case 'SET_WEEK':
    //   return {
    //     ...state,
    //     week: action.week,
    //   }
    // case 'SET_TIME_START':
    //   return {
    //     ...state,
    //     timeStart: action.timeStart,
    //   }
    // case 'SET_TIME_END':
    //   return {
    //     ...state,
    //     timeEnd: action.timeEnd,
    //   }
    // case 'SET_TAGS':
    //   return {
    //     ...state,
    //     tags: action.timeEnd,
    //   }
    // case 'SET_LOCATION':
    //   return {
    //     ...state,
    //     location: action.timeEnd,
    //   }
    default:
      return state;
  }
}

export default addModalReducer;