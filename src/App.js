import { useState } from "react";

function useLRUCache(capacity) {
  const [cache, setCache] = useState(new Map());
  console.log("IamInvoked");
  const remove = (key) => {
    cache.delete(key);
  };
  const get = () => {};
  const put = (value) => {
    if (cache.has(value)) cache.delete(value);
    else if (cache.size === capacity) {
      const last = cache.keys().next().value;
      remove(last);
    }
    cache.set(value, value);
  };
  return {
    cache,
    get,
    put,
  };
}

function App() {
  const { cache, get, put } = useLRUCache(2);
  const [value, setValue] = useState("");
  console.log("wedfcwsedf", cache.entries(), [...cache.entries()]);
  const reset = () => {
    setValue("");
  };
  const Add = () => {
    if (!value && ![0].includes(value)) alert("");
    put(value);
    reset();
  };
  return (
    <div>
      <h1> Hello World</h1>
      <div>
        <input />
        <button>Get</button>
        <button onClick={Add}>Add</button>
      </div>
      {[...cache.entries()].map(([key, value]) => {
        return <li>{`${key} => ${value}`}</li>;
      })}
    </div>
  );
}

export default App;
