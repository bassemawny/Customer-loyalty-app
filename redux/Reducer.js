import { COLLECT_REWARD, GET_REWARDS } from "./Actions";

const initialState = {
    rewards: [],
    collectedRewards: [],
};

function rewardsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_REWARDS:
            return { ...state, rewards: action.payload };
        case COLLECT_REWARD:
            return { ...state, collectedRewards: [...state.collectedRewards, action.payload] };
        default:
            return state;
    }
}

export default rewardsReducer;