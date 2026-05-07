import { Card } from '@heroui/react';
import Image from "next/image";


const PopularCard = ({data}) => {
    console.log(data)
    return (
        <Card>
            <div>
              <Image
              src={data.image}
              height={200}
              width={200}
              alt={data.title}

              />  
            </div>
        </Card>
    );
};

export default PopularCard;