import { ADD_OPERATION_LOG, DELETE_OPERATION_LOG, DELETE_ALL_OPERATION_LOG } from "../actions/index";

const operationLogs = (state = [], action) => {
  const operationLog = {
    description: action.description,
    operationAt: action.operationAt,
  };
  switch (action.type) {
    case ADD_OPERATION_LOG:
      return [operationLog, ...state];
    case DELETE_OPERATION_LOG:
      return [operationLog, ...state];
    default:
      return state;
  }
};

export default operationLogs;
