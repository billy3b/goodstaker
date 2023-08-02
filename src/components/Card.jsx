import React from 'react';
import { useState, useEffect } from 'react';

const Card = () => {
  const [cardanoStakedValue, setCardanoStakedValue] = useState(0);
  const [cardanoStakeRate, setCardanoStakeRate] = useState(0);
  const [polkadotStakedValue, setPolkadotStakedValue] = useState(0);
  const [kusamaStakedValue, setKusamaStakedValue] = useState(0);
  const [polkadotStakeRate, setPolkadotStakeRate] = useState(0);
  const [kusamaStakeRate, setKusamaStakeRate] = useState(0);

  const data = [
    {
      totalSupply: "1,340,519,708",
      imgURL:
        "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/Polkadot__1666094678.jpg",
      cardTitle: "Polkadot",
      stakeRate: polkadotStakeRate,
      totalBounded: polkadotStakedValue,
      validator: "Luganodes",
    },
    {
      totalSupply: "45,000,000,000",
      imgURL:
        "https://public.bnbstatic.com/static/academy/uploads-original/6628e286df1f461a86d25314c7204525.png",
      cardTitle: "Cardano",
      stakeRate: cardanoStakeRate,
      totalBounded: cardanoStakedValue,
      validator: "Luganodes",
    },
    {
      totalSupply: "9,651,217",
      imgURL:
        "https://polkadot.network/static/bed1c19deef483db7e55a76b92ece07b/ksm.png",
      cardTitle: "Kusama Chains",
      stakeRate: kusamaStakeRate,
      totalBounded: kusamaStakedValue,
      validator: "Luganodes",
    },
  ];

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

      const roundedStakeRate = response.data.totalStaked.toFixed(2);
      const roundedStakeValue = response.data.stakedValue.toFixed(2);
      setCardanoStakedValue(roundedStakeValue);
      setCardanoStakeRate(roundedStakeRate);

    })
    .catch(function (error) {
      console.log(error);
    });
}, []);

  return ( 
<>
  {data.map((card, index) => (
    <div key={index} className="p-4">
      <Card
        handleTickClick={handleTickClick}
        clickedCards={clickedCards}
        {...card}
      />
    </div>
  ))}
</>

)
};

export default Card;
