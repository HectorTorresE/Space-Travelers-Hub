/* eslint-disable camelcase */
export default function Mission(props) {
  // eslint-disable-next-line react/prop-types
  const { mission_id, mission_name, description } = props;
  return (
    <li>
      mission_id:
      {' '}
      {mission_id}
      ,
      mission_name:
      {' '}
      {mission_name}
      ,
      description:
      {' '}
      {description}
      ,
    </li>
  );
}
