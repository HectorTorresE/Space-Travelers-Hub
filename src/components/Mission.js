/* eslint-disable camelcase */
export default function Mission(props) {
  const {
    // eslint-disable-next-line react/prop-types
    mission_name, description, reserved, onJoin, onLeave,
  } = props;
  return (
    <tr>
      <td>
        {mission_name}
      </td>
      <td>
        {description}
      </td>
      <td>
        <div className="badge disabled">NOT A MEMBER</div>
      </td>
      <td>
        {reserved
          ? <button className="warning" type="button" onClick={onLeave}>Leave Mission</button>
          : <button type="button" onClick={onJoin}>Join Mission</button>}
      </td>
    </tr>
  );
}
