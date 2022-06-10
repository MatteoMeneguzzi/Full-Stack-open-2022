const Button = ({ value, text }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td style={{ width: "50px" }}>{text}</td>
            <td>{value}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Button;
