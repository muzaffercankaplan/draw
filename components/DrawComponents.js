import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import Select from "react-select";

const initialValues = [
  { value: "Muzaffer", label: "Muzaffer" },
  { value: "Bektaş", label: "Bektaş" },
  { value: "Eren", label: "Eren" },
  { value: "Burak", label: "Burak" },
  { value: "Beytullah", label: "Beytullah" },
  { value: "Berkay", label: "Berkay" },
  { value: "B. Eren", label: "B. Eren" },
  { value: "Salih", label: "Salih" },
  { value: "Halil İbo", label: "Halil İbo" },
];

const DrawComponents = ({ setDrawOptions }) => {
  useEffect(() => {
    setDrawOptions(initialValues);
  }, []);
  const [newPerson, setNewPerson] = useState("");
  const [people, setPeople] = useState(initialValues);
  const handleAddPerson = () => {
    if (newPerson) {
      let newPeople = {
        value: newPerson,
        label: newPerson,
      };
      setPeople([...people, newPeople]);
      setNewPerson("");
    }
  };
  return (
    <div>
      <div className={styles.addPeople}>
        <input
          className={styles.addPeopleInput}
          value={newPerson}
          onChange={(e) => setNewPerson(e.target.value)}
        />

        <button
          disabled={!newPerson}
          className={styles.addPeopleButton}
          onClick={handleAddPerson}
        >
          Ekle
        </button>
      </div>
      <div style={{ minWidth: "300px", marginBottom: "10px" }}>
        <Select
          closeMenuOnSelect={false}
          defaultValue={people}
          isMulti
          options={people}
          onChange={(e) => setDrawOptions(e)}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      ></div>
    </div>
  );
};

export default DrawComponents;
