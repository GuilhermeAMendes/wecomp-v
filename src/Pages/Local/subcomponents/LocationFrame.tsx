import "./Locationframe.css";
import { Card } from "@chakra-ui/react";
interface LocationProps {
  name: string;
  address: string;
  src: string;
}
export default function LocationFrame({ name, address, src }: LocationProps) {
  return (
    <Card
      backgroundColor={"rgba(164, 149, 235, 1)"}
      borderRadius={16}
      w={{ base: "85vw", md: "45%", lg: "fit-content" }}
      h={"auto"}
      display={"flex"}
      alignContent={"center"}
      justifyContent={"center"}
      color={"white"}
    >
      <div className="locationFrame">
        <div className="text-content">
          <h3>{name}</h3>
        </div>
        <iframe src={src}></iframe>
      </div>{" "}
      <div className="text-content">
        {" "}
        <p>{address}</p>
      </div>
    </Card>
  );
}
