import { runawayButtonReducer, initialState } from './runaway.reducer';

describe('RunawayButtonReducer', () => {
  it('should return the initial state', () => {
    const state = runawayButtonReducer(undefined, { type: '@@INIT' });
    expect(state).toBe(initialState);
  });

  it('should handle unknown actions gracefully', () => {
    const state = runawayButtonReducer(initialState, { type: 'UNKNOWN' });
    expect(state).toBe(initialState);
  });
});
