import React from 'react';
import { useState, useEffect } from 'react';

const Card = ({cardTitle, stakerate, stakeValue }) => {
  const [cardanoStakedValue, setCardanoStakedValue] = useState(0);
  const [cardanoStakeRate, setCardanoStakeRate] = useState(0);
  const [polkadotStakedValue, setPolkadotStakedValue] = useState(0);
  const [kusamaStakedValue, setKusamaStakedValue] = useState(0);
  const [polkadotStakeRate, setPolkadotStakeRate] = useState(0);
  const [kusamaStakeRate, setKusamaStakeRate] = useState(0);


  useEffect(() => {
    axios({
      method: "get",
      url: "https://api-beta.stakingrewards.com/v1/assets/overview/polkadot",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJuQ2xqdnZaTE5BUWtsVnlZdWNXNWdXdWZuY0kzIiwiaWF0IjoxNjkwOTU0MzUxLCJpc3MiOiJTdGFraW5ncmV3YXJkcyBQdWJsaWMgQVBJIn0.T_cPAE9MlVF7IJ9YD3NJS7YR0PlAl1hWTC0mk1_Vm-8",
      },
    }).then(function (response) {
      const roundedStakeRate = response.data.totalStaked.toFixed(2);
      const roundedStakeValue = response.data.stakedValue.toFixed(2);
      setPolkadotStakedValue(roundedStakeValue);
      setPolkadotStakeRate(roundedStakeRate);

    })
    .catch(function (error) {

      console.log(error);
    });
}, []);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
useEffect(() => {
  axios({
    method: "get",
    url: "https://api-beta.stakingrewards.com/v1/assets/overview/kusama",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJuQ2xqdnZaTE5BUWtsVnlZdWNXNWdXdWZuY0kzIiwiaWF0IjoxNjkwOTU0MzUxLCJpc3MiOiJTdGFraW5ncmV3YXJkcyBQdWJsaWMgQVBJIn0.T_cPAE9MlVF7IJ9YD3NJS7YR0PlAl1hWTC0mk1_Vm-8",
    },
  })
    .then(function (response) {
      const roundedStakeRate = response.data.totalStaked.toFixed(2);
      const roundedStakeValue = response.data.stakedValue.toFixed(2);
      setKusamaStakedValue(roundedStakeValue);
      setKusamaStakeRate(roundedStakeRate);

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}, []);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
useEffect(() => {
  axios({
    method: "get",
    url: "https://api-beta.stakingrewards.com/v1/assets/overview/cardano",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJuQ2xqdnZaTE5BUWtsVnlZdWNXNWdXdWZuY0kzIiwiaWF0IjoxNjkwOTU0MzUxLCJpc3MiOiJTdGFraW5ncmV3YXJkcyBQdWJsaWMgQVBJIn0.T_cPAE9MlVF7IJ9YD3NJS7YR0PlAl1hWTC0mk1_Vm-8",
    },
  })
    .then(function (response) {
      console.log(response.data.stakedValue);
      const roundedStakeRate = response.data.totalStaked.toFixed(2);
      const roundedStakeValue = response.data.stakedValue.toFixed(2);
      setCardanoStakedValue(roundedStakeValue);
      setCardanoStakeRate(roundedStakeRate);
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}, []);

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <div className="mt-4">
        <h3 className="text-lg font-bold">{cardTitle}</h3>
        <p className="mt-2 text-gray-600">
          Stakerate:{stakerate}
          Stakevalue: {stakeValue}
        </p>
      </div>
    </div>
  );
};

export default Card;
