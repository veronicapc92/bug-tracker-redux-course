import configureStore from "./store/configureStore";
import { loadBugs, addBug, resolveBug, assignBugToUser } from "./store/bugs";

const store = configureStore();

store.dispatch(loadBugs());
store.dispatch(addBug({ description: "a" }));
store.dispatch(resolveBug(1));
store.dispatch(assignBugToUser(1, 4));
