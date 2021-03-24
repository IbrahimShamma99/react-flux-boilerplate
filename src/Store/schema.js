import storage from "redux-persist/lib/storage";

const persistConfig = {
  user: {
    key: "user",
    storage: storage,
    blacklist: ["message"],
  },
  company: {
    key: "company",
    storage: storage,
  },
  sidebar: {
    key: "sidebar",
    storage: storage,
  },
};

export default persistConfig;
