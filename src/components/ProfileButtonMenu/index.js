const ProfileMenu = ({ isLogged, close }) => {
  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        position: "absolute",
        backgroundColor: "white",
      }}
    >
      {isLogged !== null ? (
        <div>
          <p>logado logado</p>
        </div>
      ) : (
        <div>
          <p>não está não está</p>
        </div>
      )}
      <button onClick={() => close(false)}>Fechar</button>
    </div>
  );
};

export default ProfileMenu;
