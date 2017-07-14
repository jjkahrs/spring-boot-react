
export const INCREMENT_COUNT = 'INCREMENT_COUNT';

export const incrementCount = () => dispatch => {
    console.log('ping');
    dispatch({
        type: INCREMENT_COUNT
    });
};

