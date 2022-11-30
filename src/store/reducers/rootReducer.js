import moment from "moment";
const initState = {
  users: [
    { id: 1, name: "Eric" },
    { id: 2, name: "HoiDanIT" },
  ],
  posts: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        users,
      };
      break;
    case "CREATE_USER":
      let randomid = moment().unix() + state.users.length;
      let user = {
        id: randomid,
        name: `Random + ${randomid}`,
      };
      return {
        ...state,
        users: [...state.users, user],
      };
    default:
      return state;
  }
};

export default rootReducer;
