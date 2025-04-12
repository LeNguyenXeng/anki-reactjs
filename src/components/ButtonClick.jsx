function ButtonClick({ handleChange }) {
  const handleChangeName = (e) => {
    handleChange(e.target.value);
  };

  return <input onChange={handleChangeName} type="text" />;
}
export default ButtonClick;
