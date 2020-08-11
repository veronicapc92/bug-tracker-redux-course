import store from "./store";
import { bugAdded, bugRemoved } from "./actions";

store.dispatch(bugAdded({ description: "Bug 1" }));

store.dispatch(bugResolved({ id: 1 }));

store.dispatch(bugRemoved({ id: 1 }));
