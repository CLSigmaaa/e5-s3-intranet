import React from "react";

export default function Deliveries() {
  const [deliveries, setDeliveries] = React.useState([]);

  console.log(process.env.REACT_APP_API_URL);

  React.useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/deliveries")
      .then((response) => response.json())
      .then((data) => setDeliveries(data));
  }, []);

  return (
    <div className="px-6 py-3 flex flex-col">
      {deliveries.map((delivery, index) => (
        <a
          href={`/deliveries/${delivery.DeliveryID.S}`}
          key={index}
          className="p-4 my-2 bg-red-100 rounded-md"
        >
          <h2 className="text-2xl font-bold">
            Livraison du : {delivery.deliveryDate.S}
          </h2>
          <p className="text-red-600">
            À destination de : {delivery.destination.S}
          </p>
        </a>
      ))}
    </div>
  );
}
