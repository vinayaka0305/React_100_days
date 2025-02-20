const Settings = ({ data, setData }) => {
  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      theme: e.target.name,
    }));
  };
  const { theme } = data;
  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={handleChange}
          />
          dark
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="light"
            checked={theme === "light"}
            onChange={handleChange}
          />
          light
        </label>
      </div>
    </div>
  );
};

export default Settings;
