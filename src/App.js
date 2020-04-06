import React, { useState } from "react";
import Table from "./components/Table";
import Quick from "react-quick-shortcut";
import history from "./services/history";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const columns = ["#", "Food", "Ingredients", "Price"];

  const [data, setData] = useState([
    {
      id: 1,
      name: "Chebi maki",
      ingredients: "(Salmão, camarão arroz, cream cheese e alga)",
      Price: "R$ 2,00",
    },
    {
      id: 2,
      name: "Skin roll",
      ingredients: "(Pele de salmão frito, arroz, cream cheese, alga)",
      Price: "R$ 1,90",
    },
    {
      id: 3,
      name: "Maki fruit",
      ingredients: "(Morango e manga, cream cheese, arroz, alga)",
      Price: "R$ 1,60",
    },
    {
      id: 4,
      name: "Maki goiabada",
      ingredients: "(Goiaba, cream cheese, arroz, alga)",
      Price: "R$ 1,70",
    },
  ]);

  function handleDelete() {
    if (selectedItem) {
      const items = data.filter((item) => item.id !== selectedItem);

      setData(items);
      setSelectedItem(null);
    }
  }

  function handleOnMouseOver(id) {
    setSelectedItem(id);
  }

  function handleOnMouseOut() {
    setSelectedItem(null);
  }

  function handleRedirectNew() {
    history.push("/food/new");
  }

  function handleRedirectEdit() {
    history.push(`/food/${selectedItem}`);
  }

  return (
    <div className="container mt-2">
      <Quick hotkey="F2" action={() => handleRedirectNew()} />
      <Quick hotkey="F3" action={() => handleRedirectEdit()} />
      <Quick hotkey="F4" action={() => handleDelete()} />
      {selectedItem}
      <Table
        columns={columns}
        data={data}
        handleOnMouseOver={handleOnMouseOver}
        handleOnMouseOut={handleOnMouseOut}
      />
    </div>
  );
}

export default App;
