const Message = ({ autor = 'Incognito', message = '', isOnline = true }) => {
  return (
    <div>
      <h3>{autor}</h3>
      <p>{isOnline ? 'Online' : 'Ofline'}</p>
      <p>{message}!</p>
    </div>
  );
};

export default Message;
