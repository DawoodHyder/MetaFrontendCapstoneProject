import { initializeTimes, updateTimes } from "./Main";

test("initializeTimes returns correct initial times", () => {
  const times = initializeTimes();
  expect(times).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

test("updateTimes returns the same state", () => {
  const initialState = ["17:00", "18:00"];
  const newState = updateTimes(initialState, { type: "UPDATE_TIMES" });
  expect(newState).toEqual(initialState);
});
