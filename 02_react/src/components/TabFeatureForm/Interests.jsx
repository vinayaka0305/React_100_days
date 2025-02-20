const Interests = ({ data, setData, errors }) => {
  const { interests, music } = data;

  const handleChange = (e, name) => {
    setData((prev) => ({
      ...prev,
      interests: e.target.checked
        ? [...prev.interests, e.target.name]
        : prev.interests.filter((i) => i !== e.target.name),
    }));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleChange}
          />
          coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={interests.includes("music")}
            onChange={handleChange}
          />
          music
        </label>
      </div>
      {errors.interests && <span className="error">{errors.interests}</span>}
    </div>
  );
};

export default Interests;
