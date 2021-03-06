import Button from "./Button";
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <haeder>
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </haeder>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};
export default Header;
