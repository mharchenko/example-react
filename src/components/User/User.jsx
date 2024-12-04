const User = ({ name, email, bio, skills, isOpenToWork = true }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{bio}</p>
      <p>{skills}</p>
      <p>{isOpenToWork}</p>
      <button>Delite</button>
    </div>
  );
};

export default User;
