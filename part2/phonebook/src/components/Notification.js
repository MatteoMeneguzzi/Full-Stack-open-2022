const Notification = ({ message }) => {
  return (
    <div>
      {message && (
        <div
          style={{
            color: "green",
            background: "lightgrey",
            fontSize: 20,
            borderStyle: "solid",
            borderRadius: 5,
            padding: 10,
            marginBottom: 10,
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Notification;
