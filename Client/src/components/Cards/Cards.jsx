import Card from "../Card/Card";

export default function Cards(props) {
  const { characters, onClose } = props;

  return characters.map((ch) => {
    return (
      <Card
        key={ch.id}
        id={ch.id}
        name={ch.name}
        status={ch.status}
        species={ch.species}
        gender={ch.gender}
        origin={ch.origin}
        image={ch.image}
        onClose={onClose}
      />
    );
  });
}
