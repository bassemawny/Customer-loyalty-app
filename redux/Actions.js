export const GET_REWARDS = 'GET_REWARDS';
export const COLLECT_REWARD = 'COLLECT_REWARD'

export const collectReward = rewardId => dispatch => {
    dispatch({
        type: COLLECT_REWARD,
        payload: rewardId,
    });
};
