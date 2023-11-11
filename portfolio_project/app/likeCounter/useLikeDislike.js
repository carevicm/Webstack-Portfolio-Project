"use client";
import { useReducer } from "react";

const initialState = {
  likeCount: 50,
  dislikeCount: 25,
  activeBtn: "none",
};

const LIKE_ACTION = "LIKE_ACTION";
const DISLIKE_ACTION = "DISLIKE_ACTION";

function reducer(state, action) {
  switch (action.type) {
    case LIKE_ACTION:
      let newDislikeCount =
        state.activeBtn === "dislike" && state.dislikeCount > 0
          ? state.dislikeCount - 1
          : state.dislikeCount;
      return {
        ...state,
        likeCount: state.likeCount + 1,
        dislikeCount: newDislikeCount,
        activeBtn: "like",
      };
    case DISLIKE_ACTION:
      let newLikeCount =
        state.activeBtn === "like" && state.likeCount > 0
          ? state.likeCount - 1
          : state.likeCount;
      return {
        ...state,
        likeCount: newLikeCount,
        dislikeCount: state.dislikeCount + 1,
        activeBtn: "dislike",
      };
    default:
      throw new Error("Invalid action type");
  }
}

function useLikeDislike() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLikeClick = () => {
    dispatch({ type: LIKE_ACTION });
  };

  const handleDislikeClick = () => {
    dispatch({ type: DISLIKE_ACTION });
  };

  return {
    likeCount: state.likeCount,
    dislikeCount: state.dislikeCount,
    activeBtn: state.activeBtn,
    handleLikeClick,
    handleDislikeClick,
  };
}

export default useLikeDislike;
