import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from "react";
import SearchItem from "./SearchItem";


function App() {

  //const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');


  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try{
      JSON.parse(localStorage.getItem('todo_list'))
    }catch(err){
      setError(err.message)
    }finally{
      setLoading(false)
    }

    //fetch data from temporary json server

    /*const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw Error("Data not received");
        }
        const list = await response.json();
        setItems(list);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(()=>{async () =>  await fetchData() }, 2000);*/

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
      return;
    }
    addItem(newItem);
    setNewItem('');
  }

  const addItem = async (item) => {
    try{
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const addList = { id, checked: false, item };
      const newList = [...items, addList];
      setItems(newList);
      localStorage.setItem("todo_list",JSON.stringify(newList))
    }catch(err){
      setError(err.message)
    }
    //post data to temporary json server

    /*const option = {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(addList)
    };

    const result = await apiRequest(API_URL, option);
    if (result) {
      setError(result);
    }*/
  }

  const handleChange = async (id) => {
    try{
      const newList = items.map((item) => (
        item.id === id ? { ...item, checked: !item.checked } : item
      ))
      setItems(newList);
      localStorage.setItem("todo_list",JSON.stringify(newList))
    }catch(err){
      setError(err.message)
    }
    
    //update data from temporary json server

    /*const list = newList.filter((item) => item.id === id);
    const option = {
      method: "PATCH",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ checked: list[0].checked })
    }

    const patchUrl = `${API_URL}/${id}`;
    const result = await apiRequest(patchUrl, option);
    if (result) {
      setError(result);
    }*/
  }

  const handleClick = async (id) => {
    try{
      const newList = items.filter((item) => (
        item.id !== id
      ));
      setItems(newList);
      localStorage.setItem("todo_list",JSON.stringify(newList))
    }catch(err){
      setError(err.message)
    }

    //Delete data from temporary json server

    /*const option = {
      method: "DELETE"
    }
    const patchUrl = `${API_URL}/${id}`;
    const result = await apiRequest(patchUrl, option);
    if (result) {
      setError(result);
    }*/
  }

  return (
    <div className="App">
      <Header title="To Do List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <main>
        {error && <p style={{ color: "red" }}>{`Fetch Error:${error}`}</p>}
        {loading && <p style={{ color: "green" }}>Loading...</p>}
        {!error && !loading && <Content
          items={items.filter((item) => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleChange={handleChange}
          handleClick={handleClick}
        />}
      </main>
      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
