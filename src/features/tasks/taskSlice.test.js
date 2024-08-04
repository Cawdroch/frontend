/* eslint- disable no-unused-vars */

import { configureMockStore } from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { getTasks } from "./taskSlice";
import taskService from "./taskService";

const mockStore = configureMockStore([thunk]);
const mock = new MockAdapter(axios);

describe("taskSlice", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      task: {
        tasks: [],
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: "",
      },
      auth: {
        user: { token: "mock_token" },
      },
    });
  });
  afterEach(() => {
    mock.reset();
    store.clearActions();
  });

  test('calls the task service to get tasks, async () =>{')
});
