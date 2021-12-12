import { GET_REWARDS } from "./Actions";
import axios from 'axios';

const API_URL = 'https://staging.helloagain.at/api/v1/clients/5189/bounties/';

export const getRewards = () => {
    try {
        return async dispatch => {
            const res = await axios.get(`${API_URL}`);
            if (res.data) {
                dispatch({
                    type: GET_REWARDS,
                    payload: res.data,
                });
            } else {
                console.error('Unable to fetch data');
            }
        };
    } catch (error) {
        console.error(error);
    }
};
