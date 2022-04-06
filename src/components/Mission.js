/* eslint-disable camelcase */
export default function Mission(props) {
  // eslint-disable-next-line react/prop-types
  const { mission_name, description } = props;
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
        <button type="button">Join Mission</button>
      </td>
    </tr>
  );
}
